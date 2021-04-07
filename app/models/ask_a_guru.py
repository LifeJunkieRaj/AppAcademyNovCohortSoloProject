from .db import db


class AskAGuru (db.Model):
    __tablename__ = "ask_a_guru"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    category_id = db.Column(db.Integer, db.ForeignKey("categories.id"), nullable=False)
    rating = db.Column(db.Integer, default=0)
    question = db.Column(db.String(1000), nullable=False)
    img_src = db.Column(db.String)
    created_at = db.Column(db.Date)

    user = db.relationship("User", back_populates="ask_a_guru")
    category = db.relationship("Category", back_populates="ask_a_guru")
    comments = db.relationship("Comment", back_populates="ask_a_guru",
                               cascade="all, delete-orphan")
    responses = db.relationship("Response", back_populates="ask_a_guru",
                                cascade="all, delete-orphan")

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "category_id": self.category_id,
            "rating": self.rating,
            "question": self.question,
            "img_src": self.img_src,
            "created_at": self.created_at,
            "user": self.user.to_dict(),
            "category": self.category.to_simple_dict(), 
            "comment": [comment.to_dict() for comment in self.comments],
            "response": [response.to_dict() for response in self.responses]

        }

    def to_simple_dict(self):
        return {
            "id":self.id,
            "user_id": self.user_id,
            "category_id": self.category_id,
            "rating": self.rating,
            "question": self.question,
            "img_src": self.img_src,
            "created_at": self.created_at,
            "user": self.user.to_dict(),
            "category": self.category.to_dict(), 
            "comments": [comment.to_dict() for comment in self.comments],
            "responses": [response.to_dict() for response in self.responses]
        }

    def get_rating(self): 
        return self.rating

    def get_comments_responses(self): 
        return {
            "comments": [comment.to_dict() for comment in self.comments],
            "responses": [response.to_dict() for response in self.responses]
        }
