package com.cmc777.shop.entity.vo;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.HashMap;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;

import com.cmc777.shop.entity.Goods;
import com.cmc777.shop.entity.Merchant;

public class GoodsFilter {
	private Map<String, String> filter = new HashMap<String, String>();
	
	private Goods goods;
	
	private String loginName;

	public Map<String, String> getFilter() {
		return filter;
	}

	public void setFilter(Map<String, String> filter) {
		this.filter = filter;
	}

	public Goods getGoods() {
		if (goods == null) {
			goods = new Goods();
		}
		
		if (StringUtils.isNotBlank(filter.get("name"))) {
			try {
				goods.setName(URLDecoder.decode(filter.get("name"), "utf-8"));
			} catch (UnsupportedEncodingException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
		}
		
		if (StringUtils.isNotBlank(filter.get("loginName"))) {
			Merchant merchant = new Merchant();
			merchant.setLoginName(filter.get("loginName"));
			goods.setMerchant(merchant);
		}
		
		if (StringUtils.isNotBlank(loginName)) {
			Merchant merchant = new Merchant();
			merchant.setLoginName(loginName);
			goods.setMerchant(merchant);
		}
		
		if (StringUtils.isNotBlank(filter.get("categoryId"))) {
			goods.setCategoryId(Integer.parseInt(filter.get("categoryId")));
		}
		
		if (StringUtils.isNotBlank(filter.get("categoryTypeId"))) {
			goods.setCategoryTypeId(Integer.parseInt(filter.get("categoryTypeId")));
		}
		
		return goods;
	}

	public void setGoods(Goods goods) {
		this.goods = goods;
	}

	public String getLoginName() {
		return loginName;
	}

	public void setLoginName(String loginName) {
		this.loginName = loginName;
	}
	
	
	
	
}
