package com.cmc777.shop.service;

import org.springframework.data.domain.Page;

import com.cmc777.shop.entity.Goods;

public interface GoodsService {
	Page<Goods> find(Goods search, int page, int count);
	
	void save(Goods goods);
	
	void delete(Goods goods);
}