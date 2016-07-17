package com.cmc777.shop.repository.shop;

import java.util.List;

import org.hibernate.annotations.Where;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.cmc777.shop.entity.Goods;
import com.cmc777.shop.entity.GoodsDetail;

@Repository
public interface GoodsDetailRepository extends PagingAndSortingRepository<GoodsDetail, Integer>, JpaSpecificationExecutor<GoodsDetail>{

	List<GoodsDetail> findByGoodsAndIsDeleted(Goods goods, Boolean isDeleted);

	@Where(clause = "isDeleted = false")
	GoodsDetail findByIdAndIsDeleted(Integer id, Boolean isDeleted);
}
