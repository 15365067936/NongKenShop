package com.cmc777.shop.controller.admin;

import java.util.List;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.cmc777.shop.common.RespInfo;
import com.cmc777.shop.common.RetMsg;
import com.cmc777.shop.entity.GoodsDetail;
import com.cmc777.shop.service.GoodsDetailService;
import com.cmc777.shop.util.BeanUtil;
import com.cmc777.shop.util.JsonUtil;

@Controller
@RequestMapping("goods-detail")
public class GoodsDetailController {
	@Autowired
	private GoodsDetailService goodsDetailService;
	
	private static final Logger LOGGER = LoggerFactory.getLogger(GoodsDetailController.class);
	
	@RequestMapping(value = "get-detail.json", method = RequestMethod.GET)
	@ResponseBody
	public RetMsg getDetailByGoods(@RequestParam(required = false) Integer goodsId) {
		if (goodsId == null) {
			return new RetMsg(RespInfo.VALIDATE_ERROR.getRespCode(), RespInfo.VALIDATE_ERROR.getRespMsg());
		}
		
		List<GoodsDetail> goodsDetails = goodsDetailService.findByGoodsId(goodsId);
		
		return new RetMsg(RespInfo.SUCCESS.getRespCode(), RespInfo.SUCCESS.getRespMsg(), goodsDetails);
		
	}
	
	@RequestMapping(value = "add-detail.json", method = RequestMethod.POST)
	@ResponseBody
	public RetMsg addDetail(@RequestBody GoodsDetail detail) {
		LOGGER.info("========>" + JsonUtil.objectToJson(detail));
		String validate = BeanUtil.validateBean(detail);
		if (StringUtils.isNotBlank(validate) || 
				(detail != null && detail.getId() != null)) {
			return new RetMsg(RespInfo.VALIDATE_ERROR.getRespCode(), validate);
		}
		
		try {
			goodsDetailService.addDetail(detail);
		} catch (Exception e) {
			LOGGER.error("add detail fail ,detail id = " + detail.getId(), e);
			return new RetMsg(RespInfo.COMMON_ERROR.getRespCode(), RespInfo.COMMON_ERROR.getRespMsg());
		}
		
		return new RetMsg(RespInfo.SUCCESS.getRespCode(), RespInfo.SUCCESS.getRespMsg());
	}
	
	@RequestMapping(value = "update-detail", method = RequestMethod.POST)
	@ResponseBody
	public RetMsg updateDetail(@RequestBody GoodsDetail detail) {
		if (detail == null || detail.getId() == null || detail.getGoods() == null || detail.getGoods().getId() == null) {
			return new RetMsg(RespInfo.VALIDATE_ERROR.getRespCode(), RespInfo.VALIDATE_ERROR.getRespMsg());
		}
		
		String validate = BeanUtil.validateBean(detail);
		if (StringUtils.isNotBlank(validate)) {
			return new RetMsg(RespInfo.VALIDATE_ERROR.getRespCode(), validate);
		}
		
		GoodsDetail detailInDb = goodsDetailService.findById(detail.getId());
		if (detailInDb == null || detail.getGoods() == null || detail.getGoods().getId() != detail.getGoods().getId()) {
			LOGGER.error("detail id = " + detail.getId() + ", detail's goodsid updated, this is forbidden!");
			return new RetMsg(RespInfo.VALIDATE_ERROR.getRespCode(), RespInfo.VALIDATE_ERROR.getRespMsg());
		}
		
		try {
			goodsDetailService.update(detail);
		} catch (Exception e) {
			LOGGER.error("update detail fail ,detail id = " + detail.getId(), e);
			return new RetMsg(RespInfo.COMMON_ERROR.getRespCode(), RespInfo.COMMON_ERROR.getRespMsg());
		}
		
		return new RetMsg(RespInfo.SUCCESS.getRespCode(), RespInfo.SUCCESS.getRespMsg());
	}
	
	@RequestMapping(value = "delete-detail.json", method = RequestMethod.POST)
	@ResponseBody
	public RetMsg deleteDetail(@RequestBody GoodsDetail detail) {
		if (detail == null || detail.getId() == null) {
			return new RetMsg(RespInfo.VALIDATE_ERROR.getRespCode(), RespInfo.VALIDATE_ERROR.getRespMsg());
		}
		
		try {
			goodsDetailService.deleteDetail(detail);
		} catch (Exception e) {
			LOGGER.error("delete detail fail ,detail id = " + detail.getId(), e);
			return new RetMsg(RespInfo.COMMON_ERROR.getRespCode(), RespInfo.COMMON_ERROR.getRespMsg());
		}
		
		return new RetMsg(RespInfo.SUCCESS.getRespCode(), RespInfo.SUCCESS.getRespMsg());
	}
	
}
