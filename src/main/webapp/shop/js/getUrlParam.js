(function($){  

    $.getUrlParam = function(name)  

    {  

        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");  

        var r = window.location.search.substr(1).match(reg);  

        if (r!=null) return unescape(r[2]); return null;  

    }  
    
    $.getLocalTime = function(nS) {     
    	var d = new Date(nS);    //根据时间戳生成的时间对象
    	var month = "00" + (d.getMonth() + 1);
    	month = month.substring(month.length - 2);
    	var date = "00" + (d.getDate());
    	date = date.substring(date.length - 2);
    	var hours = "00" + (d.getHours());
    	hours = hours.substring(hours.length - 2);
    	var min = "00" + (d.getMinutes());
    	min = min.substring(min.length - 2);
    	var second = "00" + (d.getSeconds());
    	second = second.substring(second.length - 2);
    	var date = (d.getFullYear()) + "-" + 
    				month + "-" +
    				date + " " + 
    				hours + ":" + 
    				min + ":" + 
    				second;
    	return date;
    }     

})(jQuery);