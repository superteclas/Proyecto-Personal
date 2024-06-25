"""
This module takes care of starting the API Server, Loading the DBBBBBBBBBBBB and Adding the endpoints
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


@api.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    serialized_users = [user.serialize() for user in users]
    return jsonify(serialized_users), 200

@api.route('/users', methods=['POST'])
def create_user():
    email = request.json.get('email')

    if not email:
        return jsonify({'error': 'Email es requerido'}), 400
    
    existing_user = User.query.filter_by(email=email).first()
    if existing_user:
        return jsonify({'error': 'El usuario ya existe', 'exists': True}), 400

    new_user = User(email=email)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({'message': 'Usuario creado exitosamente', 'exists': False}), 201