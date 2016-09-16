package com.cmc777.shop.entity.vo;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.HashMap;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;

import com.cmc777.shop.entity.Merchant;
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
		if (order == null) {
			order = new Order();
		}
		
		if (StringUtils.isNotBlank(filter.get("orderCode"))) {
			order.setOrderCode(filter.get("orderCode"));
		} else {
			order.setOrderCode(null);
		}
		
		if (StringUtils.isNotBlank(filter.get("loginName"))) {
			String loginName = "";
			try {
				loginName = URLDecoder.decode(filter.get("loginName"), "utf-8");
			} catch (UnsupportedEncodingException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			Merchant merchant = new Merchant();
			merchant.setLoginName(loginName);
			order.setMerchant(merchant);
		}
		
		return order;
	}
	public void setOrder(Order order) {
		this.order = order;
	}
	
	
}
