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
@Table(name = "cmc_customer_order_detail")
@DynamicInsert
@DynamicUpdate
public class CustomerOrderDetail {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private Float goodsCount;
	
	private String goodsName;
	private String goodsCode;
	private String specifications;
	private Double singlPrice;
	
	@ManyToOne
	private GoodsDetail goodsDetail;
	
	@ManyToOne
	@JoinColumn(name = "customer_order_id")
	private CustomerOrder customerOrder;

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

	public String getGoodsCode() {
		return goodsCode;
	}

	public void setGoodsCode(String goodsCode) {
		this.goodsCode = goodsCode;
	}

	public CustomerOrder getCustomerOrder() {
		return customerOrder;
	}

	public void setCustomerOrder(CustomerOrder customerOrder) {
		this.customerOrder = customerOrder;
	}

	public OrderDetail generateOrderDetail() {
		OrderDetail orderDetail = new OrderDetail();
		orderDetail.setGoodsCode(this.goodsCode);
		orderDetail.setGoodsCount(this.goodsCount);
		orderDetail.setGoodsDetail(this.goodsDetail);
		orderDetail.setGoodsName(this.goodsName);
		orderDetail.setSinglPrice(this.singlPrice);
		orderDetail.setSpecifications(this.specifications);
		return orderDetail;
	}
}
