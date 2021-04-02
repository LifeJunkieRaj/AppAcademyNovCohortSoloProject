from app.models import db, AskAGuru
from datetime import datetime


def seed_ask_a_guru():
    ask_a_guru1 = AskAGuru(user_id=9,
                           category_id=10,
                           rating=5,
                           question="How do I write a basic business plan?",
                           img_src="",
                           created_at=(datetime(2020, 8, 24)))
    
    ask_a_guru2 = AskAGuru(user_id=8,
                           category_id=8,
                           rating=5,
                           question="What is whitelabeling in eCommerce?",
                           img_src="",
                           created_at=(datetime(2021, 3, 3)))
    
    ask_a_guru3 = AskAGuru(user_id=7,
                           category_id=6,
                           rating=5,
                           question="Is options trading profitable?",
                           img_src="",
                           created_at=(datetime(2020, 12, 24)))
    
    ask_a_guru4 = AskAGuru(user_id=6,
                           category_id=4,
                           rating=4,
                           question="How can I setup my own dog walking service?",
                           img_src="",
                           created_at=(datetime(2019, 10, 23)))
    
    ask_a_guru5 = AskAGuru(user_id=5,
                           category_id=2,
                           rating=2,
                           question="Should I learn web development 3.0 before I start my own blockchain?",
                           img_src="",
                           created_at=(datetime(2021, 4, 17)))
    
    ask_a_guru6 = AskAGuru(user_id=4,
                           category_id=1,
                           rating=5,
                           question="Can you still make money flipping houses?",
                           img_src="",
                           created_at=(datetime(2021, 11, 6)))
    
    ask_a_guru7 = AskAGuru(user_id=3,
                           category_id=3,
                           rating=5,
                           question="Are Amazon FBA fees worth it?",
                           img_src="",
                           created_at=(datetime(2018, 11, 27)))
    
    ask_a_guru8 = AskAGuru(user_id=2,
                           category_id=5,
                           rating=5,
                           question="How can I get started as a YouTuber?",
                           img_src="",
                           created_at=(datetime(2021, 1, 2)))
    
    ask_a_guru9 = AskAGuru(user_id=1,
                           category_id=7,
                           rating=5,
                           question="What are the steps to becoming a freelance web developer",
                           img_src="",
                           created_at=(datetime(2020, 8, 14)))
    
    ask_a_guru10 = AskAGuru(user_id=10,
                           category_id=9,
                           rating=5,
                           question="Which are the top-rated dropshipping wholesalers?",
                           img_src="",
                           created_at=(datetime(2019, 1, 11)))
    
    ask_a_guru11 = AskAGuru(user_id=9,
                           category_id=10,
                           rating=5,
                           question="How do I write a basic business plan?",
                           img_src="",
                           created_at=(datetime(2020, 8, 24)))
    
    ask_a_guru12 = AskAGuru(user_id=18,
                           category_id=8,
                           rating=5,
                           question="Should I build my first eCommerce website through Four Square?",
                           img_src="",
                           created_at=(datetime(2021, 9, 9)))
    
    ask_a_guru13 = AskAGuru(user_id=17,
                           category_id=6,
                           rating=5,
                           question="Which is the most profitable to trade: Options, Stocks or FOREX?",
                           img_src="",
                           created_at=(datetime(2021, 12, 12)))
    
    ask_a_guru14 = AskAGuru(user_id=16,
                           category_id=4,
                           rating=4,
                           question="Can I do Uber and Lyft and Doordash at the same time?",
                           img_src="",
                           created_at=(datetime(2021, 10, 3)))
    
    ask_a_guru15 = AskAGuru(user_id=15,
                           category_id=2,
                           rating=2,
                           question="How do I figure out which cryptocurrencies will go up in price?",
                           img_src="",
                           created_at=(datetime(2020, 1, 7)))
    
    ask_a_guru16 = AskAGuru(user_id=14,
                           category_id=1,
                           rating=5,
                           question="As a real investor does it help to get my realtor's license?",
                           img_src="",
                           created_at=(datetime(2021, 11, 6)))
    
    ask_a_guru17 = AskAGuru(user_id=13,
                           category_id=3,
                           rating=5,
                           question="Do I need to purchase amazon marketing and also market through facebook?",
                           img_src="",
                           created_at=(datetime(2019, 1, 27)))
    
    ask_a_guru18 = AskAGuru(user_id=12,
                           category_id=5,
                           rating=5,
                           question="Do reaction youtubers need a professional mic?",
                           img_src="",
                           created_at=(datetime(2021, 2, 1)))
    
    ask_a_guru19 = AskAGuru(user_id=11,
                           category_id=7,
                           rating=5,
                           question="What tax form does a freelance movie consultant fill out?",
                           img_src="",
                           created_at=(datetime(2020, 7, 13)))
    
    ask_a_guru20 = AskAGuru(user_id=20,
                           category_id=9,
                           rating=5,
                           question="Is dropshipping really a profitable business model?",
                           img_src="",
                           created_at=(datetime(2018, 3, 10)))
    
    db.session.add(ask_a_guru1)
    db.session.add(ask_a_guru2)
    db.session.add(ask_a_guru3)
    db.session.add(ask_a_guru4)
    db.session.add(ask_a_guru5)
    db.session.add(ask_a_guru6)
    db.session.add(ask_a_guru7)
    db.session.add(ask_a_guru8)
    db.session.add(ask_a_guru9)
    db.session.add(ask_a_guru10)
    db.session.add(ask_a_guru11)
    db.session.add(ask_a_guru12)
    db.session.add(ask_a_guru13)
    db.session.add(ask_a_guru14)
    db.session.add(ask_a_guru15)
    db.session.add(ask_a_guru16)
    db.session.add(ask_a_guru17)
    db.session.add(ask_a_guru18)
    db.session.add(ask_a_guru19)
    db.session.add(ask_a_guru20)
    
    db.session.commit()
    
def undo_ask_a_guru():
    db.session.execute('TRUNCATE ask_a_guru CASCADE;')
    db.session.commit()   