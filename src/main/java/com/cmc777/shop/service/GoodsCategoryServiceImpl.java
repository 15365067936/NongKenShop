package com.cmc777.shop.service;

import java.util.List;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cmc777.shop.entity.GoodsCategory;
import com.cmc777.shop.repository.shop.GoodsCategoryRepository;

@Service
public class GoodsCategoryServiceImpl implements GoodsCategoryService{
	
	@Autowired
	private GoodsCategoryRepository goodsCategoryRepository;

	@Override
	public List<GoodsCategory> find(GoodsCategory category) {
		if (category != null && StringUtils.isNotBlank(category.getName())) {
			return goodsCategoryRepository.findByNameLike(category.getName());
		}
		
		return (List<GoodsCategory>) goodsCategoryRepository.findAll();
	}
	
	@Override
	public void addCategory(GoodsCategory category) {
		goodsCategoryRepository.save(category);
		
	}

	@Override
	public void updateCategory(GoodsCategory category) {
		goodsCategoryRepository.save(category);
		
	}

	@Override
	public void deleteCategory(GoodsCategory category) {
		goodsCategoryRepository.delete(category);
		
	}

}
