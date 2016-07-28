package com.cmc777.shop.repository.shop;

import java.util.List;

import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.cmc777.shop.entity.GoodsCategory;

@Repository
public interface GoodsCategoryRepository extends PagingAndSortingRepository<GoodsCategory, Integer>, JpaSpecificationExecutor<GoodsCategory>{

	List<GoodsCategory> findByNameLike(String name);
	
}
