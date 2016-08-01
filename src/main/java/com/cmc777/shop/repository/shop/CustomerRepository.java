package com.cmc777.shop.repository.shop;

import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.cmc777.shop.entity.Customer;

@Repository
public interface CustomerRepository extends PagingAndSortingRepository<Customer, Integer>, JpaSpecificationExecutor<Customer>{

}
