from flask import Flask, jsonify, request
import numpy as np
app=Flask(__name__)
@app.route('/')
def hello():
    return "Hello"
@app.route('/postSurveyData', methods=['POST'])
def surveyDatas():
    surveyDa = request.get_json()
    list=[]
    for x in surveyDa:
        list.append(surveyDa[x])
    print(list)
    if not surveyDa:
        return jsonify({'msg': surveyDa}), 400
    return jsonify({'msg': surveyDa}), 200
if __name__=='__main__':
    app.run(debug=True)
