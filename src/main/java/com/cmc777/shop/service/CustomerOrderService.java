package com.cmc777.shop.service;

import com.cmc777.shop.common.BaseException;
import com.cmc777.shop.entity.CustomerOrder;

public interface CustomerOrderService {

	boolean checkTotalPrice(CustomerOrder order);

	CustomerOrder addCustomerOrder(CustomerOrder order) throws BaseException;

	CustomerOrder findByOrderCode(String orderCode);


}
