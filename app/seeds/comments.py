from app.models import db, Comment
from random import randrange

def seed_comments():
    comment1 = Comment(user_id=randrange(1,21,1),
                       ask_a_guru_id=randrange(1,21,1),
                       comment="Such shot, many background, so elegant!")
    
    comment2 = Comment(user_id=randrange(1,21,1),
                       ask_a_guru_id=randrange(1,21,1),
                       comment="Just strong.")
    
    comment3 = Comment(user_id=randrange(1,21,1),
                       ask_a_guru_id=randrange(1,21,1),
                       comment="Engaging, I approve the use of background image and iconography!")
    
    comment4 = Comment(user_id=randrange(1,21,1),
                       ask_a_guru_id=randrange(1,21,1),
                       comment="Mission accomplished. It is amazing m8!")
    
    comment5 = Comment(user_id=randrange(1,21,1),
                       ask_a_guru_id=randrange(1,21,1),
                       comment="Let me take a nap... great job, anyway.")
    
    comment6 = Comment(user_id=randrange(1,21,1),
                       ask_a_guru_id=randrange(1,21,1),
                       comment="This texture has navigated right into my heart.")
    
    comment7 = Comment(user_id=randrange(1,21,1),
                       ask_a_guru_id=randrange(1,21,1),
                       comment="You are so inspiring!")
    
    comment8 = Comment(user_id=randrange(1,21,1),
                       ask_a_guru_id=randrange(1,21,1),
                       comment="Jesus Christ. How do you do it?")
    
    comment9 = Comment(user_id=randrange(1,21,1),
                       ask_a_guru_id=randrange(1,21,1),
                       comment="Fabulous work you have here.")
    
    comment10 = Comment(user_id=randrange(1,21,1),
                       ask_a_guru_id=randrange(1,21,1),
                       comment="Light. Wow love it!")
    
    db.session.add(comment1)
    db.session.add(comment2)
    db.session.add(comment3)
    db.session.add(comment4)
    db.session.add(comment5)
    db.session.add(comment6)
    db.session.add(comment7)
    db.session.add(comment8)
    db.session.add(comment9)
    db.session.add(comment10)
    
    db.session.commit()
    
def undo_comments():
    db.session.execute('TRUNCATE comments CASCADE;')
    db.session.execute('ALTER SEQUENCE comments_id_seq RESTART WITH 1;')
    db.session.commit()
    