package com.cmc777.shop.support.datatype;

import org.hibernate.engine.spi.Mapping;
import org.hibernate.proxy.HibernateProxy;

import com.fasterxml.jackson.databind.BeanDescription;
import com.fasterxml.jackson.databind.JavaType;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializationConfig;
import com.fasterxml.jackson.databind.ser.Serializers;

public class HibernateSerializers extends Serializers.Base
{
    protected final boolean _forceLoading;
    protected final boolean _serializeIdentifiers;
    protected final Mapping _mapping;

    public HibernateSerializers(boolean forceLoading)
    {
        this(forceLoading, false, null);
    }

    public HibernateSerializers(boolean forceLoading, boolean serializeIdentifiers)
    {
        this(forceLoading, serializeIdentifiers, null);
    }

    public HibernateSerializers(boolean forceLoading, boolean serializeIdentifiers, Mapping mapping)
    {
        _forceLoading = forceLoading;
        _serializeIdentifiers = serializeIdentifiers;
        _mapping = mapping;
    }

    @Override
    public JsonSerializer<?> findSerializer(SerializationConfig config,
            JavaType type, BeanDescription beanDesc)
    {
        Class<?> raw = type.getRawClass();
        if (HibernateProxy.class.isAssignableFrom(raw)) {
            return new HibernateProxySerializer(_forceLoading, _serializeIdentifiers, _mapping);
        }
        return null;
    }
}
