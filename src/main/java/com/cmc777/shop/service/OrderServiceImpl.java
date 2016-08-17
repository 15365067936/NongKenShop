package com.cmc777.shop.service;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cmc777.shop.common.BaseException;
import com.cmc777.shop.entity.Order;
import com.cmc777.shop.entity.OrderDetail;
import com.cmc777.shop.repository.shop.OrderRepository;

@Service
public class OrderServiceImpl implements OrderService {
	@Autowired
	private OrderRepository orderRepository;
	@Autowired
	private GoodsDetailService goodsDetailService;
	@Autowired
	private OrderDetailService orderDetailService;
	
	private static final Logger LOGGER = LoggerFactory.getLogger(OrderServiceImpl.class);

	@Override
	public Page<Order> find(Order order, Integer page, Integer count) {
		Pageable pageable = new PageRequest(page - 1, count);
		Specification<Order> spec = getWhere(order);
		Page<Order> ordersPage = orderRepository.findAll(spec, pageable);

		return ordersPage;
	}

	private Specification<Order> getWhere(final Order order) {
		Specification<Order> specification = new Specification<Order>() {
			
			@Override
			public Predicate toPredicate(Root<Order> root, CriteriaQuery<?> cq, CriteriaBuilder cb) {
				List<Predicate> predicates = new ArrayList<Predicate>();
				if (order != null && StringUtils.isNotBlank(order.getOrderCode())) {
					Predicate orderCode = cb.like(root.get("orderCode").as(String.class), order.getOrderCode());
					predicates.add(orderCode);
				}
				
				Predicate deletedPredicate = cb.equal(root.get("isDeleted").as(Boolean.class), false);
				predicates.add(deletedPredicate);
				
				Predicate[] pre = new Predicate[predicates.size()];
	            return cq.where(predicates.toArray(pre)).getRestriction();
			}
		};
		
		return specification;
	}

	@Override
	public boolean checkTotalPrice(Order order) {
		Double totals = 0d;
		for (OrderDetail orderDetail : order.getOrderDetails()) {
		    totals += orderDetail.getSinglPrice() * orderDetail.getGoodsCount();
		}
		System.out.println("計算的" + totals);
		System.out.println("傳過來的" + order.getTotalPrice());
		return totals.equals(order.getTotalPrice());
	}
	
	@Override
	@Transactional
	public void addOrder(Order order) throws BaseException {
		try {
			order = orderRepository.save(order);
		} catch (Exception e) {
			LOGGER.error("保存订单出错", e);
			throw new BaseException();
		}
		
		try {
			for (OrderDetail orderDetail : order.getOrderDetails()) {
				goodsDetailService.adjustNumber(orderDetail.getGoodsDetail(), "minus", orderDetail.getGoodsCount());
				orderDetail.setOrder(order);
				orderDetailService.addDetail(orderDetail);
				
			}
		} catch (Exception e) {
			LOGGER.error("保存订单详情出错", e);
			throw new BaseException();
		}
		
	}

	@Override
	@Transactional
	public void deleteOrder(Order order) {
		order = orderRepository.findOne(order.getId());
		order.setIsDeleted(true);
		orderRepository.save(order);
	}

	@Override
	public void update(Order order) {
		orderRepository.save(order);
	}

}
