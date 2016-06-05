package com.cmc777.shop.controller.admin;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.cmc777.shop.common.BaseException;
import com.cmc777.shop.common.Global;
import com.cmc777.shop.common.RespInfo;
import com.cmc777.shop.common.RetMsg;
import com.cmc777.shop.entity.Merchant;
import com.cmc777.shop.entity.vo.Login;
import com.cmc777.shop.service.LoginService;
import com.cmc777.shop.support.servlet.ValidateCodeServlet;
import com.cmc777.shop.util.JsonUtil;

@Controller
@RequestMapping("admin")
public class LoginController {
	
	@Autowired
	private LoginService loginService;
	
	private static final Logger LOGGER = LoggerFactory.getLogger(LoginController.class);
	
	@RequestMapping("login.json")
	@ResponseBody
	public RetMsg login(Login login, HttpServletRequest request) {
		LOGGER.info("login is " + JsonUtil.objectToJson(login));
		
		if (!login.validate()) {
			return new RetMsg(RespInfo.VALIDATE_ERROR.getRespCode(), RespInfo.VALIDATE_ERROR.getRespMsg());
		}
		
		if (!ValidateCodeServlet.validate(request, login.getValidateCode())) {
			return new RetMsg(RespInfo.ERR_VALIDATE_CODE.getRespCode(), RespInfo.ERR_VALIDATE_CODE.getRespMsg());
		}
		
		try {
			Merchant merchant = loginService.login(login);
			request.getSession().setAttribute(Global.KEY_CURRENT_USER, merchant);
			return new RetMsg(RespInfo.SUCCESS.getRespCode(), RespInfo.SUCCESS.getRespMsg(), merchant);
		} catch (BaseException e) {
			LOGGER.error("用户登录失败" + login.getLoginName(), e);
			return new RetMsg(e.getErrorCode(), e.getMessage());
		}
	}
	
}
