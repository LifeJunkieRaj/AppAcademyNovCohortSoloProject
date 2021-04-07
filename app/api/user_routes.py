from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User, AskAGuru

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {"users": [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()

@user_routes.route('/<int:id>/ask_a_guru/')
@login_required
def user_ask_a_guru(id):
    user_ask_a_guru = AskAGuru.query.filter(AskAGuru.user_id == id).order_by(AskAGuru.created_at.desc()).all()
    return {"user_ask_a_guru": [question.to_dict() for question in user_ask_a_guru]}
