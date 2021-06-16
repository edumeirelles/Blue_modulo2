from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/', methods = ('GET','POST'))

def index():
    nome = None
    sobrenome = None
    criatura = None
    imagem = None

    if request.method == 'POST':
        nome = request.form['nome']
        sobrenome = request.form['sobrenome']
        criatura = request.form['criatura']

        if criatura == 'elfo':
            imagem = '/static/elfo.jpg'
        elif criatura == 'orc':
            imagem = '/static/orc.jpg'
        elif criatura == 'hobbit':
            imagem = '/static/hobbit.jpg'
        else:
            imagem = None

    return render_template('index.html', nome = nome, sobrenome = sobrenome, criatura = criatura, imagem = imagem)

if (__name__) == ('__main__'):
    app.run(debug=True)