package com.cmc777.shop.controller.admin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.cmc777.shop.common.BaseException;
import com.cmc777.shop.common.RespInfo;
import com.cmc777.shop.common.RetMsg;
import com.cmc777.shop.entity.Customer;
import com.cmc777.shop.service.CustomerService;

@Controller
@RequestMapping("customer")
class CustomerController {
	@Autowired
	private CustomerService customerService;
	
	@RequestMapping(value = "info.json", method = RequestMethod.GET)
	@ResponseBody
	public RetMsg getCustomer(@RequestParam(required = false) Integer id){
		
		if (id == null) {
			return new RetMsg(RespInfo.VALIDATE_ERROR.getRespCode(), RespInfo.VALIDATE_ERROR.getRespMsg());
		}
		try {
			Customer customer = customerService.findOne(id);
			return new RetMsg(RespInfo.SUCCESS.getRespCode(), RespInfo.SUCCESS.getRespMsg(), customer);
		} catch (BaseException e) {
			return new RetMsg(e.getErrorCode(), e.getMessage());
		}
		
		
		
	}
}
