package com.cmc777.shop.entity.vo;

import java.util.HashMap;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;

import com.cmc777.shop.entity.Merchant;

public class MerchantFilter {
	private Map<String, String> filter = new HashMap<String, String>();
	
	private Merchant merchant;

	public Map<String, String> getFilter() {
		return filter;
	}

	public void setFilter(Map<String, String> filter) {
		this.filter = filter;
	}

	public Merchant getMerchant() {
		if (merchant == null) {
			merchant = new Merchant();
		}
		
		if (StringUtils.isNotBlank(filter.get("loginName"))) {
			merchant.setLoginName(filter.get("loginName"));
		} 
		
		if (StringUtils.isNotBlank(filter.get("name"))) {
			merchant.setName(filter.get("name"));
		}
		
		return merchant;
	}

	public void setMerchant(Merchant merchant) {
		this.merchant = merchant;
	}
	
}
