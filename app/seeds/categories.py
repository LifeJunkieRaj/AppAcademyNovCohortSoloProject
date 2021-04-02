from app.models import db, Category


def seed_categories():
    category1 = Category(id=1,
                         name="Real Estate",
                         description="To actively or passively invest in real estate.",
                         type="Scalable Startup Entrepreneurship",
                         img_src="")
    
    category2 = Category(id=2,
                         name="Cryptocurrency and Blockchain",
                         description="Cryptocurrency is a medium of exchange, akin to the dollar, but it's in a digital format and uses encryption techniques to control the creation of monetary units and to verify the transfer of funds. Blockchain is the technology that enables the existence of cryptocurrency (often called 'crypto' for short).",
                         type="Scalable Startup Entrepreneurship",
                         img_src="")
    
    category3 = Category(id=3,
                         name="Amazon FBA",
                         description="A form of eCommerce where the seller sells through Amazon, and the seller stores their products in Amazon's fulfillment centers and they pick, pack, ship and provide customer service for the seller's products.",
                         type="Scalable Startup Entrepreneurship",
                         img_src="")
    
    category4 = Category(id=4,
                         name="Gig Economy",
                         description="Gig workers are independent contactors, online platform workers, contract firm workers, on-call workers and temporary workers. Gig workers enter into formal agreements with on-demand companies to provide services to the company's clients. The gig economy is characterized by the prevalence of short-term contracts or freelance work as opposed to permanent jobs",
                         type="Scalable Startup Entrepreneurship",
                         img_src="")   
    
    category5 = Category(id=5,
                         name="Social Media Marketing",
                         description="The use of social media and social networks to market a company's proudcts and services.",
                         type="Social Entrepreneurship",
                         img_src="")
    
    category6 = Category(id=6,
                         name="Market Trader",
                         description="The attempt to profit from the purchase and sale of different securities and markets such as stocks, options, futures, forex, cryptocurrency etc.",
                         type="Scalable Startup Entrepreneurship",
                         img_src="")
    
    category7 = Category(id=7,
                         name="Freelancing",
                         description="Self-employed professionals in a particular industry that take on contract work for a company or organization.",
                         type="Small Business Entrepreneurship",
                         img_src="")
    
    category8 = Category(id=8,
                         name="eCommerce",
                         description="E-commerce is the activity of electronically buying or selling of products on online services or over the Internet.",
                         type="Scalable Startup, Small Business, and Social Entrepreneurship",
                         img_src="")
    
    category9 = Category(id=9,
                         name="Dropshipping",
                         description="Drop shipping is a form of retail business wherein the seller accepts customer orders but does not keep goods sold in stock.",
                         type="Scalable Startup, Small Business, and Social Entrepreneurship",
                         img_src="")
    
    category10 = Category(id=10,
                         name="Entrepreneurship 101",
                         description="A person who organizes and operates a business or businesses, taking on greater than normal financial risks in order to do so.",
                         type="Small Business, Scalable Startup, Large Business and Social Entrepreneurship",
                         img_src="")
    
    db.session.add(category1)
    db.session.add(category2)
    db.session.add(category3)
    db.session.add(category4)
    db.session.add(category5)
    db.session.add(category6)
    db.session.add(category7)
    db.session.add(category8)
    db.session.add(category9)
    db.session.add(category10)
    
    db.session.commit()
    
    
def undo_categories():
    db.session.execute('TRUNCATE categories CASCADE;')
    db.session.commit()