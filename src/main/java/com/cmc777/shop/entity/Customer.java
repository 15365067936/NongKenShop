package com.cmc777.shop.entity;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

@Entity
@Table(name = "CMSUser")
@DynamicInsert
@DynamicUpdate
public class Customer {
	@Id
	private Integer id;
	@Column(length = 50, name = "UserName")
	private String loginName;
	@Column(length = 50, name = "RealName")
	private String realName;
	@Column(length = 255, name = "Email")
	private String email;
	@Column(name = "Passportuid")
	private Integer relationId;
	@Column(name = "Mobile", length = 50)
	private String phone;
	@Column(name = "IsLocked")
	private Boolean isLocked;
	@Column(name = "IsValid")
	private Boolean isValid;
	@Column(name = "Tel", length = 50)
	private String telPhone;
	@Column(name = "UserRoleID")
	private Integer roleId;
	private Date lastLoginTime;
	
	@Transient
	private List<CustomerAddress> addresses;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getLoginName() {
		return loginName;
	}

	public void setLoginName(String loginName) {
		this.loginName = loginName;
	}

	public String getRealName() {
		return realName;
	}

	public void setRealName(String realName) {
		this.realName = realName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Integer getRelationId() {
		return relationId;
	}

	public void setRelationId(Integer relationId) {
		this.relationId = relationId;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public Boolean getIsLocked() {
		return isLocked;
	}

	public void setIsLocked(Boolean isLocked) {
		this.isLocked = isLocked;
	}

	public Boolean getIsValid() {
		return isValid;
	}

	public void setIsValid(Boolean isValid) {
		this.isValid = isValid;
	}

	public String getTelPhone() {
		return telPhone;
	}

	public void setTelPhone(String telPhone) {
		this.telPhone = telPhone;
	}

	public Integer getRoleId() {
		return roleId;
	}

	public void setRoleId(Integer roleId) {
		this.roleId = roleId;
	}

	public Date getLastLoginTime() {
		return lastLoginTime;
	}

	public void setLastLoginTime(Date lastLoginTime) {
		this.lastLoginTime = lastLoginTime;
	}

	public List<CustomerAddress> getAddresses() {
		return addresses;
	}

	public void setAddresses(List<CustomerAddress> addresses) {
		this.addresses = addresses;
	}
	
	
	

}
