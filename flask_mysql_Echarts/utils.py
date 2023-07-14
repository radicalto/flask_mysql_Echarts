import time
import pymysql
from settings import *

def get_time():
    time_str = time.strftime('%Y{}%m{}%d %X')
    return time_str.format('年','月','日')

def get_database():
    db = pymysql.connect(host=HOST, user=USER, passwd=PASSWORD, database=DATABASE)
    if db.open:
        cursor = db.cursor()
        return db, cursor
    else:
        raise Exception('数据库连接失败')

def close_database(db, cursor):
    cursor.close()
    db.close()

def query(sql:str, *args):
    db, cursor = get_database()
    cursor.execute(sql, args)
    result = cursor.fetchall()
    close_database(db, cursor)
    return result

def get_c1_data()->tuple:
    sql = '''
    select 
    (select max(confirm) from history),
    (select confirm_add from history order by ds desc limit 1),
    sum(heal),
    sum(dead)
    from details
    where update_time=(select update_time from details order by update_time desc limit 1)
    '''
    return query(sql)[0]

def get_c2_data()->tuple:
    sql = '''
    select province,sum(confirm_add) from details
    where update_time=(select update_time from details order by update_time desc limit 1)
    group by province
    '''
    return query(sql)

def get_l1_data()->tuple:
    sql = """
        select ds,confirm,suspect,heal,dead from history
        """
    return query(sql)

def get_l2_data()->tuple:
    sql = """
        select ds,confirm_add,suspect_add,heal_add,dead_add from history
        """
    return query(sql)

def get_r1_data()->tuple:
    sql = """
        select city,confirm from
        (SELECT city,confirm from details WHERE
        update_time=(select update_time from details order by update_time desc limit 1) AND province not in ('西藏','新疆','内蒙古','广西','宁夏','台湾','香港')) as t 
        ORDER BY confirm desc LIMIT 5;
        """
    return query(sql)

def get_r2_data()->tuple:
    sql = 'select content from hotsearch order by id limit 30'
    #先取最后三十个（最新数据），再逆序输出（使热度高的在前）
    return query(sql)


