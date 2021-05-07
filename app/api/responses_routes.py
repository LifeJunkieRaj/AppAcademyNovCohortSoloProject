from flask import Blueprint, jsonify, request
from datetime import datetime
from app.models import db, AskAGuru, Category, User, Response
from app.forms import ResponseForm
from flask_login import login_required


responses_routes = Blueprint("/responses_routes", __name__)

@responses_routes.route('/', methods=["POST"])
@login_required
def add_response():
    form = ResponseForm()
    print(form["csrf_token"])
    form.data['csrf_token'] = request.cookies['csrf_token']
    print(form.data)
    data=request.json
    print(data)
    # if form.validate_on_submit():
    new_response=Response(user_id=data["user_id"], 
            ask_a_guru_id=data["ask_a_guru_id"],
            response=data["response_text"])
    print(new_response)
    db.session.add(new_response)
    db.session.commit()
    return new_response.to_dict()

