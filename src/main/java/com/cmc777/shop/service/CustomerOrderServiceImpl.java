package com.cmc777.shop.service;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cmc777.shop.common.BaseException;
import com.cmc777.shop.common.OrderStatus;
import com.cmc777.shop.entity.CustomerOrder;
import com.cmc777.shop.entity.CustomerOrderDetail;
import com.cmc777.shop.entity.GoodsDetail;
import com.cmc777.shop.entity.Merchant;
import com.cmc777.shop.entity.Order;
import com.cmc777.shop.entity.OrderDetail;
import com.cmc777.shop.repository.shop.CustomerOrderDetailRepository;
import com.cmc777.shop.repository.shop.CustomerOrderRepository;

@Service
public class CustomerOrderServiceImpl implements CustomerOrderService{
	
	@Autowired
	private GoodsDetailService goodsDetailService;
	
	@Autowired
	private OrderService orderService;
	
	@Autowired
	private CustomerOrderRepository customerOrderRepository;
	
	@Autowired
	private CustomerOrderDetailRepository customerOrderDetailRepository;

	@Override
	public boolean checkTotalPrice(CustomerOrder customerOrder) {
		Double totals = 0d;
		for (CustomerOrderDetail customerOrderDetail : customerOrder.getCustomerOrderDetails()) {
		    totals += customerOrderDetail.getSinglPrice() * customerOrderDetail.getGoodsCount();
		}
		
		System.out.println("计算的" + totals);
		System.out.println("传过来的" + customerOrder.getTotalPrice());
		
		return totals.equals(customerOrder.getTotalPrice());
	}

	@Override
	@Transactional
	public CustomerOrder addCustomerOrder(CustomerOrder customerOrder) throws BaseException {
		List<Order> orders = generateOrders(customerOrder);
		
		for (Order order : orders) {
			orderService.addOrder(order);
		}
		
		customerOrder = customerOrderRepository.save(customerOrder);

		for (CustomerOrderDetail orderDetail : customerOrder.getCustomerOrderDetails()) {
			orderDetail.setCustomerOrder(customerOrder);
			customerOrderDetailRepository.save(orderDetail);
			
		}
		
		return customerOrder;
	}
	
	private List<Order> generateOrders(CustomerOrder customerOrder) {
		List<Order> orders = new ArrayList<Order>();
		
		List<Merchant> merchants = new ArrayList<Merchant>();
		for (CustomerOrderDetail customerOrderDetail : customerOrder.getCustomerOrderDetails()) {
			GoodsDetail detail = goodsDetailService.findById(customerOrderDetail.getGoodsDetail().getId());
			customerOrderDetail.setGoodsCode(detail.getGoods().getGoodsCode());
			customerOrderDetail.setSpecifications(detail.getSpecifications());
			OrderDetail orderDetail = customerOrderDetail.generateOrderDetail();
			
			if (!merchants.contains(detail.getGoods().getMerchant())) {
				merchants.add(detail.getGoods().getMerchant());
				Order order = customerOrder.generateOrder(detail.getGoods().getMerchant());
				order.getOrderDetails().add(orderDetail);
				orders.add(order);
			} else {
				for (Order order : orders) {
					if (order.getMerchant().equals(detail.getGoods().getMerchant())) {
						order.getOrderDetails().add(orderDetail);
					}
				}
			}
		}
		
		return orders;
	}

	@Override
	public CustomerOrder findByOrderCode(String orderCode) {
		return customerOrderRepository.findByOrderCode(orderCode);
	}

	@Override
	@Transactional
	public void updateCustomerOrderHasPay(String orderCode, String alipayTradeCode) {
		customerOrderRepository.updateCustomerOrderHasPay(OrderStatus.NOT_DELIVER.name(), orderCode, alipayTradeCode);
		orderService.updateOrderHasPay(orderCode, alipayTradeCode);
	}

	@Override
	public Page<CustomerOrder> find(CustomerOrder customerOrder, Integer page, Integer count) {
		Sort sort = new Sort(Direction.DESC, "id");
		Pageable pageable = new PageRequest(page - 1, count, sort);
		Specification<CustomerOrder> spec = getWhere(customerOrder);
		Page<CustomerOrder> ordersPage = customerOrderRepository.findAll(spec, pageable);

		return ordersPage;
	}
	
	private Specification<CustomerOrder> getWhere(final CustomerOrder customerOrder) {
		Specification<CustomerOrder> specification = new Specification<CustomerOrder>() {
			
			@Override
			public Predicate toPredicate(Root<CustomerOrder> root, CriteriaQuery<?> cq, CriteriaBuilder cb) {
				List<Predicate> predicates = new ArrayList<Predicate>();
				if (customerOrder != null && StringUtils.isNotBlank(customerOrder.getCustomerId())) {
					Predicate orderCode = cb.like(root.get("customerId").as(String.class), customerOrder.getCustomerId());
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
	@Transactional
	public void receiveOrder(String orderCode) {
		customerOrderRepository.updateStatus(orderCode, OrderStatus.HAS_RECEIVED.name());
		orderService.updateStatus(orderCode, OrderStatus.HAS_RECEIVED.name());
	}
	

}
