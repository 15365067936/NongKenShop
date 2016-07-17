package com.cmc777.shop.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

@Entity
@Table(name = "cmc_goods_detail")
@DynamicInsert
@DynamicUpdate
public class GoodsDetail {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@ManyToOne
	@JoinColumn(name = "goods_id")
	private Goods goods;
	
	//规格
	@Column(length = 500)
	private String specifications; 
	
	//单价
	@NotNull(message = "单价不能为空")
	private Double price;
	
	private Float number;
	
	@Column(length = 10)
	@NotNull(message = "单位不能为空")
	private String unit = "斤";
	
	//打包方式
	@Column(length = 300)
	@NotNull(message = "打包方式不能为空")
	private String wayOfPacking;
	//运输方式
	@Column(length = 300)
	@NotNull(message = "运输方式不能为空")
	private String wayOfTransport;
	//物流
	@Column(length = 300)
	@NotNull(message = "物流不能为空")
	private String logisticsCompany;
	
	private Boolean isDeleted = false;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Goods getGoods() {
		return goods;
	}

	public void setGoods(Goods goods) {
		this.goods = goods;
	}

	public String getSpecifications() {
		return specifications;
	}

	public void setSpecifications(String specifications) {
		this.specifications = specifications;
	}

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	public Float getNumber() {
		return number;
	}

	public void setNumber(Float number) {
		this.number = number;
	}

	public String getWayOfPacking() {
		return wayOfPacking;
	}

	public void setWayOfPacking(String wayOfPacking) {
		this.wayOfPacking = wayOfPacking;
	}

	public String getWayOfTransport() {
		return wayOfTransport;
	}

	public void setWayOfTransport(String wayOfTransport) {
		this.wayOfTransport = wayOfTransport;
	}

	public String getLogisticsCompany() {
		return logisticsCompany;
	}

	public void setLogisticsCompany(String logisticsCompany) {
		this.logisticsCompany = logisticsCompany;
	}

	public String getUnit() {
		return unit;
	}

	public void setUnit(String unit) {
		this.unit = unit;
	}

	public Boolean getIsDeleted() {
		return isDeleted;
	}

	public void setIsDeleted(Boolean isDeleted) {
		this.isDeleted = isDeleted;
	}
	
}

