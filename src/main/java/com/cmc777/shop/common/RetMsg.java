package com.cmc777.shop.common;

import java.io.Serializable;

public class RetMsg implements Serializable{
	
	
	
	private static final long serialVersionUID = 1L;

	private String respMsg;
	
	private String respCode;
	
	private Object data;
	
	private String targetURL;

	public RetMsg(String respCode, String respMsg) {
		super();
		this.respCode = respCode;
		this.respMsg = respMsg;
	}

	public RetMsg(String respCode, String respMsg, Object data) {
		super();
		this.respMsg = respMsg;
		this.respCode = respCode;
		this.data = data;
	}

	public RetMsg(String respCode, String respMsg, Object data, String targetURL) {
		super();
		this.respMsg = respMsg;
		this.respCode = respCode;
		this.data = data;
		this.targetURL = targetURL;
	}

	public String getRespMsg() {
		return respMsg;
	}

	public void setRespMsg(String respMsg) {
		this.respMsg = respMsg;
	}

	public String getRespCode() {
		return respCode;
	}

	public void setRespCode(String respCode) {
		this.respCode = respCode;
	}

	public Object getData() {
		return data;
	}

	public void setData(Object data) {
		this.data = data;
	}

	public String getTargetURL() {
		return targetURL;
	}

	public void setTargetURL(String targetURL) {
		this.targetURL = targetURL;
	}
	
	
	
	
}
