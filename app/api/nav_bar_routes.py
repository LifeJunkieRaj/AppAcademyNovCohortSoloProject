from flask import Blueprint
from app.models import AskAGuru
from flask_login import login_required
from app.api.ask_a_guru_routes import catsAndQs
from app.models import Category

nav_bar_routes = Blueprint("search", __name__)
@nav_bar_routes.route('/<query>/')
@login_required
def find_results(query):
    print (query)
    categoryMatches= Category.query.filter(Category.name.ilike(f'%{query}%')).all()
    categoryIds= [cat.id for cat in categoryMatches]
    
   
    searchResults = AskAGuru.query.filter(AskAGuru.category_id.in_(categoryIds)).join(Category).order_by(AskAGuru.created_at.desc()).limit(10).all()   
    
    found_questions = [catsAndQs(question) for question in searchResults]
    print(found_questions)
    return { "foundItems": found_questions }
