package com.cmc777.shop.service;

import org.springframework.data.domain.Page;

import com.cmc777.shop.common.BaseException;
import com.cmc777.shop.entity.Goods;

public interface GoodsService {
	Page<Goods> find(Goods search, int page, int count);
	
	Goods add(Goods goods);
	
	void update(Goods goods);
	
	void delete(Goods goods);

	Page<Goods> findFrontGoods(Goods goods, Integer page, Integer count);

	void deleteByMerchantId(Integer merchantId);

	void shelvesGoods(Goods goods) throws BaseException;

	void shelvesOutGoods(Goods goods) throws BaseException;

	Goods getCurrentGoods(Integer id);
}
