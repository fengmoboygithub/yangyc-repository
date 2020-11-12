/*
Navicat MySQL Data Transfer

Source Server         : 145--测试
Source Server Version : 50722
Source Host           : 172.16.101.145:3306
Source Database       : ams

Target Server Type    : MYSQL
Target Server Version : 50722
File Encoding         : 65001

Date: 2020-11-05 11:24:00
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `ifsp_test`
-- ----------------------------
DROP TABLE IF EXISTS `ifsp_test`;
CREATE TABLE `ifsp_test` (
  `id` int(20) NOT NULL AUTO_INCREMENT COMMENT '示例数字类型',
  `name` varchar(50) DEFAULT NULL COMMENT '示例字符类型',
  `timels` datetime DEFAULT NULL COMMENT '示例时间类型',
  `enumls` enum('TEST','END','START') DEFAULT 'TEST' COMMENT '示例枚举类型',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='测试代码生成';

-- ----------------------------
-- Records of ifsp_test
-- ----------------------------
