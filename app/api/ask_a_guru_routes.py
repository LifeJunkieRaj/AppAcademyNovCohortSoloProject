from app.models import db, AskAGuru, User
from flask_login import login_required
from flask import Blueprint, session, request
from datetime import datetime

ask_a_guru_routes = Blueprint("ask_a_guru_routes", __name__)

# @ask_a_guru_routes.route('/<int:id>/')
# @login_required
# def user(id):
#     user = User.query.get(id)
    
#     return {"currentUser": user.to_dict()}

@ask_a_guru_routes.route('/<int:id>/')
@login_required
def ask_a_guru(id):
    ask_a_guru = AskAGuru.query.filter(AskAGuru.user_id == id).all()
    
    return {"questions": [question.to_dict() for question in ask_a_guru]}