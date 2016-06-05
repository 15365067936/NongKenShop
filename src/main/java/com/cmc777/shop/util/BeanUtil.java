package com.cmc777.shop.util;

import java.util.Set;

import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;
import javax.validation.ValidatorFactory;


public class BeanUtil {

	public static <T> String validateBean(T t) {
		ValidatorFactory factory = Validation.buildDefaultValidatorFactory();   
		Validator validator = factory.getValidator(); 
		Set<ConstraintViolation<T>> set = validator.validate(t);   
		for (ConstraintViolation<T> constraintViolation: set) {
			return constraintViolation.getMessage();
		}
		
		return "";
	}
	
}
