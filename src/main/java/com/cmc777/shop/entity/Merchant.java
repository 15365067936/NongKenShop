package com.cmc777.shop.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.validation.constraints.NotNull;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

/**
 * 商户表
 * @author 张军
 *
 */

@Entity
@Table(name = "cmc_merchant")
@DynamicInsert
@DynamicUpdate
public class Merchant {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	//用戶名
	@Column(length = 60, nullable = false)
	@NotNull(message = "登录名不能为空")
	private String loginName;
	//密码
	@NotNull(message = "密码不能为空")
	@Column(length = 64, nullable = false)
	private String password;
	//是否冻结
	@Column(nullable = false)
	private Boolean isForbidden = false;
	//投诉次数
	private Integer complaintTimes = 0;
	//电话号码
	@NotNull(message = "电话号码不能为空")
	@Column(length = 15, nullable = false)
	private String phone;
	//名称
	@Column(length = 100)
	private String name;
	//地域
	@Column(length = 500)
	private String address;
	@Transient
	private String isForbiddenName;
	
	private Boolean isDeleted = false;
	
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getLoginName() {
		return loginName;
	}

	public void setLoginName(String loginName) {
		this.loginName = loginName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Boolean getIsForbidden() {
		return isForbidden;
	}

	public void setIsForbidden(Boolean isForbidden) {
		this.isForbidden = isForbidden;
	}

	public Integer getComplaintTimes() {
		return complaintTimes;
	}

	public void setComplaintTimes(Integer complaintTimes) {
		this.complaintTimes = complaintTimes;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public Boolean getIsDeleted() {
		return isDeleted;
	}

	public void setIsDeleted(Boolean isDeleted) {
		this.isDeleted = isDeleted;
	}

	public String getIsForbiddenName() {
		return isForbidden ? "是" : "否" ;
	}

	public void setIsForbiddenName(String isForbiddenName) {
		this.isForbiddenName = isForbiddenName;
	}
	
	
}
