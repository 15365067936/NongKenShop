package com.cmc777.shop.entity.vo;

import java.util.HashMap;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;

import com.cmc777.shop.entity.Goods;
import com.cmc777.shop.entity.Merchant;

public class GoodsFilter {
	private Map<String, String> filter = new HashMap<String, String>();
	
	private Goods goods;

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
			goods.setName(filter.get("name"));
		}
		
		if (StringUtils.isNotBlank(filter.get("loginName"))) {
			Merchant merchant = new Merchant();
			merchant.setLoginName(filter.get("loginName"));
			goods.setMerchant(merchant);
		}
		
		return goods;
	}

	public void setGoods(Goods goods) {
		this.goods = goods;
	}
	
	
}
