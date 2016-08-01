package com.cmc777.shop.controller.admin;

import java.util.List;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.cmc777.shop.common.RespInfo;
import com.cmc777.shop.common.RetMsg;
import com.cmc777.shop.entity.GoodsCategory;
import com.cmc777.shop.entity.GoodsCategoryType;
import com.cmc777.shop.service.GoodsCategoryService;
import com.cmc777.shop.service.GoodsCategoryTypeService;
import com.cmc777.shop.util.BeanUtil;

@Controller
@RequestMapping("goods-category-type")
public class GoodsCategoryTypeController {
	@Autowired
	private GoodsCategoryTypeService goodsCategoryTypeService;
	@Autowired
	private GoodsCategoryService categoryService;
	
	private static final Logger LOGGER = LoggerFactory.getLogger(GoodsCategoryTypeController.class);
	
	@ModelAttribute
	public GoodsCategoryType get(@RequestParam(required=false) Integer id) {
		if (id != null){
			return goodsCategoryTypeService.get(id);
		}else{
			return new GoodsCategoryType();
		}
	}
	
	@RequestMapping(value = "get-category-types.json", method = RequestMethod.GET)
	@ResponseBody
	public RetMsg getCategoryTypes(GoodsCategoryType goodsCategoryType) {
		List<GoodsCategoryType> categoryTypes = goodsCategoryTypeService.findAll();
		return new RetMsg(RespInfo.SUCCESS.getRespCode(), RespInfo.SUCCESS.getRespMsg(), categoryTypes);
	}
	
	@RequestMapping(value = "add.json", method = RequestMethod.POST)
	@ResponseBody
	public RetMsg add(@RequestBody GoodsCategoryType categoryType) {
		String validate = BeanUtil.validateBean(categoryType);
		if (StringUtils.isNotBlank(validate)) {
			return new RetMsg(RespInfo.VALIDATE_ERROR.getRespCode(), validate);
		}
		
		try {
			goodsCategoryTypeService.add(categoryType);
			return new RetMsg(RespInfo.SUCCESS.getRespCode(), RespInfo.SUCCESS.getRespMsg());
		} catch (Exception e) {
			LOGGER.error("add category type fail , categoryType name = " + categoryType.getName(), e);
			return new RetMsg(RespInfo.COMMON_ERROR.getRespCode(), RespInfo.COMMON_ERROR.getRespMsg());
		}
	}
	
	@RequestMapping(value = "update.json", method = RequestMethod.POST)
	@ResponseBody
	public RetMsg update(@RequestBody GoodsCategoryType categoryType) {
		if (categoryType.getId() == null) {
			return new RetMsg(RespInfo.VALIDATE_ERROR.getRespCode(), RespInfo.VALIDATE_ERROR.getRespMsg());
		}
		
		String validate = BeanUtil.validateBean(categoryType);
		if (StringUtils.isNotBlank(validate)) {
			return new RetMsg(RespInfo.VALIDATE_ERROR.getRespCode(), validate);
		}
		
		try {
			goodsCategoryTypeService.update(categoryType);
			return new RetMsg(RespInfo.SUCCESS.getRespCode(), RespInfo.SUCCESS.getRespMsg());
		} catch (Exception e) {
			LOGGER.error("update category type fail , categoryType id = " + categoryType.getId(), e);
			return new RetMsg(RespInfo.COMMON_ERROR.getRespCode(), RespInfo.COMMON_ERROR.getRespMsg());
		}
	}
	
	@RequestMapping(value = "delete.json", method = RequestMethod.POST)
	@ResponseBody
	public RetMsg delete(@RequestBody GoodsCategoryType categoryType) {
		if (categoryType.getId() == null) {
			return new RetMsg(RespInfo.VALIDATE_ERROR.getRespCode(), RespInfo.VALIDATE_ERROR.getRespMsg());
		}
		
		try {
			goodsCategoryTypeService.delete(categoryType);
			return new RetMsg(RespInfo.SUCCESS.getRespCode(), RespInfo.SUCCESS.getRespMsg());
		} catch (Exception e) {
			LOGGER.error("delete category type fail , categoryType id = " + categoryType.getId(), e);
			return new RetMsg(RespInfo.COMMON_ERROR.getRespCode(), RespInfo.COMMON_ERROR.getRespMsg());
		}
	}
}
