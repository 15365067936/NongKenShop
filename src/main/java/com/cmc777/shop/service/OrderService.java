package com.cmc777.shop.service;

import org.springframework.data.domain.Page;

import com.cmc777.shop.common.BaseException;
import com.cmc777.shop.entity.Order;

public interface OrderService {

	Page<Order> find(Order order, Integer page, Integer count);

	boolean checkTotalPrice(Order order);

	void addOrderService(Order order) throws BaseException;

	void deleteOrder(Order order);

	void update(Order order);

}
