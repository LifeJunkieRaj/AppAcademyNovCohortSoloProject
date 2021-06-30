from flask.cli import AppGroup
from .users import seed_users, undo_users, seed_second_user
from .ask_a_guru import seed_ask_a_guru, undo_ask_a_guru
from .categories import seed_categories, undo_categories
from .responses import seed_responses, undo_responses
from .comments import seed_comments, undo_comments
from .votes import seed_votes, undo_votes

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_second_user()
    seed_categories()
    seed_ask_a_guru()
    seed_responses()
    seed_comments()
    seed_votes()


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_votes()
    undo_comments()
    undo_responses()
    undo_ask_a_guru()
    undo_categories()
    undo_users()


# Add other undo functions here
