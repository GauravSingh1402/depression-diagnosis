from codecs import getencoder
from flask import Flask, jsonify, request
from model import *
app=Flask(__name__)
@app.route('/')
def hello():
    return "Hello"

@app.route('/result')
def result():
    print(classifier.predict([[31,1,0,1,3,0,1,0,1,0,0,0,2,1,1,2,0,2,2,0,1]]))
    return "hello"
@app.route('/postSurveyData', methods=['POST'])
def surveyDatas():
    surveyDa = request.get_json()
    print(surveyDa)
    if not surveyDa:
        return jsonify({'msg': surveyDa}), 400
    return jsonify({'msg': surveyDa}), 200



if __name__=='__main__':
    app.run(debug=True)
