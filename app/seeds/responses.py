from app.models import db, Response
from random import randrange


def seed_responses():
    response1 = Response(user_id=randrange(1,21,1),
                         ask_a_guru_id=randrange(1,21,1),
                         response="It was a scrape that he hardly noticed. Sure, there was a bit of blood but it was minor compared to most of the other cuts and bruises he acquired on his adventures. There was no way he could know that the rock that produced the cut had alien genetic material on it that was now racing through his bloodstream. He felt perfectly normal and continued his adventure with no knowledge of what was about to happen to him.")
    
    response2 = Response(user_id=randrange(1,21,1),
                         ask_a_guru_id=randrange(1,21,1),
                         response="Then came the night of the first falling star. It was seen early in the morning, rushing over Winchester eastward, a line of flame high in the atmosphere. Hundreds must have seen it and taken it for an ordinary falling star. It seemed that it fell to earth about one hundred miles east of him.")
    
    response3 = Response(user_id=randrange(1,21,1),
                         ask_a_guru_id=randrange(1,21,1),
                         response="What have you noticed today? I noticed that if you outline the eyes, nose, and mouth on your face with your finger, you make an I which makes perfect sense, but is something I never noticed before. What have you noticed today?")
    
    response4 = Response(user_id=randrange(1,21,1),
                         ask_a_guru_id=randrange(1,21,1),
                         response="It was a question of which of the two she preferred. On the one hand, the choice seemed simple. The more expensive one with a brand name would be the choice of most. It was the easy choice. The safe choice. But she was not sure she actually preferred it.")
    
    response5 = Response(user_id=randrange(1,21,1),
                         ask_a_guru_id=randrange(1,21,1),
                         response="He watched as the young man tried to impress everyone in the room with his intelligence. There was no doubt that he was smart. The fact that he was more intelligent than anyone else in the room could have been easily deduced, but nobody was really paying any attention due to the fact that it was also obvious that the young man only cared about his intelligence.")
    
    response6 = Response(user_id=randrange(1,21,1),
                         ask_a_guru_id=randrange(1,21,1),
                         response="There once lived an old man and an old woman who were peasants and had to work hard to earn their daily bread. The old man used to go to fix fences and do other odd jobs for the farmers around, and while he was gone the old woman, his wife, did the work of the house and worked in their own little plot of land.")
    
    response7 = Response(user_id=randrange(1,21,1),
                         ask_a_guru_id=randrange(1,21,1),
                         response="She has asked the question so many times that she barely listened to the answers anymore. The answers were always the same. Well, not exactly the same, but the same in a general sense. A more accurate description was the answers never surprised her. So, she asked for the 10,000th time, What is your favorite animal? But this time was different. When she heard the young boys answer, she wondered if she had heard him correctly.")
    
    response8 = Response(user_id=randrange(1,21,1),
                         ask_a_guru_id=randrange(1,21,1),
                         response="He had done everything right. There had been no mistakes throughout the entire process. It had been perfection and he knew it without a doubt, but the results still stared back at him with the fact that he had lost.")
    
    response9 = Response(user_id=randrange(1,21,1),
                         ask_a_guru_id=randrange(1,21,1),
                         response="Here is the thing. She does not have anything to prove, but she is going to anyway. That is just her character. She knows she does not have to, but she still will just to show you that she can. Doubt her more and she will prove she can again. We all already know this and you will too.")
    
    response10 = Response(user_id=randrange(1,21,1),
                         ask_a_guru_id=randrange(1,21,1),
                         response="She never liked cleaning the sink. It was beyond her comprehension how it got so dirty so quickly. It seemed that she was forced to clean it every other day. Even when she was extra careful to keep things clean and orderly, it still ended up looking like a mess in a couple of days. What she did not know was there was a tiny creature living in it that did not like things neat.")
                         
    db.session.add(response1)
    db.session.add(response2)
    db.session.add(response3)
    db.session.add(response4)
    db.session.add(response5)
    db.session.add(response6)
    db.session.add(response7)
    db.session.add(response8)
    db.session.add(response9)
    db.session.add(response10)
    
    db.session.commit()
    
def undo_responses():
    db.session.execute('TRUNCATE responses CASCADE;')
    db.session.execute('ALTER SEQUENCE responses_id_seq RESTART WITH 1;')
    db.session.commit()