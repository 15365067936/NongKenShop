package com.cmc777.shop.common;

public enum RespInfo {
	SUCCESS("1000", "success"),
	VALIDATE_ERROR("2001", "用户参数不合法"),
	NO_USER("3001", "用户不存在"),
	ERR_PASSWORD("3002", "用户密码不对"),
	ERR_VALIDATE_CODE("3003", "验证码不正确"),
	FORBIDDEN_ACCOUNT("3004", "用户账户被冻结"),
	NO_LOGIN("3005", "用户未登录"),
	COMMON_ERROR("1001", "系统异常,请稍后再试");
	
	private String respCode;
	private String respMsg;
	RespInfo(String respCode, String respMsg) {
		this.respCode = respCode;
		this.respMsg = respMsg;
	}
	public String getRespCode() {
		return respCode;
	}
	public void setRespCode(String respCode) {
		this.respCode = respCode;
	}
	public String getRespMsg() {
		return respMsg;
	}
	public void setRespMsg(String respMsg) {
		this.respMsg = respMsg;
	}
	
	

}
