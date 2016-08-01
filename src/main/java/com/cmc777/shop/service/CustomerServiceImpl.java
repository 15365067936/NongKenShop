package com.cmc777.shop.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cmc777.shop.common.BaseException;
import com.cmc777.shop.common.RespInfo;
import com.cmc777.shop.entity.Customer;
import com.cmc777.shop.entity.CustomerAddress;
import com.cmc777.shop.repository.shop.CustomerAddressRepository;
import com.cmc777.shop.repository.shop.CustomerRepository;

@Service
public class CustomerServiceImpl implements CustomerService {

	@Autowired
	private CustomerRepository customerRepository;
	
	@Autowired
	private CustomerAddressRepository customerAddressRepository;
	
	@Override
	public Customer findOne(Integer id) throws BaseException {
		Customer customer = customerRepository.findOne(id);
		if (customer == null) {
			throw new BaseException(RespInfo.NO_USER.getRespCode(), RespInfo.NO_USER.getRespMsg());
		}
		
		List<CustomerAddress>  addresses = customerAddressRepository.findByCustomerRelationId(customer.getRelationId());
		
		if (addresses != null && addresses.size() > 0) {
			customer.setAddresses(addresses);
		}
		
		return customer;
	}

}
