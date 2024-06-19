"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "EL BACKEND FUNCIONA"
    }

    return jsonify(response_body), 200


@api.route('/email', methods=['POST'])
def get_emails():
    users = User.query.all()
    emails = [user.email for user in users]
    return jsonify(emails), 200
