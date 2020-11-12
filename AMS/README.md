> 请使用指定的IDE开发
>
> 前端开发使用VSCode开发，[地址](http://172.16.101.21:9080/svn/bjxt_qiantai/08 其他/IDE软件包/vsCode/VSCodeUserSetup-x64-1.30.2.exe)，双击安装即可
>
> 后台开发使用spring-tool-suite开发，[地址](http://172.16.101.21:9080/svn/bjxt_qiantai/08 其他/IDE软件包/sts/spring-tool-suite-4-4.7.2.RELEASE-e4.16.0-win32.win32.x86_64.self-extracting.jar)，双击安装即可


> 所有开发人员请阅读以下文件再开发
>
> 1. `当前目录(.)/doc/AMS环境使用手册.docx`
> 2. `当前目录(.)/doc//ams文档.md`
> 3. 或者启动系统并登陆成功后，点击![image0001](image0001.png)如图所示的按钮在线查看开发者使用手册
> 4. 或者启动`./ams-docs`文档建站项目，`npm run dev`访问`浏览器访问 http://localhost:3000`在线查看开发者使用手册

> SVN提交注意事项
> 1. 前端开发不需将`node_modules`目录提交
> 2. 后台开发不需将`.settings`、`.project`、`.classpath`、`target`目录及文件提交

> 目录解释 以下目录一般情况不要修改
>
> 1. ./sql=>存放系统支撑的sql文件
> 2. ./bin=>存放一些打包相关的可执行文件
> 3. ./doc=>存放一些系统使用说明文档

> 编译程序并生成jar包
>
> - 打开eclipse，右键项目选择Run As -> Maven Install编译安装程序
> - 项目名/target 编译程序并生成jar包
>   - 打开eclipse，右键项目选择Run As -> Maven Install编译安装程序
>   - 项目名/target 复制lams-admin.jar
> - 执行外部配置文件命令运行程序
>   - 命令为'$ java –jar ams-admin.jar -Dspring.config.location=C:\config\ams\admin\ '