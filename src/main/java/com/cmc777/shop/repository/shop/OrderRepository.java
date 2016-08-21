package com.cmc777.shop.repository.shop;

import java.util.List;

import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.cmc777.shop.entity.Order;

@Repository
public interface OrderRepository extends PagingAndSortingRepository<Order, Long>, JpaSpecificationExecutor<Order>{

	@Modifying
	@Query(value = "update cmc_order set status = ?1, alipay_trade_code = ?3 where order_code = ?2", nativeQuery = true)
	void updateOrderHasPay(String status, String orderCode, String alipayTradeCode);

	@Modifying
	@Query(value = "update cmc_order set status = ?2  where order_code = ?1", nativeQuery = true)
	void updateStatus(String orderCode, String status);

	List<Order> findByOrderCode(String orderCode);
	
}
