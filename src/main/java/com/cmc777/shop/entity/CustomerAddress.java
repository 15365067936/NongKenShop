package com.cmc777.shop.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

@Entity
@Table(name = "NSMemberAddress")
@DynamicInsert
@DynamicUpdate
public class CustomerAddress {

	@Id
	private Integer id;
	@Column(name = "MemberID")
	private Integer customerRelationId;
	@Column(name = "Province", length = 50)
	private String province;
	@Column(name = "ProvinceID")
	private Integer provinceId;
	@Column(name = "City", length = 50)
	private String city;
	@Column(name = "CityID")
	private Integer cityId;
	@Column(name = "Area", length = 50)
	private String area;
	@Column(name = "AreaID")
	private Integer areaId;
	@Column(name = "Address", columnDefinition = "nvarchar(max)")
	private String address;
	@Column(name = "RecipientName", length = 50)
	private String receiveName;
	@Column(name = "RecipientTel", length = 50)
	private String receiveTel;
	@Column(name = "RecipientMobile", length = 50)
	private String receiveMobile;
	@Column(name = "IsDefault")
	private Boolean idDefault;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Integer getCustomerRelationId() {
		return customerRelationId;
	}
	public void setCustomerRelationId(Integer customerRelationId) {
		this.customerRelationId = customerRelationId;
	}
	public String getProvince() {
		return province;
	}
	public void setProvince(String province) {
		this.province = province;
	}
	public Integer getProvinceId() {
		return provinceId;
	}
	public void setProvinceId(Integer provinceId) {
		this.provinceId = provinceId;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public Integer getCityId() {
		return cityId;
	}
	public void setCityId(Integer cityId) {
		this.cityId = cityId;
	}
	public String getArea() {
		return area;
	}
	public void setArea(String area) {
		this.area = area;
	}
	public Integer getAreaId() {
		return areaId;
	}
	public void setAreaId(Integer areaId) {
		this.areaId = areaId;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getReceiveName() {
		return receiveName;
	}
	public void setReceiveName(String receiveName) {
		this.receiveName = receiveName;
	}
	public String getReceiveTel() {
		return receiveTel;
	}
	public void setReceiveTel(String receiveTel) {
		this.receiveTel = receiveTel;
	}
	public String getReceiveMobile() {
		return receiveMobile;
	}
	public void setReceiveMobile(String receiveMobile) {
		this.receiveMobile = receiveMobile;
	}
	public Boolean getIdDefault() {
		return idDefault;
	}
	public void setIdDefault(Boolean idDefault) {
		this.idDefault = idDefault;
	}
	
	
}
