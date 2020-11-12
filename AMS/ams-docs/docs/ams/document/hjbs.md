# 环境部署

## 准备工作

~~~
JDK >= 1.8 (推荐1.8版本)
Mysql >= 5.5.0 (推荐5.7版本)
Maven >= 3.0
~~~


## 运行系统

1、使用svn客户端Checkout下([AMS](http://172.16.101.21:9080/svn/bjxt_qiantai/code/AMS))
2、导入到Eclipse，菜单 File -> Import，然后选择 Maven -> Existing Maven Projects，点击 Next> 按钮，选择工作目录，然后点击 Finish 按钮，即可成功导入  
Eclipse会自动加载Maven依赖包，初次加载会比较慢（根据自身网络情况而定）  
3、创建数据库ams并导入数据脚本(./sql目录下)ams_20201021.sql，quartz.sql  
4、打开运行`com.zzjs.AmsAdminApplication.java`  
5、打开浏览器，输入：http://localhost:80 （默认账户 `admin/admin123`）  
若能正确展示登录页面，并能成功登录，菜单及页面展示正常，则表明环境搭建成功  



## 必要配置

1. 修改数据库连接  
   `编辑resources目录下的application-druid.yml`  
   `url: 服务器地址`  
   `username: 账号`  
   `password: 密码`
   
2. 开发环境配置  
   `编辑resources目录下的application.yml`  
   `port: 端口`  
   `context-path: 部署路径`


## 部署系统
  
1、jar部署方式  
   使用命令行执行：`java –jar ams.jar` 或者执行脚本：`bin/run.bat`  

2、war部署方式  
   pom.xml packaging修改为`war` 放入tomcat服务器webapps

::: tip 提示
SpringBoot去除内嵌tomcat
:::

```xml
<!-- 多模块排除内置tomcat -->
<dependency>
	<groupId>org.springframework.boot</groupId>
	<artifactId>spring-boot-starter-web</artifactId>
	<exclusions>
		<exclusion>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-tomcat</artifactId>
		</exclusion>
	</exclusions>
</dependency>
		
<!-- 单应用排除内置tomcat -->		
<exclusions>
	<exclusion>
		<artifactId>spring-boot-starter-tomcat</artifactId>
		<groupId>org.springframework.boot</groupId>
	</exclusion>
</exclusions>
```


## 常见问题
1. 如果使用`Mac` 需要修改`application.yml`文件路径`profile`
2. 如果使用`Linux` 提示表不存在，设置大小写敏感配置在/etc/my.cnf 添加lower_case_table_names=1，重启MYSQL服务
3. 如果提示当前权限不足，无法写入文件请检查`profile`是否可读可写，或者无法访问此目录
