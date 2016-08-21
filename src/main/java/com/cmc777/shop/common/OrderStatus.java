package com.cmc777.shop.common;

public enum OrderStatus {
	NOT_PAY("未支付"),
	NOT_DELIVER("未发货"),
	HAS_DELIVER("未已发货"),
	HAS_RECEIVED("已收货"),
	HAS_CLOSED("已关闭");
	
	private String statusName;
	
	OrderStatus(String value) {
		this.statusName = value;
	}

	public String getStatusName() {
		return statusName;
	}

	public void setStatusName(String statusName) {
		this.statusName = statusName;
	}
	
	public static String getStatusName(String key) {
		for (OrderStatus orderStatus : OrderStatus.values()) {
			if (orderStatus.name().equals(key)) {
				return orderStatus.getStatusName();
			}
		}
		
		return "";
	}
	
	
}
