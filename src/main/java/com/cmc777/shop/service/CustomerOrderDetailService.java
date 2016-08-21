package com.cmc777.shop.service;

import java.util.List;

import com.cmc777.shop.entity.CustomerOrder;
import com.cmc777.shop.entity.CustomerOrderDetail;

public interface CustomerOrderDetailService {

	List<CustomerOrderDetail> findByCustomerOrder(CustomerOrder customerOrder);

}
