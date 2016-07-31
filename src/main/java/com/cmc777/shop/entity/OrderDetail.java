package com.cmc777.shop.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

@Entity
@Table(name = "cmc_order_detail")
@DynamicInsert
@DynamicUpdate
public class OrderDetail {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private Float goodsCount;
	
	private String goodsName;
	private String specifications;
	private Double singlPrice;
	
	@ManyToOne
	private GoodsDetail goodsDetail;
	
	@ManyToOne
	@JoinColumn(name = "order_id")
	private Order order;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Float getGoodsCount() {
		return goodsCount;
	}

	public void setGoodsCount(Float goodsCount) {
		this.goodsCount = goodsCount;
	}

	public String getGoodsName() {
		return goodsName;
	}

	public void setGoodsName(String goodsName) {
		this.goodsName = goodsName;
	}

	public String getSpecifications() {
		return specifications;
	}

	public void setSpecifications(String specifications) {
		this.specifications = specifications;
	}

	public Double getSinglPrice() {
		return singlPrice;
	}

	public void setSinglPrice(Double singlPrice) {
		this.singlPrice = singlPrice;
	}

	public GoodsDetail getGoodsDetail() {
		return goodsDetail;
	}

	public void setGoodsDetail(GoodsDetail goodsDetail) {
		this.goodsDetail = goodsDetail;
	}

	public Order getOrder() {
		return order;
	}

	public void setOrder(Order order) {
		this.order = order;
	}
	
	
}
