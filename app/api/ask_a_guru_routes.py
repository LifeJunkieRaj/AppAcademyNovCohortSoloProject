from app.models import db, AskAGuru, Category, User
from flask_login import login_required
from flask import Blueprint, session, request, jsonify
from datetime import datetime

ask_a_guru_routes = Blueprint("/ask_a_guru_routes", __name__)

def catsAndQs(q):
    return {
        "id": q.id,
        "user_id": q.user_id,
        "category_id": q.category_id,
        "question": q.question,
        "created_at": q.created_at,
        "idCat": q.category.id,
        "name": q.category.name,
        "description": q.category.description,
        "comments": [comment.to_dict() for comment in q.comments],
        "responses": [response.to_dict() for response in q.responses]
    }

@ask_a_guru_routes.route('/<int:id>/')
@login_required
def ask_a_guru(id):
    userQuestion = AskAGuru.query.join(Category).all()
    # userQuestionCategories = 
    if userQuestion:
    
        questions = {"questions": {q.id : catsAndQs(q) for q in userQuestion}}
        print(jsonify(questions))
        return jsonify(questions)
    else:
        return "This is an Error"

