package com.cmc777.shop.repository.shop;

import java.util.List;

import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.cmc777.shop.entity.Order;
import com.cmc777.shop.entity.OrderDetail;

@Repository
public interface OrderDetailRepository extends PagingAndSortingRepository<OrderDetail, Long>, JpaSpecificationExecutor<OrderDetail>{

	List<OrderDetail> findByOrder(Order order);

}
