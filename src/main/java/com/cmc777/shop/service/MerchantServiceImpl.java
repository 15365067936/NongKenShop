package com.cmc777.shop.service;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cmc777.shop.entity.Merchant;
import com.cmc777.shop.repository.shop.MerchantRepository;
import com.cmc777.shop.util.PageUtil;

@Service
public class MerchantServiceImpl implements MerchantService{
	
	@Autowired
	private MerchantRepository merchantRepository;
	
	

	@Override
	@Transactional(readOnly = false)
	public Merchant save(Merchant merchant) {
		
		return merchantRepository.save(merchant);
	}

	@Override
	public Merchant findByLoginName(String loginName) {
		
		return null;
	}

	@Override
	public Page<Merchant> find(Merchant search, int pageNo, int size) {
		
		Pageable pageable = PageUtil.getPageable(pageNo, size);
		Specification<Merchant> spec = getWhere(search);
		
		return merchantRepository.findAll(spec, pageable);
	}
	
	@Transactional(readOnly = false)
	@Override
	public void delete(Integer id) {
		merchantRepository.delete(id);
	}
	
	
	private Specification<Merchant> getWhere(final Merchant search) {
		Specification<Merchant> specification = new Specification<Merchant>() {
			
			@Override
			public Predicate toPredicate(Root<Merchant> root, CriteriaQuery<?> cq, CriteriaBuilder cb) {
				List<Predicate> predicates = new ArrayList<Predicate>();
				Predicate idPredicate = cb.equal(root.get("id").as(Integer.class), search.getId());
				predicates.add(idPredicate);
				Predicate[] pre = new Predicate[predicates.size()];
	            return cq.where(predicates.toArray(pre)).getRestriction();
				
			}
		};
		
		return specification;
	}
}
