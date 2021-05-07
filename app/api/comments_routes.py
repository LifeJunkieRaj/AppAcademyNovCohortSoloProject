from flask import Blueprint, jsonify, request
from datetime import datetime
from app.models import db, AskAGuru, Category, User, Comment
from app.forms import CommentForm
from flask_login import login_required


comments_routes = Blueprint("/comments_routes", __name__)

@comments_routes.route('/', methods=["POST"])
@login_required
def add_comment():
    form = CommentForm()
    print(form["csrf_token"])
    form.data['csrf_token'] = request.cookies['csrf_token']
    print(form.data)
    data=request.json
    print(data)
    # if form.validate_on_submit():
    new_comment=Comment(user_id=data["user_id"], 
            ask_a_guru_id=data["ask_a_guru_id"],
            comment=data["comment"])
    print(new_comment)
    db.session.add(new_comment)
    db.session.commit()
    return new_comment.to_dict()

