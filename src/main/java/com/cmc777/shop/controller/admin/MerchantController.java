package com.cmc777.shop.controller.admin;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.cmc777.shop.common.RespInfo;
import com.cmc777.shop.common.RetMsg;
import com.cmc777.shop.entity.Merchant;
import com.cmc777.shop.service.MerchantService;
import com.cmc777.shop.util.BeanUtil;
import com.cmc777.shop.util.JsonUtil;
import com.cmc777.shop.util.MD5;

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
	public RetMsg getMerchantsPage(Merchant merchant, Integer page, Integer count) {
		LOGGER.info(JsonUtil.objectToJson(merchant));
		Page<Merchant> merchants = merchantService.find(merchant, page, count);
		
		return new RetMsg(RespInfo.SUCCESS.getRespCode(), RespInfo.SUCCESS.getRespMsg(), merchants);
	}
	
	
	/**
	 * @param merchant
	 * @return
	 */
	@RequestMapping(value = "save.json", method = RequestMethod.POST)
	@ResponseBody
	public RetMsg saveMerchant(@RequestBody Merchant merchant) {
		String validateStr = BeanUtil.validateBean(merchant);
		if (StringUtils.isNotBlank(validateStr)) {
			return new RetMsg(RespInfo.VALIDATE_ERROR.getRespCode(), validateStr);
		}
		
		try {
			merchant.setPassword(MD5.GetMD5Code(merchant.getPassword()));
			merchantService.save(merchant);
			
			return new RetMsg(RespInfo.SUCCESS.getRespCode(), RespInfo.SUCCESS.getRespMsg());
		} catch (Exception e) {
			LOGGER.error("商户" + merchant.getLoginName() + "更新数据失败", e);
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
			LOGGER.error("删除ID = " + merchant.getId() + "失败", e);
			return new RetMsg(RespInfo.COMMON_ERROR.getRespCode(), RespInfo.COMMON_ERROR.getRespMsg());
		}
	}

}
