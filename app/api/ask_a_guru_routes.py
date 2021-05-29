from app.models import db, AskAGuru, Category, User
from flask_login import login_required, current_user
from flask import Blueprint, session, request, jsonify
from datetime import datetime
from app.forms import AskAGuruForm


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
        "username": q.user.username,
        "guru":q.user.guru,
        "description": q.category.description,
        "comments": [comment.to_dict() for comment in q.comments],
        "responses": [response.to_dict() for response in q.responses]
    }

@ask_a_guru_routes.route('/<int:id>/')
@login_required
def ask_a_guru(id):
    print("userId:"+str(id))
    userQuestion = AskAGuru.query.filter(AskAGuru.user_id.in_([id])).join(Category).all()
    # userQuestionCategories = 
    if userQuestion:
    
        questions = {"questions": {q.id : catsAndQs(q) for q in userQuestion}}
        print((questions))
        return jsonify(questions)
    else:
        return jsonify({"error": "No Questions Posted Yet!"}) 
        
@ask_a_guru_routes.route('/')
@login_required
def ask_a_guru_all():
    userQuestion = AskAGuru.query.join(Category).all()
    # userQuestionCategories = 
    if userQuestion:
    
        questions = {"questions": {q.id : catsAndQs(q) for q in userQuestion}}
        print(jsonify(questions))
        return jsonify(questions)
    else:
        return "This is an Error"
    
@ask_a_guru_routes.route('/', methods=["POST"])
@login_required
def ask_a_guru_question():
    form = AskAGuruForm()
    print(form["csrf_token"])
    form.data['csrf_token'] = request.cookies['csrf_token']
    print(form.data)
    data=request.json
    print(data)
    # if form.validate_on_submit():
    new_ask_a_guru=AskAGuru(user_id=data["user_id"], 
            category_id=data["category"],
            question=data["text_body"])
    print(new_ask_a_guru)
    db.session.add(new_ask_a_guru)
    db.session.commit()
    return new_ask_a_guru.to_dict()
    # else:
    #     return {"errors": "invalid submission"}
    
@ask_a_guru_routes.route('/question/<int:id>/', methods=["DELETE"])
@login_required
def ask_a_guru_delete(id):
    ask_to_delete = AskAGuru.query.get(id)
    if ask_to_delete:
        if ask_to_delete.user_id == current_user.id:
            db.session.delete(ask_to_delete)
    db.session.commit()
    return {}

@ask_a_guru_routes.route('/comments_responses/<int:id>/', methods=["GET"])
@login_required
def ask_a_guru_user_comments_responses (id):
    questions = AskAGuru.query.join(Category).all()
    # filtered_questions = [question.to_dict() for question in questions for comment in (question.to_dict())["comment"] if comment["user_id"] == id]
    filtered_questions = {}
    for question in questions:
        question = catsAndQs(question)
        for comment in question["comments"]:
            if comment["user_id"] == id:
                filtered_questions[question["id"]]=question
        for response in question["responses"]:
            if response["user_id"] == id:
                filtered_questions[question["id"]]=question
    return jsonify({"filtered_questions": [value for key, value in filtered_questions.items()]})