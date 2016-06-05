package com.cmc777.shop.util;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

public class PageUtil {
	public static Pageable getPageable(int page, int size) {
		Pageable pageable = new PageRequest(page, size);
		return pageable;
	}
}
