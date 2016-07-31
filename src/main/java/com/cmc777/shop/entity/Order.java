package com.cmc777.shop.entity;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.validation.constraints.NotNull;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import com.cmc777.shop.common.OrderStatus;

@Entity
@Table(name = "cmc_order")
@DynamicInsert
@DynamicUpdate
public class Order {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column(length = 60)
	@NotNull(message = "订单编号不能为空")
	private String orderCode = createCode();
	@Column(length = 40)
	@NotNull(message = "客户Id不能为空")
	private String customerId;
	@OneToMany(mappedBy = "order")
	private List<OrderDetail> orderDetails = new ArrayList<OrderDetail>();
	@Column(length = 30)
	private String status = OrderStatus.NOT_DELIVER.name();
	@Column(length = 40)
	@NotNull(message = "物流编号不能为空")
	private String logisticsCode;
	@NotNull(message = "商户不能为空")
	@ManyToOne
	private Merchant merchant;
	@Column(length = 500)
	@NotNull(message = "发货地址不能为空")
	private String address;
	private Boolean isDeleted = false;
	@NotNull(message = "订单总价不能为空")
	private Double totalPrice;
	private Date createTime = new Date();
	private Date updateTime = createTime;
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getOrderCode() {
		return orderCode;
	}

	public void setOrderCode(String orderCode) {
		this.orderCode = orderCode;
	}

	public String getCustomerId() {
		return customerId;
	}

	public void setCustomerId(String customerId) {
		this.customerId = customerId;
	}
	
	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getLogisticsCode() {
		return logisticsCode;
	}

	public void setLogisticsCode(String logisticsCode) {
		this.logisticsCode = logisticsCode;
	}

	public Merchant getMerchant() {
		return merchant;
	}

	public void setMerchant(Merchant merchant) {
		this.merchant = merchant;
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

	public Double getTotalPrice() {
		return totalPrice;
	}

	public void setTotalPrice(Double totalPrice) {
		this.totalPrice = totalPrice;
	}

	public Date getCreateTime() {
		return createTime;
	}

	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}

	public Date getUpdateTime() {
		return updateTime;
	}

	public void setUpdateTime(Date updateTime) {
		this.updateTime = updateTime;
	}

	public List<OrderDetail> getOrderDetails() {
		return orderDetails;
	}

	public void setOrderDetails(List<OrderDetail> orderDetails) {
		this.orderDetails = orderDetails;
	}

	public int getSeq() {
		return seq;
	}

	public void setSeq(int seq) {
		this.seq = seq;
	}

	@Transient
	private int seq = 0;
	
	private synchronized String createCode() {
		seq ++;
		SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyyMMddHHmmss");
		String date = simpleDateFormat.format(new Date());
		
		String seqStr = "00000" + seq;
		seqStr = seqStr.substring(seqStr.length() - 5);
		
		return date + seqStr;
	}
	
	
}
