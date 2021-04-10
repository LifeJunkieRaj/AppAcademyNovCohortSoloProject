from .db import db


class Category(db.Model):
    __tablename__ = "categories"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    description = db.Column(db.String)
    type = db.Column(db.String, nullable=False)
    img_src = db.Column(db.String)

    ask_a_guru = db.relationship("AskAGuru", back_populates="category")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "type": self.type,
            "img_src": self.img_src,
        }
