from .db import db


class Comment(db.Model):
    __tablename__ = "comments"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    ask_a_guru_id = db.Column(db.Integer, db.ForeignKey("ask_a_guru.id"), nullable=False)
    comment = db.Column(db.String(500), nullable=False)

    user = db.relationship("User", back_populates="comments")
    votes = db.relationship("Vote", back_populates="comment")
    ask_a_guru = db.relationship("AskAGuru", back_populates="comments")
    
    def to_dict(self):
        return {
            "id": self.id,
            "ask_a_guru_id": self.ask_a_guru_id,
            "comment": self.comment,
            "user_id": self.user_id,
            "username": self.user.username,
            'guru': self.user.guru
        }
