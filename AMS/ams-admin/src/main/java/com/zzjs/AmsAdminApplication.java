package com.zzjs;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

/**
 * 	启动程序
 * 
 * @author yangyc
 */
@SpringBootApplication(exclude = { DataSourceAutoConfiguration.class })
public class AmsAdminApplication
{
    public static void main(String[] args)
    {
    	// System.setProperty("spring.devtools.restart.enabled", "false");
        SpringApplication.run(AmsAdminApplication.class, args);
        System.out.println("(♥◠‿◠)ﾉﾞ  AMS后台管理系统服务启动成功，AI智能监控action   ლ(´ڡ`ლ)ﾞ ");
        
    }
}
