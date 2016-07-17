package com.cmc777.shop.util;

import java.io.IOException;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
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
    
	public static <T> T jsonToObject(String json, Class<T> c) {
    	ObjectMapper objectMapper = new ObjectMapper();
    	try {
			T t = (T) objectMapper.readValue(json.getBytes(), c);
			return t;
		} catch (JsonParseException e) {
			// TODO Auto-generated catch block
			throw new RuntimeException(e);
		} catch (JsonMappingException e) {
			// TODO Auto-generated catch block
			throw new RuntimeException(e);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			throw new RuntimeException(e);
		}
    }
}
