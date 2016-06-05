package com.cmc777.shop.repository.shop;

import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.cmc777.shop.entity.Merchant;

@Repository
public interface MerchantRepository extends PagingAndSortingRepository<Merchant, Integer>, JpaSpecificationExecutor<Merchant>{
	@SuppressWarnings("unchecked")
	public Merchant save(Merchant merchant);
	
	public Merchant findByLoginName(String loginName);

}
