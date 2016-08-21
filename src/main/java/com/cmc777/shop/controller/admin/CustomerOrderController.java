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
import com.cmc777.shop.entity.CustomerOrder;
import com.cmc777.shop.service.CustomerOrderService;
import com.cmc777.shop.util.BeanUtil;
import com.cmc777.shop.util.JsonUtil;

@Controller
@RequestMapping("customer-order")
public class CustomerOrderController {
	@Autowired
	private CustomerOrderService customerOrderService;
	
	private static final Logger LOGGER = LoggerFactory.getLogger(CustomerOrderController.class);
	
	@RequestMapping(value = "add.json", method = RequestMethod.POST)
	@ResponseBody
	public RetMsg add(@RequestBody CustomerOrder customerOrder) {
		LOGGER.info(JsonUtil.objectToJson(customerOrder));
		String validate = BeanUtil.validateBean(customerOrder);
		if (StringUtils.isNotBlank(validate)) {
			return new RetMsg(RespInfo.VALIDATE_ERROR.getRespCode(), validate);
		}
		
		if (!customerOrderService.checkTotalPrice(customerOrder)) {
			return new RetMsg(RespInfo.ERR_TOTAL_PRICE.getRespCode(), RespInfo.ERR_TOTAL_PRICE.getRespMsg());
		}

		try {
			customerOrder = customerOrderService.addCustomerOrder(customerOrder);
			return new RetMsg(RespInfo.SUCCESS.getRespCode(), RespInfo.SUCCESS.getRespMsg(), customerOrder.getOrderCode());
		} catch (BaseException e1) {
			LOGGER.warn("goods number is not available, order code is " + customerOrder.getOrderCode());
			return new RetMsg(RespInfo.ERR_TOTAL_PRICE.getRespCode(), RespInfo.ERR_TOTAL_PRICE.getRespMsg());
		} catch (Exception e) {
			return new RetMsg(RespInfo.COMMON_ERROR.getRespCode(), RespInfo.COMMON_ERROR.getRespMsg());
		} 
		
	}
	
	@RequestMapping(value = "get-my-orders.json", method = RequestMethod.GET)
	@ResponseBody
	public RetMsg getMyCustomerOrders(CustomerOrder customerOrder, Integer page, Integer count) {
		if (customerOrder == null || StringUtils.isBlank(customerOrder.getCustomerId())) {
			return new RetMsg(RespInfo.VALIDATE_ERROR.getRespCode(), RespInfo.VALIDATE_ERROR.getRespMsg());
		}
		
		
		Page<CustomerOrder> orders = customerOrderService.find(customerOrder, page, count);
		
		return new RetMsg(RespInfo.SUCCESS.getRespCode(), RespInfo.SUCCESS.getRespMsg(), orders);
	}
	
	@RequestMapping(value = "receive-order.json", method = RequestMethod.POST)
	@ResponseBody
	public RetMsg receiveOrder(String orderCode) {
		if (StringUtils.isBlank(orderCode)) {
			return new RetMsg(RespInfo.VALIDATE_ERROR.getRespCode(), RespInfo.VALIDATE_ERROR.getRespMsg());
		}
		
		try {
			customerOrderService.receiveOrder(orderCode);
			return new RetMsg(RespInfo.SUCCESS.getRespCode(), RespInfo.SUCCESS.getRespMsg());
		} catch (Exception e) {
			LOGGER.error("receive order error, orderCode = " + orderCode, e);
			return new RetMsg(RespInfo.COMMON_ERROR.getRespCode(), RespInfo.COMMON_ERROR.getRespMsg());
		}
	}
}
