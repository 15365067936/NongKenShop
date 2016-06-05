package com.cmc777.shop.common;

public class BaseException extends Exception
{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private String errorCode;
	
	
	public String getErrorCode()
	{
		return errorCode;
	}

	public void setErrorCode(String errorCode)
	{
		this.errorCode = errorCode;
	}

	public BaseException()
	{
		super();
	}
	
	public BaseException(String msg)
	{
		super(msg);
	}
	
	public BaseException(String msg, String errorCode)
	{
		super(msg);
		setErrorCode(errorCode);
	}
}
