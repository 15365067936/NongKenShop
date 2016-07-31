package com.cmc777.shop.service;

import java.util.List;

import com.cmc777.shop.entity.OrderDetail;

public interface OrderDetailService {

	void addDetails(List<OrderDetail> orderDetails);

	void addDetail(OrderDetail orderDetail);

}
