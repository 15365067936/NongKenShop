package com.cmc777.shop.service;

import java.util.List;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cmc777.shop.common.BaseException;
import com.cmc777.shop.common.RespInfo;
import com.cmc777.shop.entity.Merchant;
import com.cmc777.shop.entity.vo.Login;
import com.cmc777.shop.repository.shop.MerchantRepository;
import com.cmc777.shop.util.JsonUtil;
import com.cmc777.shop.util.MD5;

@Service
public class LoginServiceImpl implements LoginService{
	
	@Autowired
	private MerchantRepository merchantRepository;
	
	private Logger LOGGER = LoggerFactory.getLogger(LoginServiceImpl.class);

	@Override
	public Merchant login(Login login) throws BaseException{
		List<Merchant> merchants = merchantRepository.findByLoginName(login.getLoginName());
		
		LOGGER.info("用户" + login.getLoginName() + "查询结果===>" + JsonUtil.objectToJson(merchants));
		if (merchants == null || merchants.size() <= 0) {
			throw new BaseException(RespInfo.NO_USER.getRespCode(), RespInfo.NO_USER.getRespMsg());
		}
		Merchant merchant = merchants.get(0);
				
		if(!checkPassword(login.getPassword(), merchant)) {
			throw new BaseException(RespInfo.ERR_PASSWORD.getRespCode(), RespInfo.ERR_PASSWORD.getRespMsg());
		}
		
		if (merchant.getIsForbidden()) {
			throw new BaseException(RespInfo.FORBIDDEN_ACCOUNT.getRespCode(), RespInfo.FORBIDDEN_ACCOUNT.getRespMsg());
		}
		
		return merchant;
	}
	
	private boolean checkPassword(String password, Merchant merchant) {
		if (StringUtils.isNotBlank(merchant.getPassword()) && merchant.getPassword().equals(MD5.GetMD5Code(password))) {
			return true;
		}
		
		return false;
	}

}
