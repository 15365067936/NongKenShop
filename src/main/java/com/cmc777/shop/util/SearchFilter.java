package com.cmc777.shop.util;

import java.lang.reflect.Field;
import java.util.Map;

public class SearchFilter<T> {
	private Map<String, Object> filter;

	public Map<String, Object> getFilter() {
		return filter;
	}

	public void setFilter(Map<String, Object> filter) {
		this.filter = filter;
	}
	
	@SuppressWarnings("hiding")
	public <T> T getParams(Class c) throws IllegalArgumentException, IllegalAccessException, InstantiationException {
		Field[] fields = c.getDeclaredFields();
		for (Field field : fields) {
			if (filter.containsKey(field.getName())) {
				field.set(field.getType(), filter.get(field.getName()));
			}
		}
		
		return (T) c.newInstance();
	}
}
