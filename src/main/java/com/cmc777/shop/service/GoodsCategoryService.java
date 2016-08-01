package com.cmc777.shop.service;

import java.util.List;

import com.cmc777.shop.entity.GoodsCategory;

public interface GoodsCategoryService {

	List<GoodsCategory> find(GoodsCategory category);

	void addCategory(GoodsCategory category);

	void updateCategory(GoodsCategory category);

	void deleteCategory(GoodsCategory category);

	GoodsCategory findOne(GoodsCategory goodsCategory);

}
