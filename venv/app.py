from distutils.log import debug
from flask import Flask
import time
import atexit
import sys

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

if __name__ =="__main__":
    app.run(debug=True)
    print('Hello world!', file=sys.stderr)

