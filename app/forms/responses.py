from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired


class ResponseForm(FlaskForm):
    text_body = StringField("text_body", validators=[DataRequired()])