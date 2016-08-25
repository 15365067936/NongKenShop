package com.cmc777.shop.repository.shop;

import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.cmc777.shop.entity.Goods;

@Repository
public interface GoodsRepository extends PagingAndSortingRepository<Goods, Integer>, JpaSpecificationExecutor<Goods>{

	@Modifying
	@Query(value = "update Goods a set a.isDeleted = true where a.merchant.id = ?1")
	void deleteByMerchantId(Integer merchantId);

}
