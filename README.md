# flask_mysql_Echarts

### 全国新冠感染数据图
由flask+Echats+mysql+JQery技术开发
1.	爬取全国各省各市的相关数据和百度每日热搜保存入mysql
2.	对数据进行处理，对数据求和获取了累计感染，累计治愈，累计死亡，与昨天相比得出新增确诊
3.	用Echats对数据进行可视化
4.	创建一个线程，设定每隔几个小时更新数据一次