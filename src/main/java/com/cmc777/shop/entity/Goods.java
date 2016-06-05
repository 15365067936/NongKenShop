package com.cmc777.shop.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import com.google.common.collect.Lists;

/**
 * 商品属性
 * @author 张军
 */
@Entity
@Table(name = "cms_goods")
@DynamicInsert
@DynamicUpdate
public class Goods {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	//商品名称
	@Column(length = 100, nullable = false)
	@NotNull(message = "商品名称不能为空")
	private String name;
	
	@ManyToOne
	@JoinColumn(name = "merchant_id")
	private Merchant merchant;
	
	//产地
	@Column(length = 200)
	private String origin;
	
	@ManyToOne
	private GoodsCategory category;
	
	@Column(length = 1000)
	private String imageUrls;
	
	@Column(length = 5)
	private String goodsCode;
	
	@OneToMany(cascade = {CascadeType.REMOVE}, mappedBy = "goods", fetch= FetchType.LAZY)
	private List<GoodsDetail> goodsDetail = Lists.newArrayList();

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

	public Merchant getMerchant() {
		return merchant;
	}

	public void setMerchant(Merchant merchant) {
		this.merchant = merchant;
	}

	public String getOrigin() {
		return origin;
	}

	public void setOrigin(String origin) {
		this.origin = origin;
	}

	public String getImageUrls() {
		return imageUrls;
	}

	public void setImageUrls(String imageUrls) {
		this.imageUrls = imageUrls;
	}

	public String getGoodsCode() {
		return goodsCode;
	}

	public void setGoodsCode(String goodsCode) {
		this.goodsCode = goodsCode;
	}

	public GoodsCategory getCategory() {
		return category;
	}

	public void setCategory(GoodsCategory category) {
		this.category = category;
	}

	public List<GoodsDetail> getGoodsDetail() {
		return goodsDetail;
	}

	public void setGoodsDetail(List<GoodsDetail> goodsDetail) {
		this.goodsDetail = goodsDetail;
	}
	
	
	
}
