from flask import Flask, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

SOL_API = "d0fd0db5-cf89-4c8b-886c-4435875b7a77"

@app.route("/bodies")
def get_bodies():
    url = "https://api.le-systeme-solaire.net/rest/bodies/"
    headers = {"Authorization": f"Bearer {SOL_API}"}
    try:
        r = requests.get(url, headers=headers)
        r.raise_for_status()
        return jsonify(r.json())
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
