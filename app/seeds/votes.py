from app.models import db, Vote
from random import randrange


def seed_votes():
    vote1 = Vote(user_id=19,
                 comment_id=1,
                 vote = True if randrange(0,10,1) > 4 else False)
    
    vote2 = Vote(user_id=14,
                 comment_id=2,
                 vote = True if randrange(0,10,1) > 4 else False)
    
    vote3 = Vote(user_id=1,
                 comment_id=3,
                 vote = True if randrange(0,10,1) > 4 else False)
    
    vote4 = Vote(user_id=2,
                 comment_id=4,
                 vote = True if randrange(0,10,1) > 4 else False)
    
    vote5 = Vote(user_id=17,
                 comment_id=5,
                 vote = True if randrange(0,10,1) > 4 else False)
    
    vote6 = Vote(user_id=10,
                 comment_id=6,
                 vote = True if randrange(0,10,1) > 4 else False)
    
    vote7 = Vote(user_id=14,
                 comment_id=7,
                 vote = True if randrange(0,10,1) > 4 else False)
    
    vote8 = Vote(user_id=10,
                 comment_id=8,
                 vote = True if randrange(0,10,1) > 4 else False)
    
    vote9 = Vote(user_id=3,
                 comment_id=9,
                 vote = True if randrange(0,10,1) > 4 else False)
    
    vote10 = Vote(user_id=5,
                 comment_id=10,
                 vote = True if randrange(0,10,1) > 4 else False)
    
    db.session.add(vote1)
    db.session.add(vote2)
    db.session.add(vote3)
    db.session.add(vote4)
    db.session.add(vote5)
    db.session.add(vote6)
    db.session.add(vote7)
    db.session.add(vote8)
    db.session.add(vote9)
    db.session.add(vote10)
    
    db.session.commit()
    
def undo_votes():
    db.session.execute('TRUNCATE votes CASCADE;')
    db.session.commit()