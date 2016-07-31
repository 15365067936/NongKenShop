package com.cmc777.shop.service;

import java.util.List;

import org.springframework.data.domain.Page;

import com.cmc777.shop.common.BaseException;
import com.cmc777.shop.entity.Merchant;

public interface MerchantService {
	Merchant add(Merchant merchant) throws BaseException;
	
	Merchant update(Merchant merchant) throws BaseException;
	
	Page<Merchant> find(Merchant merchant, int pageNo, int size);
	
	void delete(Integer id);

	Merchant findOne(Merchant merchant);

	List<Merchant> findByLoginName(String loginName);
}
