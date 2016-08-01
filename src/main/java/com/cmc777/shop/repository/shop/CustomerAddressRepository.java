package com.cmc777.shop.repository.shop;

import java.util.List;

import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.cmc777.shop.entity.CustomerAddress;

@Repository
public interface CustomerAddressRepository extends PagingAndSortingRepository<CustomerAddress, Integer>, JpaSpecificationExecutor<CustomerAddress>{

	List<CustomerAddress> findByCustomerRelationId(Integer relationId);

}
