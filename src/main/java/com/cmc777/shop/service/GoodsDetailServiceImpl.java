package com.cmc777.shop.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cmc777.shop.entity.Goods;
import com.cmc777.shop.entity.GoodsDetail;
import com.cmc777.shop.repository.shop.GoodsDetailRepository;

@Service
public class GoodsDetailServiceImpl implements GoodsDetailService{
	
	@Autowired
	private GoodsDetailRepository goodsDetailRepository;

	@Override
	public List<GoodsDetail> findByGoodsId(Integer goodsId) {
		Goods goods = new Goods();
		goods.setId(goodsId);
		return goodsDetailRepository.findByGoodsAndIsDeleted(goods, false);
	}

	@Override
	@Transactional(readOnly = false)
	public void addDetail(GoodsDetail detail) {
		goodsDetailRepository.save(detail);
		
	}

	@Override
	public GoodsDetail findById(Integer id) {
		return goodsDetailRepository.findByIdAndIsDeleted(id, false);
	}

	@Override
	@Transactional(readOnly = false)
	public void update(GoodsDetail detail) {
		goodsDetailRepository.save(detail);
	}

	@Override
	@Transactional(readOnly = false)
	public void deleteDetail(GoodsDetail detail) {
		detail = goodsDetailRepository.findByIdAndIsDeleted(detail.getId(), false);
		detail.setIsDeleted(true);
		goodsDetailRepository.save(detail);
	}

}
