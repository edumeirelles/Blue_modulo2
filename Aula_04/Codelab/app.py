from random import randint
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    nome = 'Albert Einstein'
    idade = 50
    cidade = 'Ulm - Alemanha'
    imagem1 = '/static/einstein1.jpg'
    imagem2 = '/static/einstein2.jpg'
    imagem3 = '/static/einstein3.jpg'
    rand = randint(1,3)
    if rand == 1:
        estado = 'doido'
    elif rand == 2:
        estado = 'pensativo'
    else:
        estado = 'pitando'
    
    return render_template('index.html', nome = nome, idade = idade, cidade = cidade, imagem1 = imagem1, imagem2 = imagem2, imagem3 = imagem3, estado = estado)

if (__name__ == '__main__'):
    app.run(debug=True)