package com.cmc777.shop.controller.admin;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.cmc777.shop.common.RespInfo;
import com.cmc777.shop.common.RetMsg;
import com.cmc777.shop.entity.Goods;
import com.cmc777.shop.service.GoodsService;
import com.cmc777.shop.util.BeanUtil;
import com.cmc777.shop.util.SearchFilter;

@Controller
@RequestMapping("goods")
public class GoodsController {
	private static final Logger LOGGER = LoggerFactory.getLogger(GoodsController.class);
	
	@Autowired
	private GoodsService goodsService;
	
	@RequestMapping("get-goods-page.json")
	@ResponseBody
	public RetMsg getGoodsPage(Goods goods, Integer page, Integer count) {
		Page<Goods> goodsPage = goodsService.find(goods, page, count);
		
		return new RetMsg(RespInfo.SUCCESS.getRespCode(), RespInfo.SUCCESS.getRespMsg(), goodsPage);
	}
	
	@RequestMapping("add-goods.json")
	@ResponseBody
	public RetMsg addGoods(@RequestBody Goods goods) {
		String errMsg = BeanUtil.validateBean(goods);
		if (StringUtils.isNotBlank(errMsg)) {
			return new RetMsg(RespInfo.VALIDATE_ERROR.getRespCode(), errMsg);
		}
		
		try {
			goodsService.save(goods);
		} catch (Exception e) {
			LOGGER.error("保存商品失败");
			return new RetMsg(RespInfo.COMMON_ERROR.getRespCode(), RespInfo.COMMON_ERROR.getRespMsg());
		}
		
		return new RetMsg(RespInfo.SUCCESS.getRespCode(), RespInfo.SUCCESS.getRespMsg());
	}
	
	@RequestMapping("delete-goods.json")
	@ResponseBody
	public RetMsg deleteGoods(@RequestBody Goods goods) {
		try {
			goodsService.delete(goods);
			return new RetMsg(RespInfo.SUCCESS.getRespCode(), RespInfo.SUCCESS.getRespMsg());
		} catch (Exception e) {
			LOGGER.error("id = " + goods.getId().toString() + ",删除商品失败");
			return new RetMsg(RespInfo.COMMON_ERROR.getRespCode(), RespInfo.COMMON_ERROR.getRespMsg());
		}
	}
}
