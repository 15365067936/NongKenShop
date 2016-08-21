package com.cmc777.shop.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cmc777.shop.entity.CustomerOrder;
import com.cmc777.shop.entity.CustomerOrderDetail;
import com.cmc777.shop.repository.shop.CustomerOrderDetailRepository;

@Service
public class CustomerOrderDetailServiceImpl implements CustomerOrderDetailService{

	@Autowired
	private CustomerOrderDetailRepository customerOrderDetailRepository;
	@Override
	public List<CustomerOrderDetail> findByCustomerOrder(CustomerOrder customerOrder) {
		return customerOrderDetailRepository.findByCustomerOrder(customerOrder);
	}

}
