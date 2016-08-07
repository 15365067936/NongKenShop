package com.cmc777.shop.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cmc777.shop.entity.GoodsCategory;
import com.cmc777.shop.entity.GoodsCategoryType;
import com.cmc777.shop.repository.shop.GoodsCategoryTypeRepository;

@Service
public class GoodsCategoryTypeServiceImpl implements GoodsCategoryTypeService {
	@Autowired
	private GoodsCategoryTypeRepository goodsCategoryTypeRepository;

	@Override
	public GoodsCategoryType get(Integer id) {
		return goodsCategoryTypeRepository.findOne(id);
	}

	@Override
	public List<GoodsCategoryType> findAll() {
		return (List<GoodsCategoryType>) goodsCategoryTypeRepository.findAll();
	}

	@Override
	public void add(GoodsCategoryType categoryType) {
		goodsCategoryTypeRepository.save(categoryType);
	}

	@Override
	public void update(GoodsCategoryType categoryType) {
		goodsCategoryTypeRepository.save(categoryType);
	}

	@Override
	public void delete(GoodsCategoryType categoryType) {
		goodsCategoryTypeRepository.delete(categoryType);
	}

	@Override
	public List<GoodsCategoryType> findByCategory(GoodsCategory goodsCategory) {
		return goodsCategoryTypeRepository.findByGoodsCategory(goodsCategory);
	}


}
