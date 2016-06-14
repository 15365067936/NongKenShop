package com.cmc777.shop.repository.shop;

import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.cmc777.shop.entity.Goods;

public interface GoodsRepository extends PagingAndSortingRepository<Goods, Integer>, JpaSpecificationExecutor<Goods>{

}
