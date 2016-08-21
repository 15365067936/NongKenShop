package com.cmc777.shop.service;

import org.springframework.data.domain.Page;

import com.cmc777.shop.common.BaseException;
import com.cmc777.shop.entity.CustomerOrder;

public interface CustomerOrderService {

	boolean checkTotalPrice(CustomerOrder order);

	CustomerOrder addCustomerOrder(CustomerOrder order) throws BaseException;

	CustomerOrder findByOrderCode(String orderCode);

	void updateCustomerOrderHasPay(String orderCode, String alipayTradeCode);

	Page<CustomerOrder> find(CustomerOrder customerOrder, Integer page, Integer count);

	void receiveOrder(String orderCode);


}
