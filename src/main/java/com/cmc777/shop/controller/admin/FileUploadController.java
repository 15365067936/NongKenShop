package com.cmc777.shop.controller.admin;

import java.io.File;
import java.io.IOException;
import java.util.UUID;

import org.apache.commons.io.FileUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.cmc777.shop.common.Global;
import com.cmc777.shop.common.RespInfo;
import com.cmc777.shop.common.RetMsg;

@Controller
@RequestMapping("file")
public class FileUploadController {
	
	private static final Logger LOGGER = LoggerFactory.getLogger(FileUploadController.class);
	
	@RequestMapping("upload.json")
	@ResponseBody
	public RetMsg uploadFile(@RequestParam("file") MultipartFile file) {
		if (file.isEmpty()) {
			return new RetMsg(RespInfo.NO_FILE.getRespCode(), RespInfo.NO_FILE.getRespMsg());
		}
		
		File uploadFile = new File(Global.FILE_UPLOAD_DIR);
		if (!uploadFile.exists()) {
			uploadFile.mkdirs();
		}
		
		String filePath = getFilePath(file.getOriginalFilename());
		LOGGER.info("filePath = " + filePath);
		uploadFile = new File(filePath);
		try {
			FileUtils.copyInputStreamToFile(file.getInputStream(), uploadFile);
			return new RetMsg(RespInfo.SUCCESS.getRespCode(), RespInfo.SUCCESS.getRespMsg());
		} catch (IOException e) {
			return new RetMsg(RespInfo.FILE_UPLOAD_FAIL.getRespCode(), RespInfo.FILE_UPLOAD_FAIL.getRespMsg());
		}
		
	}
	
	private String getFilePath(String fileName) {
		String fileSuffix = fileName.substring(fileName.lastIndexOf("."));
		return Global.FILE_UPLOAD_DIR + UUID.randomUUID().toString().replace("-", "") + fileSuffix;
	}
}
