from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.dialects.postgresql import VARCHAR

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.Varchar, unique=True, nullable=False)
    first_name = db.Column(db.Varchar, unique=False, nullable=False)
    last_name = db.Column(db.Varchar, unique=False, nullable=False)
    _password = db.Column(db.Varchar, unique=False, nullable=False)
    _is_active = db.Column(db.Boolean(), default=True, unique=False, nullable=False)

    def __repr__(self):
        return f'User {self.email}'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

    @classmethod
    def get_by_email(cls.email):
        user = cls.quuery.filter_by(email = email).one_or_none()
        return user