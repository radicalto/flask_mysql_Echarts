from flask import Flask, request, render_template, jsonify, send_from_directory
from jieba.analyse import extract_tags
import os
import string
import threading
import utils
app = Flask(__name__)


@app.route('/text')
def hello_world():  # put application's code here
    return render_template('text.html')

@app.route('/')
def index():  # put application's code here
    return render_template('index.html')\

@app.route('/time')
def get_time():  # put application's code here
    return utils.get_time()

@app.route('/c1')
def c1_handle():  # put application's code here
    confirm, confirm_add, heal, dead = utils.get_c1_data()
    return jsonify({  # 构造字典并转成json对象
        'confirm': confirm,#data[0]
        'confirm_add': confirm_add,
        'heal': heal,
        'dead': dead
    })

@app.route('/c2')
def c2_handle():  # put application's code here
    result = []
    data = utils.get_c2_data()
    for item in data:
        result.append({'name':item[0],'value':item[1]})
    return jsonify({
        'c2_Data':result
    })

@app.route('/l1')
def l1_handle():  # put application's code here
    data:tuple = utils.get_l1_data()
    day, confirm, suspect, heal, dead = [], [], [], [], []
    for da, co, su, he, de in data:
        day.append(da.strftime('%m-%d')) #da为datetime类型
        confirm.append(co)
        suspect.append(su)
        heal.append(he)
        dead.append(de)
    return jsonify({
        'day': day,
        'confirm': confirm,
        'suspect': suspect,
        'heal': heal,
        'dead': dead
    })

@app.route('/l2')
def l2_handle():  # put application's code here
    data:tuple = utils.get_l2_data()
    day, confirm_add, suspect_add, heal_add, dead_add = [], [], [], [], []
    for da, co, su, he, de in data:
        day.append(da.strftime('%m-%d')) #da为datetime类型
        confirm_add.append(co)
        suspect_add.append(su)
        heal_add.append(he)
        dead_add.append(de)
    return jsonify({
        'day': day,
        'confirm_add': confirm_add,
        'suspect_add': suspect_add,
        'heal_add': heal_add,
        'dead_add': dead_add
    })

@app.route('/r1')
def r1_handle():  # put application's code here
    data:tuple = utils.get_r1_data()
    city,confirm = [], []
    for item in data:
        city.append(item[0])
        confirm.append(item[1])
    return jsonify({
        'city': city,
        'confirm': confirm
    })

@app.route('/r2')
def r2_handle():  # put application's code here
    data:tuple = utils.get_r2_data()
    result = []
    for index,content in enumerate(data):
        result.append({
            'content': content[0],
            'value': 300 + (30 - int(index)) * 5 #构造权重
        })
    print(result)
    return jsonify({
        'keyData':result
    })



if __name__ == '__main__':
    app.run(host="::",debug=False)

