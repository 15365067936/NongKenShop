package com.cmc777.shop.service;

import org.springframework.data.domain.Page;

import com.cmc777.shop.entity.Merchant;

public interface MerchantService {
	Merchant save(Merchant merchant);
	
	Merchant findByLoginName(String loginName);
	
	Page<Merchant> find(Merchant merchant, int pageNo, int size);
	
	void delete(Integer id);
}
