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
import org.springframework.web.bind.annotation.ResponseBody;

import com.cmc777.shop.common.RespInfo;
import com.cmc777.shop.common.RetMsg;
import com.cmc777.shop.entity.GoodsCategory;
import com.cmc777.shop.service.GoodsCategoryService;
import com.cmc777.shop.util.BeanUtil;

@Controller
@RequestMapping("goods-category")
public class GoodsCategoryController {
	@Autowired
	private GoodsCategoryService goodsCategoryService;
	
	private static final Logger LOGGER = LoggerFactory.getLogger(GoodsCategoryController.class);
	
	@RequestMapping(value = "get-categorys.json", method = RequestMethod.GET)
	@ResponseBody
	public RetMsg getAllCategorys(GoodsCategory category) {
		List<GoodsCategory> categorys = goodsCategoryService.find(category);
		
		return new RetMsg(RespInfo.SUCCESS.getRespCode(), RespInfo.SUCCESS.getRespMsg(), categorys);
	}
	
	@RequestMapping(value = "add.json", method = RequestMethod.POST)
	@ResponseBody
	public RetMsg addCategory(@RequestBody GoodsCategory category) {
		String validate = BeanUtil.validateBean(category);
		if (StringUtils.isNotBlank(validate)) {
			return new RetMsg(RespInfo.VALIDATE_ERROR.getRespCode(), validate);
		}
		
		try {
			goodsCategoryService.addCategory(category);
		} catch (Exception e) {
			LOGGER.error("add category fail, name is " + category.getName(), e);
			return new RetMsg(RespInfo.COMMON_ERROR.getRespCode(), RespInfo.COMMON_ERROR.getRespMsg());
		}
		
		return new RetMsg(RespInfo.SUCCESS.getRespCode(), RespInfo.SUCCESS.getRespMsg());
	}
	
	@RequestMapping(value = "update.json", method = RequestMethod.POST)
	@ResponseBody
	public RetMsg updateCategory(@RequestBody GoodsCategory category) {
		if (category == null || category.getId() == null) {
			return new RetMsg(RespInfo.VALIDATE_ERROR.getRespCode(), RespInfo.VALIDATE_ERROR.getRespMsg()); 
		}
		
		String validate = BeanUtil.validateBean(category);
		if (StringUtils.isNotBlank(validate)) {
			return new RetMsg(RespInfo.VALIDATE_ERROR.getRespCode(), validate);
		}
		
		try {
			goodsCategoryService.updateCategory(category);
		} catch (Exception e) {
			LOGGER.error("update category fail, name is " + category.getName(), e);
			return new RetMsg(RespInfo.COMMON_ERROR.getRespCode(), RespInfo.COMMON_ERROR.getRespMsg());
		}
		
		return new RetMsg(RespInfo.SUCCESS.getRespCode(), RespInfo.SUCCESS.getRespMsg());
	}
	
	@RequestMapping(value = "delete.json", method = RequestMethod.POST)
	@ResponseBody
	public RetMsg deleteCategory(@RequestBody GoodsCategory category) {
		if (category == null || category.getId() == null) {
			return new RetMsg(RespInfo.VALIDATE_ERROR.getRespCode(), RespInfo.VALIDATE_ERROR.getRespMsg()); 
		}
		
		try {
			goodsCategoryService.deleteCategory(category);
		} catch (Exception e) {
			LOGGER.error("delete category fail, id is " + category.getId(), e);
			return new RetMsg(RespInfo.COMMON_ERROR.getRespCode(), RespInfo.COMMON_ERROR.getRespMsg());
		}
		
		return new RetMsg(RespInfo.SUCCESS.getRespCode(), RespInfo.SUCCESS.getRespMsg());
	}
}
