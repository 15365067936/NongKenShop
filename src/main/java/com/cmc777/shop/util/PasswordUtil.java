package com.cmc777.shop.util;

import java.util.Random;

public class PasswordUtil {
	
	private static final char[] lowerChar = {'a', 'b', 'c', 'd', 'e', 'f', 'g',
  			'h', 'i', 'j', 'k', 'l', 'm', 'n',
  			'o', 'p', 'q', 'r', 's', 't',
  			'u', 'v', 'w', 'x', 'y', 'z'};
	private static final char[] upperChar = {'A', 'B', 'C', 'D', 'E', 'F', 'G',
				'H', 'I', 'J', 'K', 'L', 'M', 'N',
				'O', 'P', 'Q', 'R', 'S', 'T',
				'U', 'V', 'W', 'X', 'Y', 'Z'};
	private static final char[] numChar = {'0', '1', '2', '3', '4', '5', '6', '7', '8', '9'};
	private static final char[] specChar = {'!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+'};
	
	private static final char[][] charGroups = {lowerChar, upperChar, numChar, specChar};
	
	private static final int CHAR_GROUPS_SIZE = 4;
	private static final int PASSWORD_LENGTH = 8;
	
	/**
	* 生成随机密码
	*
	* @param pwd_len
	* 生成的密码的总长度
	* @return 密码的字符串
	*/
	public static String genRandomNum() {
		StringBuffer pwd = new StringBuffer();
		for (int i = 0; i < PASSWORD_LENGTH; i++) {
			pwd.append(getRandomChar());
		}
		
		return pwd.toString();
	}
	
	private static char getRandomChar() {
		Random random = new Random();
		char[] group = charGroups[random.nextInt(CHAR_GROUPS_SIZE)];
		return group[random.nextInt(group.length)];
	}
	
}
