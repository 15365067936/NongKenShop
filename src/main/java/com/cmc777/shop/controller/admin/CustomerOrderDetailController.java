package com.cmc777.shop.controller.admin;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.cmc777.shop.common.RespInfo;
import com.cmc777.shop.common.RetMsg;
import com.cmc777.shop.entity.CustomerOrder;
import com.cmc777.shop.entity.CustomerOrderDetail;
import com.cmc777.shop.service.CustomerOrderDetailService;

@Controller
@RequestMapping("customer-order-detail")
public class CustomerOrderDetailController {

	@Autowired
	private CustomerOrderDetailService customerOrderDetailService;
	
	@RequestMapping(value = "get.json")
	@ResponseBody
	public RetMsg getDetails(Long orderId) {
		CustomerOrder customerOrder = new CustomerOrder();
		customerOrder.setId(orderId);
		List<CustomerOrderDetail> details = customerOrderDetailService.findByCustomerOrder(customerOrder);
		
		return new RetMsg(RespInfo.SUCCESS.getRespCode(), RespInfo.SUCCESS.getRespMsg(), details);
	}
}
