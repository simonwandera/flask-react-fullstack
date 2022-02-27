from flask import Flask
from datetime import datetime
from flask_cors import CORS

app = Flask(__name__)

CORS(app, supports_credentials=True)

@app.route("/api/time")
def first_page():
    return {"dates": datetime.utcnow()}

if __name__ == "__main__":
    app.run(debug=True)