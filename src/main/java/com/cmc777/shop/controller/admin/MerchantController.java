package com.cmc777.shop.controller.admin;

import java.util.List;

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
import com.cmc777.shop.common.RespInfo;
import com.cmc777.shop.common.RetMsg;
import com.cmc777.shop.entity.Merchant;
import com.cmc777.shop.entity.vo.MerchantFilter;
import com.cmc777.shop.service.MerchantService;
import com.cmc777.shop.util.BeanUtil;
import com.cmc777.shop.util.JsonUtil;
import com.cmc777.shop.util.MD5;
import com.cmc777.shop.util.PasswordUtil;

/**
 * merchant管理
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
	public RetMsg getMerchantsPage(MerchantFilter searchFilter, Integer page, Integer count) {
		LOGGER.info("查询merchant" + JsonUtil.objectToJson(searchFilter.getMerchant()));
		Page<Merchant> merchants = merchantService.find(searchFilter.getMerchant(), page, count);
		
		return new RetMsg(RespInfo.SUCCESS.getRespCode(), RespInfo.SUCCESS.getRespMsg(), merchants);
	}
	
	/**
	 * @param merchant
	 * @return
	 */
	@RequestMapping(value = "update.json", method = RequestMethod.POST)
	@ResponseBody
	public RetMsg updateMerchant(@RequestBody Merchant merchant) {
		LOGGER.info("update merchant ====>" + JsonUtil.objectToJson(merchant));
		String validateStr = BeanUtil.validateBean(merchant);
		if (StringUtils.isNotBlank(validateStr)) {
			return new RetMsg(RespInfo.VALIDATE_ERROR.getRespCode(), validateStr);
		}
		
		try {
			merchantService.update(merchant);
			
			return new RetMsg(RespInfo.SUCCESS.getRespCode(), RespInfo.SUCCESS.getRespMsg());
		} catch (Exception e) {
			LOGGER.error("merchant" + merchant.getLoginName() + "update fail", e);
			return new RetMsg(RespInfo.COMMON_ERROR.getRespCode(), RespInfo.COMMON_ERROR.getRespMsg());
		}
		
	}
	
	@RequestMapping(value = "add.json", method = RequestMethod.POST)
	@ResponseBody
	public RetMsg addMerchant(@RequestBody Merchant merchant) {
		LOGGER.info("add merchant ====>" + JsonUtil.objectToJson(merchant));
		String password = PasswordUtil.genRandomNum();
		merchant.setPassword(password);
		String validateStr = BeanUtil.validateBean(merchant);
		if (StringUtils.isNotBlank(validateStr)) {
			return new RetMsg(RespInfo.VALIDATE_ERROR.getRespCode(), validateStr);
		}
		
		try {
			merchant.setPassword(MD5.GetMD5Code(merchant.getPassword()));
			merchantService.add(merchant);
			
			return new RetMsg(RespInfo.SUCCESS.getRespCode(), RespInfo.SUCCESS.getRespMsg(), password);
		} catch (BaseException b) {
			LOGGER.error("merchant" + merchant.getLoginName() + "add fail", b);
			return new RetMsg(b.getErrorCode(), b.getMessage());
		} catch (Exception e) {
			LOGGER.error("merchant" + merchant.getLoginName() + "add fail", e);
			return new RetMsg(RespInfo.COMMON_ERROR.getRespCode(), RespInfo.COMMON_ERROR.getRespMsg());
		}
		
	}
	
	@RequestMapping("delete.json")
	@ResponseBody
	public RetMsg delete(@RequestBody Merchant merchant) {
		try {
			merchantService.delete(merchant.getId());
			return new RetMsg(RespInfo.SUCCESS.getRespCode(), RespInfo.SUCCESS.getRespMsg());
		} catch (Exception e) {
			LOGGER.error("deleteID = " + merchant.getId() + "fail", e);
			return new RetMsg(RespInfo.COMMON_ERROR.getRespCode(), RespInfo.COMMON_ERROR.getRespMsg());
		}
	}
	
	@RequestMapping(value = "reset-password.json", method = RequestMethod.POST)
	@ResponseBody
	public RetMsg resetPassword(@RequestBody Merchant merchant) {
		if (merchant == null || merchant.getId() == null) {
			return new RetMsg(RespInfo.NO_USER.getRespCode(), RespInfo.NO_USER.getRespMsg());
		}
		
		Merchant inDb = merchantService.findOne(merchant);
		String password = PasswordUtil.genRandomNum();
		inDb.setPassword(MD5.GetMD5Code(password));
		
		try {
			merchantService.update(inDb);
			
			return new RetMsg(RespInfo.SUCCESS.getRespCode(), RespInfo.SUCCESS.getRespMsg(), password);
		} catch (Exception e) {
			LOGGER.error("merchant" + merchant.getLoginName() + "reset password  fail", e);
			return new RetMsg(RespInfo.COMMON_ERROR.getRespCode(), RespInfo.COMMON_ERROR.getRespMsg());
		}
		
	}
	
	@RequestMapping(value = "myinfo.json", method = RequestMethod.POST)
	@ResponseBody
	public RetMsg getMyInfo(@RequestBody Merchant merchant) {
		if (merchant == null || merchant.getId() == null) {
			return new RetMsg(RespInfo.NO_USER.getRespCode(), RespInfo.NO_USER.getRespMsg());
		}
		
		Merchant inDb = merchantService.findOne(merchant);
		
		if (inDb == null) {
			return new RetMsg(RespInfo.NO_USER.getRespCode(), RespInfo.NO_USER.getRespMsg());
		}
		
		return new RetMsg(RespInfo.SUCCESS.getRespCode(), RespInfo.SUCCESS.getRespMsg(), inDb);
	}
	
	@RequestMapping(value = "change-password.json", method = RequestMethod.POST)
	@ResponseBody
	public RetMsg changePassword(String loginName, String oldPassword, String newPassword) {
		if (StringUtils.isBlank(loginName) || 
				StringUtils.isBlank(oldPassword) || 
				StringUtils.isBlank(newPassword)) {
			return new RetMsg(RespInfo.VALIDATE_ERROR.getRespCode(), RespInfo.VALIDATE_ERROR.getRespMsg());
		}
		
		List<Merchant> merchants = merchantService.findByLoginName(loginName);
		
		if (merchants == null || merchants.size() > 1) {
			return new RetMsg(RespInfo.NO_USER.getRespCode(), RespInfo.NO_USER.getRespMsg());
		}
		
		Merchant merchant = merchants.get(0);
		
		if (!MD5.GetMD5Code(oldPassword).equals(merchant.getPassword())) {
			return new RetMsg(RespInfo.ERR_PASSWORD.getRespCode(), RespInfo.ERR_PASSWORD.getRespMsg());
		}
		
		merchant.setPassword(MD5.GetMD5Code(newPassword));
		
		try {
			merchantService.update(merchant);
			
			return new RetMsg(RespInfo.SUCCESS.getRespCode(), RespInfo.SUCCESS.getRespMsg());
		} catch (Exception e) {
			LOGGER.error("merchant" + merchant.getLoginName() + "change password  fail", e);
			return new RetMsg(RespInfo.COMMON_ERROR.getRespCode(), RespInfo.COMMON_ERROR.getRespMsg());
		}
		
	}
}
