from datetime import timedelta
from flask import Flask, request, jsonify, url_for, Blueprint
from sqlalchemy import exc
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from api.utils import generate_sitemap, APIException
from api.models import db, Account, Review, Barber, Services, Barber_Services, Appointment, Client
​
api = Blueprint('api', __name__)
​
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
    cp = request.json.get('cp', None)
    radio = request.json.get("radio", None)
    
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
    
    barber = Barber(radio=radio, id_account=account.id)
    try:
        barber.create()
        return jsonify(barber.to_dict()), 201
        
    except exc.IntegrityError:
        return({"error" : "This nick is ready in use"}), 400
​
​
@api.route('/barber/<int:id>', methods=['GET'])
def get_barber_info(id):
    barber = Barber.get_by_id(id)
    if barber:
        barber_id = barber.to_dict()
        return jsonify(barber_id), 200
    return jsonify({'error':'Barber not found'}), 404
​
@api.route('/barber/', methods=['GET'])
def get_barber_all():
    barbers = Barber.get_all()
    if barbers:
        barbers_to_dict = [barber.to_dict() for barber in barbers ]
        return jsonify(barbers_to_dict), 200 
    return jsonify({'error': 'Barbers no fount¡¡¡¡'}), 404



	