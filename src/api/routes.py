"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from flask_migrate import Migrate
from flask_swagger import swagger
from flask_cors import CORS
from api.utils import generate_sitemap, APIException
from api.models import db, Account, Review, Barber, Services, Barber_Services, Appointment, Client

api = Blueprint('api', __name__)

## Create Client ID

@api.route('/client/', methods=['POST'])
def create_new_card():
    img = request.json.get('img', None)
    name = request.json.get('name', None)
    lastname = request.json.get('lastname', None)
    phone_number = request.json.get('phone_number', None)
    email = request.json.get('email', None)
    _password = request.json.get('_password', None)
    address = request.json.get('address', None)
    city = request.json.get('city', None)
    cp = request.json.get('cp', None)
    
    
    if not (name and lastname and phone_number and email and _password and address and city and cp):
        return({'error': 'Missing info'}), 400

    account = Account( 
        img=img,
        name=name,
        lastname=lastname,
        phone_number=phone_number, 
        email=email,
        _password=_password,
        address=address,
        city=city,
        cp=cp,
        is_client=True,
        is_active=True
    )
    try:
        account.create()
        
    except exc.IntegrityError:
        return({"error" : "This mail is ready in use"}), 400
    
    client = Client(id_account=account.id)
    try:
        client.create()
        return jsonify(client.serialize()), 201
        
    except exc.IntegrityError:
        return({"error" : "This nick is ready in use"}), 400

"""

## Client  Get ID

@api.route('/client/<int:id>', methods=['GET'])
def get_client_id(id):
    account = Account.get_by_id(id)
    if account:
        account_id = account.to_dict()
        return jsonify(account_id), 200 
    return jsonify({'error': 'Account no fount¡¡¡¡'}), 404

## Edit Client ID

@api.route('/client/<int:id>', methods=['PUT'])
def edit_client(id):
    new_info = { 
        'img' : request.json.get('img', None),
        'name' : request.json.get('name', None),
        'lastname' : request.json.get('lastname', None),
        'phone_number' : request.json.get('phone_number', None),
        'email' : request.json.get('email', None),
        '_password' : request.json.get('_password', None),
        'address' : request.json.get('address', None),
        'city' : request.json.get('city', None)
    }
    account = Account.get_by_id(id)
    if account:
        update_client = account.edit_client(**{
            key: value for key,value in new_info.items()
            if value is not None
        })
        return jsonify(update_client.to_dict()), 200
    return {'error': 'Fail no user¡¡'} , 400


    ## Create Barber ID

@api.route('/barber/', methods=['POST'])
def create_new_card():
    img = request.json.get('img', None)
    name = request.json.get('name', None)
    lastname = request.json.get('lastname', None)
    phone_number = request.json.get('phone_number', None)
    email = request.json.get('email', None)
    _password = request.json.get('_password', None)
    address = request.json.get('address', None)
    city = request.json.get('city', None)
    
    
    if not (name and radio and lastname and phone_number and email and _password and address and city and cp):
        return({'error': 'Missing info'}), 400
 
 #instancia de la cuenta
    account = Account( 
        img=img,
        name=name,
        lastname=lastname,
        phone_number=phone_number, 
        email=email,
        _password=_password,
        address=address,
        city=city,
        cp=cp,
        is_client=False,
        is_active=True
    )
    try:
        account.create()
    except exc.IntegrityError:
        return({"error" : "This mail is ready in use"}), 400
    
    baber = Barber(radio=radio, id_account=account.id)
    try:
        barber.create()
        return jsonify(barber.to_dict()), 201
        
    except exc.IntegrityError:
        return({"error" : "This nick is ready in use"}), 400

## Barber  Get ID

@api.route('/barber/<int:id>', methods=['GET'])
def get_barber_id(id):
    account = Account.get_by_id(id)
    if account:
        account_id = account.to_dict()
        return jsonify(account_id), 200 
    return jsonify({'error': 'Account no fount¡¡¡¡'}), 404

## Edit Barber ID

@api.route('/barber/<int:id>', methods=['PUT'])
def edit_barber(id):
    new_info = { 
        'img' : request.json.get('img', None),
        'name' : request.json.get('name', None),
        'lastname' : request.json.get('lastname', None),
        'phone_number' : request.json.get('phone_number', None),
        'email' : request.json.get('email', None),
        '_password' : request.json.get('_password', None),
        'address' : request.json.get('address', None),
        'city' : request.json.get('city', None)
    }
    account = Account.get_by_id(id)
    if account:
        update_barber = account.edit_barber(**{
            key: value for key,value in new_info.items()
            if value is not None
        })
        return jsonify(update_barber.to_dict()), 200
    return {'error': 'Fail no user¡¡'} , 400

"""
