package com.cmc777.shop.controller.admin;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.cmc777.shop.common.BaseException;
import com.cmc777.shop.common.RespInfo;
import com.cmc777.shop.common.RetMsg;
import com.cmc777.shop.entity.Order;
import com.cmc777.shop.entity.vo.OrderFilter;
import com.cmc777.shop.service.OrderService;
import com.cmc777.shop.util.BeanUtil;

@Controller
@RequestMapping("order")
public class OrderController {
	
	@Autowired
	private OrderService orderService;
	
	private static final Logger LOGGER = LoggerFactory.getLogger(OrderController.class);
	
	@RequestMapping(value = "get-orders-page.json", method = RequestMethod.GET)
	@ResponseBody
	public RetMsg getOrderPage(OrderFilter orderFilter, Integer page, Integer count) {
		Order order = orderFilter.getOrder();
		Page<Order> orders = orderService.find(order, page, count);
		
		return new RetMsg(RespInfo.SUCCESS.getRespCode(), RespInfo.SUCCESS.getRespMsg(), orders);
	}
	
	@RequestMapping(value = "add.json", method = RequestMethod.POST)
	@ResponseBody
	public RetMsg add(@RequestBody Order order) {
		String validate = BeanUtil.validateBean(order);
		if (StringUtils.isNotBlank(validate)) {
			return new RetMsg(RespInfo.VALIDATE_ERROR.getRespCode(), validate);
		}
		
		if (!orderService.checkTotalPrice(order)) {
			return new RetMsg(RespInfo.ERR_TOTAL_PRICE.getRespCode(), RespInfo.ERR_TOTAL_PRICE.getRespMsg());
		}

		try {
			orderService.addOrder(order);
			return new RetMsg(RespInfo.SUCCESS.getRespCode(), RespInfo.SUCCESS.getRespMsg());
		} catch (BaseException e1) {
			LOGGER.warn("goods number is not available, order code is " + order.getOrderCode());
			return new RetMsg(RespInfo.ERR_TOTAL_PRICE.getRespCode(), RespInfo.ERR_TOTAL_PRICE.getRespMsg());
		} catch (Exception e) {
			return new RetMsg(RespInfo.COMMON_ERROR.getRespCode(), RespInfo.COMMON_ERROR.getRespMsg());
		} 
		
	}
	
	@RequestMapping(value = "delete.json", method = RequestMethod.POST)
	@ResponseBody
	public RetMsg delete(@RequestBody Order order) {
		if (order == null || order.getId() == null) {
			return new RetMsg(RespInfo.VALIDATE_ERROR.getRespCode(), RespInfo.VALIDATE_ERROR.getRespMsg());
		}
		
		try {
			orderService.deleteOrder(order);
			return new RetMsg(RespInfo.SUCCESS.getRespCode(), RespInfo.SUCCESS.getRespMsg());
		} catch (Exception e) {
			LOGGER.error("delete order error " + order.getOrderCode(), e);
			return new RetMsg(RespInfo.COMMON_ERROR.getRespCode(), RespInfo.COMMON_ERROR.getRespMsg());
		}
	}
	
	@RequestMapping(value = "update.json", method = RequestMethod.POST)
	@ResponseBody
	public RetMsg update(@RequestBody Order order) {
		if (order == null || order.getId() == null) {
			return new RetMsg(RespInfo.VALIDATE_ERROR.getRespCode(), RespInfo.VALIDATE_ERROR.getRespMsg());
		}
		
		try {
			orderService.update(order);
			return new RetMsg(RespInfo.SUCCESS.getRespCode(), RespInfo.SUCCESS.getRespMsg());
		} catch (Exception e) {
			LOGGER.error("update order error " + order.getOrderCode(), e);
			return new RetMsg(RespInfo.COMMON_ERROR.getRespCode(), RespInfo.COMMON_ERROR.getRespMsg());
		}
	}
}
