package com.cmc777.shop.service;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cmc777.shop.entity.Goods;
import com.cmc777.shop.entity.GoodsDetail;
import com.cmc777.shop.repository.shop.GoodsCategoryRepository;
import com.cmc777.shop.repository.shop.GoodsCategoryTypeRepository;
import com.cmc777.shop.repository.shop.GoodsRepository;

@Service
public class GoodsServiceImpl implements GoodsService{
	
	@Autowired
	private GoodsRepository goodsRepository;
	@Autowired
	private GoodsCategoryRepository goodsCategoryRepository;
	@Autowired
	private GoodsCategoryTypeRepository goodsCategoryTypeRepository;
	
	@Override
	public Page<Goods> find(Goods goods, int page, int count) {
		Pageable pageable = new PageRequest(page - 1, count);
		Specification<Goods> spec = getWhere(goods);
		Page<Goods> goodsPage = goodsRepository.findAll(spec, pageable);
		for (Goods goods2 : goodsPage.getContent()) {
			goods2.setCategory(goodsCategoryRepository.findOne(goods2.getCategoryId()));
			goods2.setCategoryType(goodsCategoryTypeRepository.findOne(goods2.getCategoryTypeId()));
		}
		
		return goodsPage;
	}
	
	private Specification<Goods> getWhere(final Goods search) {
		Specification<Goods> specification = new Specification<Goods>() {
			
			@Override
			public Predicate toPredicate(Root<Goods> root, CriteriaQuery<?> cq, CriteriaBuilder cb) {
				List<Predicate> predicates = new ArrayList<Predicate>();
				if (search != null && StringUtils.isNotBlank(search.getName())) {
					Predicate namePredicate = cb.like(root.get("name").as(String.class), "%" + search.getName() + "%");
					predicates.add(namePredicate);
				}
				
				if (search != null && search.getCategoryId() != null) {
					Predicate categoryPredicate = cb.equal(root.get("categoryId").as(Integer.class), search.getCategoryId());
					predicates.add(categoryPredicate);
				}
				
				if (search != null && search.getCategoryTypeId() != null) {
					Predicate categoryTypePredicate = cb.equal(root.get("categoryTypeId").as(Integer.class), search.getCategoryTypeId());
					predicates.add(categoryTypePredicate);
				}
				
				if (search != null && search.getMerchant() != null && StringUtils.isNotBlank(search.getMerchant().getLoginName())) {
					Predicate merchantPredicate = cb.equal(root.join("merchant").get("loginName").as(String.class), search.getMerchant().getLoginName());
					predicates.add(merchantPredicate);
				}
				
				Predicate deletedPredicate = cb.equal(root.get("isDeleted").as(Boolean.class), false);
				predicates.add(deletedPredicate);
				
				Predicate[] pre = new Predicate[predicates.size()];
	            return cq.where(predicates.toArray(pre)).getRestriction();
			}
		};
		
		return specification;
	}

	@Override
	@Transactional(readOnly = false)
	public void add(Goods goods) {
		goods.setGoodsCode(Goods.createGoodsCode());
		goodsRepository.save(goods);
	}

	@Override
	@Transactional(readOnly = false)
	public void delete(Goods goods) {
		Goods goodsIndb = goodsRepository.findOne(goods.getId());
		goodsIndb.setIsDeleted(true);
		goodsRepository.save(goodsIndb);
	}

	@Override
	@Transactional(readOnly = false)
	public void update(Goods goods) {
		
		goodsRepository.save(goods);
	}

	@Override
	public Page<Goods> findFrontGoods(Goods goods, Integer page, Integer count) {
		Pageable pageable = new PageRequest(page - 1, count);
		Specification<Goods> spec = getWhere(goods);
		Page<Goods> goodsPage = goodsRepository.findAll(spec, pageable);
		for (Goods goods2 : goodsPage.getContent()) {
			goods2.setMerchant(null);
			goods2.setCategory(goodsCategoryRepository.findOne(goods2.getCategoryId()));
			goods2.setCategoryType(goodsCategoryTypeRepository.findOne(goods2.getCategoryTypeId()));
			for (GoodsDetail detail : goods2.getGoodsDetail()) {
				detail.setGoods(null);
			}
		}
		
		return goodsPage;
	}
}
