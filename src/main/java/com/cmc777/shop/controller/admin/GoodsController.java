package com.cmc777.shop.controller.admin;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.cmc777.shop.common.Global;
import com.cmc777.shop.common.RespInfo;
import com.cmc777.shop.common.RetMsg;
import com.cmc777.shop.entity.Goods;
import com.cmc777.shop.entity.Merchant;
import com.cmc777.shop.entity.vo.GoodsFilter;
import com.cmc777.shop.service.GoodsService;
import com.cmc777.shop.util.BeanUtil;

@Controller
@RequestMapping("goods")
public class GoodsController {
	private static final Logger LOGGER = LoggerFactory.getLogger(GoodsController.class);
	
	@Autowired
	private GoodsService goodsService;
	
	@RequestMapping("get-goods-page.json")
	@ResponseBody
	public RetMsg getGoodsPage(GoodsFilter goodsFilter, Integer page, Integer count) {
		Goods goods = goodsFilter.getGoods();
		Page<Goods> goodsPage = goodsService.find(goods, page, count);
		
		return new RetMsg(RespInfo.SUCCESS.getRespCode(), RespInfo.SUCCESS.getRespMsg(), goodsPage);
	}
	
	@RequestMapping(value = "add-goods.json", method = RequestMethod.POST)
	@ResponseBody
	public RetMsg addGoods(@RequestBody Goods goods, HttpServletRequest request) {
		String errMsg = BeanUtil.validateBean(goods);
		if (StringUtils.isNotBlank(errMsg)) {
			return new RetMsg(RespInfo.VALIDATE_ERROR.getRespCode(), errMsg);
		}
		
//		Merchant current = (Merchant) request.getSession().getAttribute(Global.KEY_CURRENT_USER);
//		if (goods.getMerchant().getId() == null ||  
//				!goods.getMerchant().getId().equals(current.getId())) {
//			return new RetMsg(RespInfo.VALIDATE_ERROR.getRespCode(), errMsg);
//		}
		
		try {
			goodsService.add(goods);
		} catch (Exception e) {
			LOGGER.error("保存商品失败", e);
			return new RetMsg(RespInfo.COMMON_ERROR.getRespCode(), RespInfo.COMMON_ERROR.getRespMsg());
		}
		
		return new RetMsg(RespInfo.SUCCESS.getRespCode(), RespInfo.SUCCESS.getRespMsg());
	}
	
	@RequestMapping(value = "update-goods.json", method = RequestMethod.POST)
	@ResponseBody
	public RetMsg updateGoods(@RequestBody Goods goods) {
		String errMsg = BeanUtil.validateBean(goods);
		if (StringUtils.isNotBlank(errMsg)) {
			return new RetMsg(RespInfo.VALIDATE_ERROR.getRespCode(), errMsg);
		}
		
		try {
			goodsService.update(goods);
		} catch (Exception e) {
			LOGGER.error("保存商品失败");
			return new RetMsg(RespInfo.COMMON_ERROR.getRespCode(), RespInfo.COMMON_ERROR.getRespMsg());
		}
		
		return new RetMsg(RespInfo.SUCCESS.getRespCode(), RespInfo.SUCCESS.getRespMsg());
	}
	
	@RequestMapping(value = "delete-goods.json", method = RequestMethod.POST)
	@ResponseBody
	public RetMsg deleteGoods(@RequestBody Goods goods) {
		if (goods == null || goods.getId() == null) {
			return new RetMsg(RespInfo.VALIDATE_ERROR.getRespCode(), RespInfo.VALIDATE_ERROR.getRespMsg());
		}
		
		try {
			goodsService.delete(goods);
			return new RetMsg(RespInfo.SUCCESS.getRespCode(), RespInfo.SUCCESS.getRespMsg());
		} catch (Exception e) {
			LOGGER.error("id = " + goods.getId().toString() + ",删除商品失败");
			return new RetMsg(RespInfo.COMMON_ERROR.getRespCode(), RespInfo.COMMON_ERROR.getRespMsg());
		}
	}
}
