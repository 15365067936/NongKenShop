package com.cmc777.shop.service;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cmc777.shop.common.BaseException;
import com.cmc777.shop.common.RespInfo;
import com.cmc777.shop.entity.Merchant;
import com.cmc777.shop.repository.shop.MerchantRepository;
import com.cmc777.shop.util.JsonUtil;

@Service
public class MerchantServiceImpl implements MerchantService{
	
	private static final Logger LOGGER = LoggerFactory.getLogger(MerchantServiceImpl.class);
	
	@Autowired
	private MerchantRepository merchantRepository;
	
	

	@Override
	@Transactional(readOnly = false)
	public Merchant add(Merchant merchant) throws BaseException{
		List<Merchant> merchants = merchantRepository.findByLoginName(merchant.getLoginName());
		if (merchants != null && merchants.size() > 0) {
			throw new BaseException(RespInfo.HAS_ACCOUNT.getRespCode(), RespInfo.HAS_ACCOUNT.getRespMsg());
		}
		
		return merchantRepository.save(merchant);
	}

	@Override
	public Page<Merchant> find(Merchant search, int page, int count) {
		
		Pageable pageable = new PageRequest(page - 1, count);
		Specification<Merchant> spec = getWhere(search);
		Page<Merchant> merchants = merchantRepository.findAll(spec, pageable);
		LOGGER.info(JsonUtil.objectToJson(merchants));
		return merchants;
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
				if (search != null && search.getId() != null) {
					Predicate idPredicate = cb.equal(root.get("id").as(Integer.class), search.getId());
					predicates.add(idPredicate);
				}
				
				if (search != null && StringUtils.isNotEmpty(search.getLoginName())) {
					Predicate idPredicate = cb.like(root.get("loginName").as(String.class), "%" + search.getLoginName() + "%");
					predicates.add(idPredicate);
				}
				
				if (search != null && StringUtils.isNotEmpty(search.getPhone())) {
					Predicate idPredicate = cb.like(root.get("phone").as(String.class), "%" + search.getPhone() + "%");
					predicates.add(idPredicate);
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
	public Merchant update(Merchant merchant) throws BaseException {
		return merchantRepository.save(merchant);
	}

	@Override
	public Merchant findOne(Merchant merchant) {
		return merchantRepository.findOne(merchant.getId());
	}

	@Override
	public List<Merchant> findByLoginName(String loginName) {
		return merchantRepository.findByLoginName(loginName);
	}
}
