package com.cmc777.shop.controller.admin;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.cmc777.shop.common.RespInfo;
import com.cmc777.shop.common.RetMsg;
import com.cmc777.shop.entity.Order;
import com.cmc777.shop.entity.OrderDetail;
import com.cmc777.shop.service.OrderDetailService;

@Controller
@RequestMapping("order-detail")
public class OrderDetailController {
	@Autowired
	private OrderDetailService orderDetailService;
	
	@RequestMapping("get.json")
	@ResponseBody
	public RetMsg getDetailList(Long orderId) {
		Order order = new Order();
		order.setId(orderId);
		List<OrderDetail> details = orderDetailService.findByOrder(order);
		return new RetMsg(RespInfo.SUCCESS.getRespCode(), RespInfo.SUCCESS.getRespMsg(), details);
	}
}
