package com.cmc777.shop.controller.admin;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.cmc777.shop.entity.CustomerOrder;
import com.cmc777.shop.service.CustomerOrderService;
import com.cmc777.shop.util.alipay.AlipayNotify;

@Controller
@RequestMapping("alipay")
public class AlipayPayController {
	@Autowired
	private CustomerOrderService customerOrderService;
	private static final Logger LOGGER = LoggerFactory.getLogger(AlipayPayController.class);

	@RequestMapping("pay.json")
	public String test(String orderCode, HttpServletRequest request, HttpServletResponse response) throws IOException {
		if (StringUtils.isEmpty(orderCode)) {
			LOGGER.warn("orderCode 为空");
			return "redirect:/shop/index.html";
		}
		CustomerOrder customerOrder = customerOrderService.findByOrderCode(orderCode);
		if (customerOrder == null) {
			return "redirect:/shop/index.html";
		}
		
		request.setAttribute("orderCode", orderCode);
		System.out.println(orderCode);
		request.setAttribute("orderName", "农肯商城订单");
		request.setAttribute("price", customerOrder.getTotalPrice().toString());
		request.setAttribute("description", "农肯商城订单");
		return "alipay/alipayapi";
	}
	
	@SuppressWarnings("rawtypes")
	@RequestMapping("notify.json")
	public String notify(HttpServletRequest request) throws UnsupportedEncodingException {
		//获取支付宝POST过来反馈信息
		Map<String,String> params = new HashMap<String, String>();
		Map requestParams = request.getParameterMap();
		for (Iterator iter = requestParams.keySet().iterator(); iter.hasNext();) {
			String name = (String) iter.next();
			String[] values = (String[]) requestParams.get(name);
			String valueStr = "";
			for (int i = 0; i < values.length; i++) {
				valueStr = (i == values.length - 1) ? valueStr + values[i]
						: valueStr + values[i] + ",";
			}
			//乱码解决，这段代码在出现乱码时使用。如果mysign和sign不相等也可以使用这段代码转化
			valueStr = new String(valueStr.getBytes("ISO-8859-1"), "UTF-8");
			
			params.put(name, valueStr);
		}
		
		//获取支付宝的通知返回参数，可参考技术文档中页面跳转同步通知参数列表(以下仅供参考)//
		//商户订单号
		String orderCode = new String(request.getParameter("out_trade_no").getBytes("ISO-8859-1"),"UTF-8");
		//支付宝交易号
		
		String trade_no = new String(request.getParameter("trade_no").getBytes("ISO-8859-1"),"UTF-8");
		//交易状态
		String trade_status = new String(request.getParameter("trade_status").getBytes("ISO-8859-1"),"UTF-8");
		//获取支付宝的通知返回参数，可参考技术文档中页面跳转同步通知参数列表(以上仅供参考)//

		if(AlipayNotify.verify(params)){//验证成功
			//////////////////////////////////////////////////////////////////////////////////////////
			//请在这里加上商户的业务逻辑程序代码

			//——请根据您的业务逻辑来编写程序（以下代码仅作参考）——
			
			if(trade_status.equals("TRADE_FINISHED")){
				//判断该笔订单是否在商户网站中已经做过处理
					//如果没有做过处理，根据订单号（out_trade_no）在商户网站的订单系统中查到该笔订单的详细，并执行商户的业务程序
					//请务必判断请求时的total_fee、seller_id与通知时获取的total_fee、seller_id为一致的
					//如果有做过处理，不执行商户的业务程序
					
				//注意：
				//退款日期超过可退款期限后（如三个月可退款），支付宝系统发送该交易状态通知
			} else if (trade_status.equals("TRADE_SUCCESS")){
				//判断该笔订单是否在商户网站中已经做过处理
					//如果没有做过处理，根据订单号（out_trade_no）在商户网站的订单系统中查到该笔订单的详细，并执行商户的业务程序
					//请务必判断请求时的total_fee、seller_id与通知时获取的total_fee、seller_id为一致的
					//如果有做过处理，不执行商户的业务程序
					
				//注意：
				//付款完成后，支付宝系统发送该交易状态通知
				
				customerOrderService.updateCustomerOrderHasPay(orderCode, trade_no);
			}

			//——请根据您的业务逻辑来编写程序（以上代码仅作参考）——
				
//			out.print("success");	//请不要修改或删除
			return "redirect:/shop/index.html";

			//////////////////////////////////////////////////////////////////////////////////////////
		}else{//验证失败
//			out.print("fail");
			return "redirect:/shop/error.html";
		}
	}
}
