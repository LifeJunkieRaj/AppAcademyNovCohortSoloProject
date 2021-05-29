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


@comments_routes.route('/<int:id>/edit', methods=["POST"])
@login_required
def change_comment(id):
    print(id)
    comment= Comment.query.get(id)
    if comment==None:
            return jsonify({"error":"unable to retrieve the comment"})
    form = CommentForm()
    print(form["csrf_token"])
    form.data['csrf_token'] = request.cookies['csrf_token']
    print(form.data)
    data=request.json
    
    comment.comment= data['text_body']
    db.session.commit()
    return comment.to_dict()



@comments_routes.route('/<int:id>/delete', methods=["DELETE"])
@login_required
def remove_comment(id):
    comment= Comment.query.get(id)
    db.session.delete(comment)
    db.session.commit()
    return jsonify({"ok": "success"})