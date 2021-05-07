from werkzeug.security import generate_password_hash
from app.models import db, User
from faker import Faker
fake = Faker()
from random import randrange

# Adds a demo user, you can add other users here if you want


def generate_users():
    users = []
    i = 0
    while i < 20:
        user = User(username=fake.user_name(), 
                    first_name=fake.first_name(),
                    last_name=fake.last_name(),
                    email=fake.email(), 
                    password=fake.password(),
                    guru = True if randrange(0, 10, 1) > 4 else False) 
                                         
        users.append(user)
        i += 1
    for user in users:
        db.session.add(user)


def seed_users():
    
    demo = User(username='Demo', first_name='Demo', last_name='Lition', email='demo@lition.com',
                password='password', guru = True if randrange(0, 10, 1) > 4 else False)
    
    db.session.add(demo)
    generate_users()
    db.session.commit()
    
#USERS

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute('TRUNCATE users CASCADE;')
    db.session.execute('ALTER SEQUENCE users_id_seq RESTART WITH 1;')
    db.session.commit()
