package com.cmc777.shop.util;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

/**
 * Created by 张军 on 2016/5/14.
 */
public class JsonUtil {

    public static String objectToJson(Object object) {
    	try {
    		ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.writeValueAsString(object);
		} catch (JsonProcessingException e) {
			throw new RuntimeException(e);
		}
        
    }
}
