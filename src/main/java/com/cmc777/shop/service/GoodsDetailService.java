package com.cmc777.shop.service;

import java.util.List;

import com.cmc777.shop.common.BaseException;
import com.cmc777.shop.entity.GoodsDetail;

public interface GoodsDetailService {

	List<GoodsDetail> findByGoodsId(Integer goodsId);

	void addDetail(GoodsDetail detail);

	GoodsDetail findById(Integer id);

	void update(GoodsDetail detail);

	void deleteDetail(GoodsDetail detail);

	void adjustNumber(GoodsDetail goodsDetail, String operation, Float goodsCount) throws BaseException;

}
