package com.cmc777.shop.service;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import com.cmc777.shop.entity.Goods;
import com.cmc777.shop.repository.shop.GoodsRepository;

@Service
public class GoodsServiceImpl implements GoodsService{
	
	@Autowired
	private GoodsRepository goodsRepository;
	
	@Override
	public Page<Goods> find(Goods goods, int page, int count) {
		Pageable pageable = new PageRequest(page - 1, count);
		Specification<Goods> spec = getWhere(goods);
		
		return goodsRepository.findAll(spec, pageable);
	}
	
	private Specification<Goods> getWhere(final Goods search) {
		Specification<Goods> specification = new Specification<Goods>() {
			
			@Override
			public Predicate toPredicate(Root<Goods> root, CriteriaQuery<?> cq, CriteriaBuilder cb) {
				List<Predicate> predicates = new ArrayList<Predicate>();
				if (search.getId() != null) {
					Predicate idPredicate = cb.equal(root.get("id").as(Integer.class), search.getId());
					predicates.add(idPredicate);
				}
				
				Predicate[] pre = new Predicate[predicates.size()];
	            return cq.where(predicates.toArray(pre)).getRestriction();
			}
		};
		
		return specification;
	}

	@Override
	public void save(Goods goods) {
		goodsRepository.save(goods);
	}

	@Override
	public void delete(Goods goods) {
		goodsRepository.delete(goods);
	}

}
