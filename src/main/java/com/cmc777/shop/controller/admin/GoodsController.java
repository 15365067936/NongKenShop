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

import com.cmc777.shop.common.BaseException;
import com.cmc777.shop.common.Global;
import com.cmc777.shop.common.RespInfo;
import com.cmc777.shop.common.RetMsg;
import com.cmc777.shop.entity.Goods;
import com.cmc777.shop.entity.Merchant;
import com.cmc777.shop.entity.vo.GoodsFilter;
import com.cmc777.shop.service.GoodsService;
import com.cmc777.shop.util.BeanUtil;
import com.cmc777.shop.util.JsonUtil;

@Controller
@RequestMapping("goods")
public class GoodsController {
	private static final Logger LOGGER = LoggerFactory.getLogger(GoodsController.class);
	
	@Autowired
	private GoodsService goodsService;
	
	@RequestMapping("get-goods-page.json")
	@ResponseBody
	public RetMsg getGoodsPage(GoodsFilter goodsFilter, Integer page, Integer count) {
		LOGGER.info(JsonUtil.objectToJson(goodsFilter));
		Goods goods = goodsFilter.getGoods();
		goods.setIsShelves(null);
		Page<Goods> goodsPage = goodsService.find(goods, page, count);
		
		return new RetMsg(RespInfo.SUCCESS.getRespCode(), RespInfo.SUCCESS.getRespMsg(), goodsPage);
	}
	
	@RequestMapping("front/get-goods-page.json")
	@ResponseBody
	public RetMsg getFrontGoodsPage(GoodsFilter goodsFilter, Integer page, Integer count) {
		LOGGER.info(JsonUtil.objectToJson(goodsFilter));
		Goods goods = goodsFilter.getGoods();
		Merchant merchant = new Merchant();
		merchant.setIsForbidden(false);
		goods.setMerchant(merchant);
		goods.setIsShelves(true);
		Page<Goods> goodsPage = goodsService.findFrontGoods(goods, page, count);
		
		return new RetMsg(RespInfo.SUCCESS.getRespCode(), RespInfo.SUCCESS.getRespMsg(), goodsPage);
	}
	
	
	@RequestMapping(value = "add-goods.json", method = RequestMethod.POST)
	@ResponseBody
	public RetMsg addGoods(@RequestBody Goods goods, HttpServletRequest request) {
		String errMsg = BeanUtil.validateBean(goods);
		if (StringUtils.isNotBlank(errMsg)) {
			return new RetMsg(RespInfo.VALIDATE_ERROR.getRespCode(), errMsg);
		}
		
		Merchant current = (Merchant) request.getSession().getAttribute(Global.KEY_CURRENT_USER);
		LOGGER.info("当前商户 =" + JsonUtil.objectToJson(current));
		LOGGER.info("传进来的商户 =" + goods.getMerchant().getId());
		if (goods.getMerchant().getId() == null ||  
				!goods.getMerchant().getId().equals(current.getId())) {
			return new RetMsg(RespInfo.VALIDATE_ERROR.getRespCode(), errMsg);
		}
		
		try {
			goods = goodsService.add(goods);
		} catch (Exception e) {
			LOGGER.error("保存商品失败", e);
			return new RetMsg(RespInfo.COMMON_ERROR.getRespCode(), RespInfo.COMMON_ERROR.getRespMsg());
		}
		
		return new RetMsg(RespInfo.SUCCESS.getRespCode(), RespInfo.SUCCESS.getRespMsg(), goods);
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
	
	@RequestMapping(value = "shelves-goods.json", method = RequestMethod.POST)
	@ResponseBody
	public RetMsg shelves(@RequestBody Goods goods) {
		if (goods == null || goods.getId() == null) {
			return new RetMsg(RespInfo.VALIDATE_ERROR.getRespCode(), RespInfo.VALIDATE_ERROR.getRespMsg());
		}
		
		try {
			if (goods.getIsShelves()) {
				goodsService.shelvesGoods(goods);
			} else {
				
				goodsService.shelvesOutGoods(goods);
			}
			return new RetMsg(RespInfo.SUCCESS.getRespCode(), RespInfo.SUCCESS.getRespMsg());
		} catch (BaseException e) {
			return new RetMsg(e.getErrorCode(), e.getMessage());
		} 
	}
	
	@RequestMapping(value = "get-current-goods.json", method = RequestMethod.GET)
	@ResponseBody
	public RetMsg getCurrentGoods(Integer id) {
		Goods goods = goodsService.getCurrentGoods(id);
		return new RetMsg(RespInfo.SUCCESS.getRespCode(), RespInfo.SUCCESS.getRespMsg(), goods);
	}
}
