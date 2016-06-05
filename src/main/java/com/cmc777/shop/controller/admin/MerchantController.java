package com.cmc777.shop.controller.admin;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.cmc777.shop.common.RespInfo;
import com.cmc777.shop.common.RetMsg;
import com.cmc777.shop.entity.Merchant;
import com.cmc777.shop.service.MerchantService;
import com.cmc777.shop.util.BeanUtil;

/**
 * 商户管理
 * @author 张军
 *
 */
@Controller
@RequestMapping("merchant")
public class MerchantController {
	@Autowired
	private MerchantService merchantService;
	
	private static final Logger LOGGER = LoggerFactory.getLogger(MerchantController.class);
	
	@RequestMapping(value = "get-merchants-page.json", method = RequestMethod.GET)
	@ResponseBody
	public RetMsg getMerchantsPage(Merchant merchant, Integer pageNo, Integer size) {
		Page<Merchant> page = merchantService.find(merchant, pageNo, size);
		
		return new RetMsg(RespInfo.SUCCESS.getRespCode(), RespInfo.SUCCESS.getRespMsg(), page);
	}
	
	
	@RequestMapping(value = "save.json", method = RequestMethod.POST)
	@ResponseBody
	public RetMsg saveMerchant(Merchant merchant) {
		String validateStr = BeanUtil.validateBean(merchant);
		if (StringUtils.isNotBlank(validateStr)) {
			return new RetMsg(RespInfo.VALIDATE_ERROR.getRespCode(), validateStr);
		}
		
		try {
			merchantService.save(merchant);
			
			return new RetMsg(RespInfo.SUCCESS.getRespCode(), RespInfo.SUCCESS.getRespMsg());
		} catch (Exception e) {
			LOGGER.error("商户" + merchant.getLoginName() + "更新数据失败", e);
			return new RetMsg(RespInfo.COMMON_ERROR.getRespCode(), RespInfo.COMMON_ERROR.getRespMsg());
		}
		
	}
	
	@RequestMapping("delete.json")
	@ResponseBody
	public RetMsg delete(@RequestParam(required = false) Integer id) {
		try {
			merchantService.delete(id);
			return new RetMsg(RespInfo.SUCCESS.getRespCode(), RespInfo.SUCCESS.getRespMsg());
		} catch (Exception e) {
			LOGGER.error("删除ID = " + id + "失败", e);
			return new RetMsg(RespInfo.COMMON_ERROR.getRespCode(), RespInfo.COMMON_ERROR.getRespMsg());
		}
	}

}
