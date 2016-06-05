package com.cmc777.shop.service;

import com.cmc777.shop.common.BaseException;
import com.cmc777.shop.entity.Merchant;
import com.cmc777.shop.entity.vo.Login;

public interface LoginService {
	Merchant login(Login login) throws BaseException;
}
