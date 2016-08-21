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
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.validation.constraints.NotNull;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import com.cmc777.shop.common.OrderStatus;

@Entity
@Table(name = "cmc_customer_order")
@DynamicInsert
@DynamicUpdate
public class CustomerOrder {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column(length = 60)
	@NotNull(message = "订单编号不能为空")
	private String orderCode = createCode();
	@Column(length = 40)
	@NotNull(message = "客户Id不能为空")
	private String customerId;
	@OneToMany(mappedBy = "customerOrder")
	private List<CustomerOrderDetail> customerOrderDetails = new ArrayList<CustomerOrderDetail>();
	@Column(length = 30)
	private String status = OrderStatus.NOT_PAY.name();
	@Column(length = 500)
	@NotNull(message = "发货地址不能为空")
	private String address;
	@Column(length = 20)
	@NotNull(message = "电话号码不能为空")
	private String phone;
	private Boolean isDeleted = false;
	@NotNull(message = "订单总价不能为空")
	private Double totalPrice;
	private String alipayTradeCode;
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

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}
	
	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
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

	public List<CustomerOrderDetail> getCustomerOrderDetails() {
		return customerOrderDetails;
	}

	public void setCustomerOrderDetails(List<CustomerOrderDetail> customerOrderDetails) {
		this.customerOrderDetails = customerOrderDetails;
	}

	public String getAlipayTradeCode() {
		return alipayTradeCode;
	}

	public void setAlipayTradeCode(String alipayTradeCode) {
		this.alipayTradeCode = alipayTradeCode;
	}


	@Transient
	private static int seq = 0;
	
	private synchronized String createCode() {
		seq ++;
		if (seq > 99999) {
			seq = 1;
		}
		
		SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyyMMddHHmmss");
		String date = simpleDateFormat.format(new Date());
		
		String seqStr = "00000" + seq;
		seqStr = seqStr.substring(seqStr.length() - 5);
		
		return date + seqStr;
	}
	
	public Order generateOrder(Merchant merchant) {
		Order order = new Order();
		order.setMerchant(merchant);
		order.setAddress(this.address);
		order.setCustomerId(this.customerId);
		order.setOrderCode(this.orderCode);
		order.setStatus(this.status);
		order.setTotalPrice(this.totalPrice);
		order.setPhone(this.phone);
		return order;
	}
}
