package com.cmc777.shop.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

/**
 * 商品类别
 * @author 张军
 */
@Entity
@Table(name = "cmc_goods_category")
@DynamicUpdate
@DynamicInsert
public class GoodsCategory {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	@Column(length = 60)
	@NotNull(message = "商品类别不能为空")
	private String name;
	
	@OneToMany(cascade = CascadeType.REMOVE, mappedBy = "goodsCategory", fetch = FetchType.EAGER)
	private List<GoodsCategoryType> goodsCategoryTypes;
	
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
	public List<GoodsCategoryType> getGoodsCategoryTypes() {
		return goodsCategoryTypes;
	}
	public void setGoodsCategoryTypes(List<GoodsCategoryType> goodsCategoryTypes) {
		this.goodsCategoryTypes = goodsCategoryTypes;
	}
	
	
}
