import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import * as Sequelize from 'sequelize'; // 引入 Sequelize 库
import sequelize from '../database/sequelize'; // 引入 Sequelize 实例
import { formatDate } from '../utils/utils';
@Injectable()
export class CustomerService {
  async create(reqBody: any): Promise<any | undefined> {
    let { name, phone, sex, addcode, address, tags, remark } = reqBody;
    let selectSql = `SELECT * FROM admin_customer WHERE name = '${name}'`;
    try {
      let res = await sequelize.query(selectSql, {
        type: Sequelize.QueryTypes.SELECT, // 查询方式
        raw: true, // 是否使用数组组装的方式展示结果
        logging: true, // 是否将 SQL 语句打印到控制台，默认为 true
      });
      const user = res[0];
      if (user) {
        return {
          code: 200, // 返回状态码，可自定义
          msg: '该用户名已存在',
        };
      }
    } catch (error) {
      return {
        code: 503,
        msg: `Service error: ${error}`,
      };
    }
    let time = new Date().getTime();
    let times = formatDate(time);
    let sql = `INSERT INTO admin_customer (name,phone,sex,addcode,address,tags,remark,create_time,is_deleted) VALUES ('${name}','${phone}','${sex}','${addcode}','${address}','${tags}','${remark}','${times}','0')`;
    try {
      const res = await sequelize.query(sql, {});
      return {
        code: 200,
        msg: '操作成功',
      };
    } catch (error) {
      return {
        code: 503,
        msg: `Service error: ${error}`,
      };
    }
  }

  async findAll() {
    let sql = `SELECT * FROM admin_customer WHERE is_deleted = '0'`;
    try {
      const res = await sequelize.query(sql, {});
      const user = res[0];
      return {
        code: 200,
        data: user,
        msg: '操作成功',
      };
    } catch (error) {
      return {
        code: 503,
        msg: `Service error: ${error}`,
      };
    }
  }

  async findOne(id: number) {
    let selectSql = `SELECT * FROM admin_customer WHERE id='${id}'`;
    try {
      const res = await sequelize.query(selectSql, {});
      const user = res[0];
      return {
        code: 200,
        data: user,
        msg: '操作成功',
      };
    } catch (error) {
      return {
        code: 503,
        msg: `Service error: ${error}`,
      };
    }
  }

  update(data: any) {
    let sql =`UPDATE admin_customer SET ${data} WHERE id = '${data.id}'`
  }

 async remove(id: number) {
    let delSql  = `UPDATE admin_customer SET is_deleted = 1 WHERE id = '${id}'`
    try {
      const res = await sequelize.query(delSql,{})

    } catch (error) {
      
    }
  }
}
