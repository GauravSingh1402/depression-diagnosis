from flask import Flask
app=Flask(__name__)
@app.route('/')
def hello():
    return "Hello"
 
@app.route('/survey')
def survey():
    return "survey"

@app.route('/result')
def result():
    return "result"


@app.route('/selfhelp')
def selfhelp():
    return "selfhelp"



if __name__=='__main__':
    app.run(debug=True)