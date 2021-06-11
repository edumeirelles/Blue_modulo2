from flask import Blueprint, render_template

bp = Blueprint('bp',__name__)

@bp.route('/')
def home():
    return '<h1>Hello Flask!<h1>'

@bp.route('/login/<nome>')
def login(nome=None):
    return '<center><h1>Olá, '+nome+'! <br />Faça seu Login!<h1></center>'

@bp.route('/auladeontem/')
def carrega():
    return render_template('index.html')

@bp.route('/clientes/')
def home2():
    return '<h1>Home Clientes<h1>'

@bp.route('/produtos/')
def home3():
    return '<h1>Home Produtos<h1>'

@bp.route('/contato/')
def home4():
    return '<h1>Home Contato<h1>'