package com.zzjs;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

/**
 * 	启动程序
 * 
 * @author yangyc
 */
@SpringBootApplication(exclude = { DataSourceAutoConfiguration.class })
public class AmsNetApiApplication
{
    public static void main(String[] args)
    {
        // System.setProperty("spring.devtools.restart.enabled", "false");
        SpringApplication.run(AmsNetApiApplication.class, args);
        System.out.println("(♥◠‿◠)ﾉﾞ  接口服务平台网站接口服务启动成功，AI智能监控action   ლ(´ڡ`ლ)ﾞ ");
    }
}
