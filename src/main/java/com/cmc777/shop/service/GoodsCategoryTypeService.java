package com.cmc777.shop.service;

import java.util.List;

import com.cmc777.shop.entity.GoodsCategory;
import com.cmc777.shop.entity.GoodsCategoryType;

public interface GoodsCategoryTypeService {

	GoodsCategoryType get(Integer id);

	List<GoodsCategoryType> findAll();

	void add(GoodsCategoryType categoryType);

	void update(GoodsCategoryType categoryType);

	void delete(GoodsCategoryType categoryType);

	List<GoodsCategoryType> findByCategory(GoodsCategory goodsCategory);


}
