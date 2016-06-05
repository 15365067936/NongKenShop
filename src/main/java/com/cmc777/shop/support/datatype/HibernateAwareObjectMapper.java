package com.cmc777.shop.support.datatype;

import com.fasterxml.jackson.databind.ObjectMapper;

@SuppressWarnings("serial")
public class HibernateAwareObjectMapper extends ObjectMapper {

	public HibernateAwareObjectMapper() {
        registerModule(new Hibernate4Module());
    }
}
