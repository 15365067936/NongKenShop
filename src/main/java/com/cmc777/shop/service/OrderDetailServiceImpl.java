package com.cmc777.shop.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cmc777.shop.entity.Order;
import com.cmc777.shop.entity.OrderDetail;
import com.cmc777.shop.repository.shop.OrderDetailRepository;

@Service
public class OrderDetailServiceImpl implements OrderDetailService{
	
	@Autowired
	private OrderDetailRepository orderDetailRepository;

	@Override
	@Transactional
	public void addDetails(List<OrderDetail> orderDetails) {
		orderDetailRepository.save(orderDetails);
	}

	@Override
	@Transactional
	public void addDetail(OrderDetail orderDetail) {
		orderDetailRepository.save(orderDetail);		
	}

	@Override
	public List<OrderDetail> findByOrder(Order order) {
		return orderDetailRepository.findByOrder(order);
	}

}
