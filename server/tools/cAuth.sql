/*
 Navicat Premium Data Transfer

 Source Server         : Localhost
 Source Server Type    : MySQL
 Source Server Version : 50717
 Source Host           : localhost
 Source Database       : wesharedb

 Target Server Type    : MySQL
 Target Server Version : 50717
 File Encoding         : utf-8

 Date: 08/10/2017 22:22:52 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

CREATE DATABASE IF NOT EXISTS wesharedb CHARACTER SET UTF8;

-- ----------------------------
--  Table structure for cSessionInfo`
-- ----------------------------
CREATE TABLE IF NOT EXISTS wesharedb.cSessionInfo (
  `open_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `uuid` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `skey` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_visit_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `session_key` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_info` varchar(2048) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`open_id`),
  KEY `openid` (`open_id`) USING BTREE,
  KEY `skey` (`skey`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='会话管理用户信息';

SET FOREIGN_KEY_CHECKS = 1;

CREATE TABLE IF NOT EXISTS wesharedb.role (
  id int(11) NOT NULL AUTO_INCREMENT,
  role_name varchar(20) NOT NULL,
  add_time datetime NOT NULL,
  deleted bit DEFAULT 0,
  PRIMARY KEY (id)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

INSERT INTO wesharedb.role set role_name='学生', add_time = now() on duplicate key update role_name='学生';
INSERT INTO wesharedb.role set role_name='学校代理', add_time = now() on duplicate key update role_name='学校代理';

CREATE TABLE IF NOT EXISTS wesharedb.agent_area (
  id int(11) NOT NULL AUTO_INCREMENT,
  area_name varchar(20) NOT NULL,
  add_time datetime NOT NULL,
  deleted bit DEFAULT 0,
  PRIMARY KEY (id)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

CREATE TABLE  IF NOT EXISTS wesharedb.user (
  id int(11) NOT NULL AUTO_INCREMENT,
  open_id varchar(100) NULL,
  role_id int(11) NOT NULL,
  agent_area_id int(11) NOT NULL,
  user_name varchar(50) NOT NULL,
  password varchar(50) NOT NULL,
  password_salt varchar(50) NOT NULL,
  nick_name varchar(50) NULL,
  real_name varchar(50) NULL,
  tel varchar(50) NULL,
  email varchar(50) NULL,
  email_true bit DEFAULT 0,
  phone VARCHAR(20) NOT NULL,
  phone_true bit DEFAULT 0,
  pic_url varchar(200) NULL,
  head_img_url varchar(200) NULL,
  sex tinyint UNSIGNED ZEROFILL DEFAULT 0,
  country varchar(20) NULL,
  province varchar(20) NULL,
  city varchar(20) NULL,
  district varchar(20) NULL,
  address varchar(250) NULL,
  note text NULL,
  type int NULL,
  this_login_time datetime NOT NULL,
  this_login_ip varchar(50) NULL,
  last_login_time datetime NOT NULL,
  last_login_ip varchar(50) NULL,
  last_weixin_sigin_time datetime NULL,
  wallet decimal(18,2) NULL,
  add_time datetime NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (role_id) REFERENCES wesharedb.role(id),
  FOREIGN KEY (agent_area_id) REFERENCES wesharedb.agent_area(id)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

CREATE TABLE  IF NOT EXISTS wesharedb.goods_type (
  id int(11) NOT NULL AUTO_INCREMENT,
  type varchar(20) NOT NULL,
  add_time datetime NOT NULL,
  deleted bit DEFAULT 0,
  PRIMARY KEY (id)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

INSERT INTO wesharedb.goods_type set type='服装', add_time = now() on duplicate key update type='服装'; 

CREATE TABLE IF NOT EXISTS wesharedb.goods_label (
  id int(11) NOT NULL AUTO_INCREMENT,
  goods_type_id int(11) NOT NULL,
  label varchar(20) NOT NULL COLLATE utf8mb4_unicode_ci,
  add_time datetime NOT NULL,
  deleted bit DEFAULT 0,
  PRIMARY KEY (id),
  FOREIGN KEY (goods_type_id) REFERENCES wesharedb.goods_type(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO wesharedb.goods_label set goods_type_id=1, label='正装', add_time = now()  on duplicate key update label='正装'; 
INSERT INTO wesharedb.goods_label set goods_type_id=1, label='演出服', add_time = now()  on duplicate key update label='演出服'; 
INSERT INTO wesharedb.goods_label set goods_type_id=1, label='毕业服', add_time = now()  on duplicate key update label='毕业服'; 
INSERT INTO wesharedb.goods_label set goods_type_id=1, label='节日服', add_time = now()  on duplicate key update label='节日服'; 
INSERT INTO wesharedb.goods_label set goods_type_id=1, label='礼服', add_time = now()  on duplicate key update label='礼服'; 
INSERT INTO wesharedb.goods_label set goods_type_id=1, label='Cosplay', add_time = now()  on duplicate key update label='Cosplay'; 
INSERT INTO wesharedb.goods_label set goods_type_id=1, label='古装', add_time = now()  on duplicate key update label='古装';
INSERT INTO wesharedb.goods_label set goods_type_id=1, label='民族', add_time = now()  on duplicate key update label='民族'; 

CREATE TABLE IF NOT EXISTS wesharedb.goods_attributes (
  id int(11) NOT NULL AUTO_INCREMENT,
  goods_type_id int(11) NOT NULL,
  attribute varchar(20) NOT NULL,
  add_time datetime NOT NULL,
  deleted bit DEFAULT 0,
  PRIMARY KEY (id),
  FOREIGN KEY (goods_type_id) REFERENCES wesharedb.goods_type(id)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

INSERT INTO wesharedb.goods_attributes set goods_type_id=1, attribute='尺码', add_time = now()  on duplicate key update attribute='尺码'; 
INSERT INTO wesharedb.goods_attributes set goods_type_id=1, attribute='颜色', add_time = now()  on duplicate key update attribute='颜色'; 
INSERT INTO wesharedb.goods_attributes set goods_type_id=1, attribute='面料', add_time = now()  on duplicate key update attribute='面料'; 

CREATE TABLE IF NOT EXISTS wesharedb.goods (
  id int(11) NOT NULL AUTO_INCREMENT,
  goods_type_id int(11) NOT NULL,
  goods_title varchar(50) NOT NULL,
  goods_descripe varchar(200) NOT NULL,
  goods_materiel varchar(20) NOT NULL,
  goods_address varchar(100) NULL,
  add_time datetime NOT NULL,
  deleted bit DEFAULT 0,
  PRIMARY KEY (id),
  FOREIGN KEY (goods_type_id) REFERENCES wesharedb.goods_type(id)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS wesharedb.goods_label_mapping (
  goods_id int(11) NOT NULL,
  goods_label_id int(11) NOT NULL,
  add_time datetime NOT NULL,
  deleted bit DEFAULT 0,
  PRIMARY KEY (goods_id, goods_label_id),
  FOREIGN KEY (goods_id) REFERENCES wesharedb.goods(id),
  FOREIGN KEY (goods_label_id) REFERENCES wesharedb.goods_label(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS wesharedb.goods_attribute_values (
  id int(11) NOT NULL AUTO_INCREMENT,
  goods_id int(11) NOT NULL,
  goods_attribute_id int(11) NOT NULL,
  value varchar(50) NOT NULL,
  add_time datetime NOT NULL,
  deleted bit DEFAULT 0,
  PRIMARY KEY (id),
  FOREIGN KEY (goods_id) REFERENCES wesharedb.goods(id),
  FOREIGN KEY (goods_attribute_id) REFERENCES wesharedb.goods_attributes(id)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS wesharedb.goods_description (
  id int(11) NOT NULL AUTO_INCREMENT,
  goods_id int(11) NOT NULL,
  description varchar(500) NULL, 
  image_url varchar(200) NULL,
  image_description varchar(300) NULL, 
  add_time datetime NULL,
  deleted bit DEFAULT 0,
  PRIMARY KEY (id),
  FOREIGN KEY (goods_id) REFERENCES wesharedb.goods(id)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS wesharedb.goods_collection (
  user_id int(11) NOT NULL,
  goods_id int(11) NOT NULL,
  collection_time datetime NULL,
  cancel bit DEFAULT 0,
  PRIMARY KEY (user_id, goods_id),
  FOREIGN KEY (user_id) REFERENCES wesharedb.user(id),
  FOREIGN KEY (goods_id) REFERENCES wesharedb.goods(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS wesharedb.goods_sku (
  id int(11) NOT NULL AUTO_INCREMENT,
  goods_id int(11) NOT NULL,
  unit_price DECIMAL(5,2) NOT NULL,
  collection_time datetime DEFAULT now(),
  cancel bit DEFAULT 0,
  PRIMARY KEY (id),
  FOREIGN KEY (goods_id) REFERENCES wesharedb.goods(id)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS wesharedb.attributes_sku_mapping (
  sku_id int(11) NOT NULL,
  attribute_id int(11) NOT NULL,
  add_time datetime NULL,
  deleted bit DEFAULT 0,
  PRIMARY KEY (sku_id, attribute_id),
  FOREIGN KEY (sku_id) REFERENCES wesharedb.goods_sku(id),
  FOREIGN KEY (attribute_id) REFERENCES wesharedb.goods_attributes(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS wesharedb.shopping_cart (
  id int(11) NOT NULL AUTO_INCREMENT,
  user_id int(11) NOT NULL,
  goods_id int(11) NOT NULL,
  sku_id int(11) NOT NULL,
  purchase_quantity int(5) NOT NULL,
  add_time datetime NULL,
  status varchar(10) NOT NULL,
  remove bit DEFAULT 0,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES wesharedb.user(id),
  FOREIGN KEY (goods_id) REFERENCES wesharedb.goods(id),
  FOREIGN KEY (sku_id) REFERENCES wesharedb.goods_sku(id)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS wesharedb.user_comments (
  id int(11) NOT NULL AUTO_INCREMENT,
  user_id int(11) NOT NULL,
  goods_id int(11) NOT NULL,
  score int(5) NULL,
  comment varchar(200) NULL,
  add_time datetime NULL,
  deleted bit DEFAULT 0,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES wesharedb.user(id),
  FOREIGN KEY (goods_id) REFERENCES wesharedb.goods(id)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS wesharedb.user_comments_images (
  id int(11) NOT NULL AUTO_INCREMENT,
  comment_id int(11) NOT NULL,
  image_url varchar(200) NULL,
  add_time datetime NULL,
  deleted bit DEFAULT 0,
  PRIMARY KEY (id),
  FOREIGN KEY (comment_id) REFERENCES wesharedb.user_comments(id)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS wesharedb.user_address (
  id int(11) NOT NULL AUTO_INCREMENT,
  user_id int(11) NOT NULL,
  country varchar(10) NULL,
  province varchar(10) NULL,
  city varchar(10) NULL,
  county varchar(10) NULL,
  township varchar(20) NULL,
  street varchar(20) NULL,
  zip_code varchar(6) NULL,
  detail_address varchar(50) NULL,
  add_time datetime NULL,
  deleted bit DEFAULT 0,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES wesharedb.user(id)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS wesharedb.orders (
  id int(11) NOT NULL AUTO_INCREMENT,
  user_id int(11) NOT NULL,
  address_id int(11) NOT NULL,
  total_count DECIMAL(5,2) NOT NULL,
  actually_paid DECIMAL(5,2) NOT NULL,
  status varchar(10) NOT NULL,
  add_time datetime NULL,
  deleted bit DEFAULT 0,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES wesharedb.user(id),
  FOREIGN KEY (address_id) REFERENCES wesharedb.user_address(id)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS wesharedb.order_detail (
  id int(11) NOT NULL AUTO_INCREMENT,
  order_id int(11) NOT NULL,
  sku_id int(11) NOT NULL,
  unite_price DECIMAL(5,2) NOT NULL,
  goods_number int(5) NOT NULL,
  total_count DECIMAL(5,2) NOT NULL,
  add_time datetime NULL,
  deleted bit DEFAULT 0,
  PRIMARY KEY (id),
  FOREIGN KEY (order_id) REFERENCES wesharedb.orders(id),
  FOREIGN KEY (sku_id) REFERENCES wesharedb.goods_sku(id)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
