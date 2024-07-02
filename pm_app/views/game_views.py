from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from utils import make

notes = ['A','B','C','D','E','F','G', 'Bb','Db','Eb','Gb','Ab'] # precisa enviar isso de acordo com o tipo de jogo


@login_required(login_url='pm_app:login')
def game(request):
    # verificar o tipo de jogo que ele tem 

    data = make.make_object_songs(notes) # o date está mandando um array para o javascript
    dados, audio = data
    # enviar os links necessários para o devido treinamento 
    context = {
        'title': 'Treinamento',
        'questions': dados,
        'audio': audio,
        
    }
    return render(request, 'pm_app/pages/game_page/game.html', context)




