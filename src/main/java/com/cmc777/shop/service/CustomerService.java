package com.cmc777.shop.service;

import com.cmc777.shop.common.BaseException;
import com.cmc777.shop.entity.Customer;

public interface CustomerService {

	Customer findOne(Integer id) throws BaseException;

}
