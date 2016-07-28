package com.cmc777.shop.repository.shop;

import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.cmc777.shop.entity.GoodsCategoryType;

@Repository
public interface GoodsCategoryTypeRepository extends PagingAndSortingRepository<GoodsCategoryType, Integer>, JpaSpecificationExecutor<GoodsCategoryType>{

}
