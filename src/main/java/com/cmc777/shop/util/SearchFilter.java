package com.cmc777.shop.util;

import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
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
	public <T> T getParams(Class c) throws IllegalArgumentException, IllegalAccessException, InstantiationException, NoSuchMethodException, SecurityException, InvocationTargetException {
		T t = (T) c.newInstance();
		if (filter != null) {
			Field[] fields = c.getDeclaredFields();
			for (Field field : fields) {
				if (filter.containsKey(field.getName())) {
					Method method = c.getMethod("set" + fieldNameStandard(field.getName()), field.getType());
					method.setAccessible(true);
					method.invoke(t, filter.get(field.getName()));
					
				}
			}
		}
		
		return t;
	}
	
	private String fieldNameStandard(String fieldName) {
		return fieldName.substring(0, 1).toUpperCase() + fieldName.substring(1);
	}
}
