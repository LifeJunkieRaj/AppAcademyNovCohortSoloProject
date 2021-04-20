from flask_wtf import FlaskForm
from wtforms import StringField, SelectField
from wtforms.validators import DataRequired, Email, ValidationError


class AskAGuruForm(FlaskForm):
    text_body = StringField("text_body", validators=[DataRequired()])
    category = SelectField("category", choices=[i for i in range(1,11)], coerce=int)
    