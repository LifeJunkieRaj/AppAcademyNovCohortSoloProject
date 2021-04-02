from .db import db


class Vote(db.Model):
    __tablename__ = "votes"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    comment_id = db.Column(db.Integer, db.ForeignKey("comments.id"), nullable=False)
    vote = db.Column(db.Boolean, nullable=False)

    comment = db.relationship("Comment", back_populates="votes")
    user = db.relationship("User", back_populates="votes")

    def to_dict(self):
        return {
            "id": self.aid,
            "user_id": self.user_id,
            "comment": self.comment,
            "vote": self.vote
        }
