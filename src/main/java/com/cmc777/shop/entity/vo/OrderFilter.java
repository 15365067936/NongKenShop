package com.cmc777.shop.entity.vo;

import java.util.HashMap;
import java.util.Map;

import com.cmc777.shop.entity.Order;

public class OrderFilter {
	private Map<String, String> filter = new HashMap<String, String>();
	private Order order;
	
	public Map<String, String> getFilter() {
		return filter;
	}
	public void setFilter(Map<String, String> filter) {
		this.filter = filter;
	}
	public Order getOrder() {
		return order;
	}
	public void setOrder(Order order) {
		this.order = order;
	}
	
	
}
