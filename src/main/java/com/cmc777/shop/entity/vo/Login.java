package com.cmc777.shop.entity.vo;

import javax.validation.constraints.NotNull;

import org.apache.commons.lang3.StringUtils;

public class Login {
	@NotNull(message = "用户名不能为空")
	private String loginName;
	@NotNull(message = "用户密码不能为空")
	private String password;
	@NotNull(message = "用户验证码不能为空")
	private String validateCode;
	public String getLoginName() {
		return loginName;
	}
	public void setLoginName(String loginName) {
		this.loginName = loginName;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getValidateCode() {
		return validateCode;
	}
	public void setValidateCode(String validateCode) {
		this.validateCode = validateCode;
	}
	
	public boolean validate() {
		if (StringUtils.isBlank(loginName) || StringUtils.isBlank(password) || StringUtils.isBlank(validateCode)) {
			return false;
		}
		
		return true;
	}
	
	

}
