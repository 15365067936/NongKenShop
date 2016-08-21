package com.cmc777.shop.repository.shop;

import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.cmc777.shop.entity.CustomerOrder;

@Repository
public interface CustomerOrderRepository extends PagingAndSortingRepository<CustomerOrder, Long>, JpaSpecificationExecutor<CustomerOrder>{

	CustomerOrder findByOrderCode(String orderCode);

	@Modifying
	@Query(value = "update cmc_customer_order set status = ?1, alipay_trade_code = ?3 where order_code = ?2", nativeQuery = true)
	void updateCustomerOrderHasPay(String status, String orderCode, String alipayTradeCode);

	@Modifying
	@Query(value = "update cmc_customer_order set status = ?2 where order_code = ?1", nativeQuery = true)
	void updateStatus(String orderCode, String status);

}
