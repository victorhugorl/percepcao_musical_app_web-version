from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from utils import make

notes = ['A','B','C','D','E','F','G', 'A#','C#','D#','F#','G#'] # precisa enviar isso de acordo com o tipo de jogo


@login_required(login_url='pm_app:login')
def game(request):

    data = make.make_object_songs(notes) # o date está mandando um array para o javascript

  
    
    # verificar o tipo de jogo que ele tem 

    # executar o make_object_songs

    # mandar um array de objetos no context para mandar os dados necessários

    # enviar os links necessários para o devido treinamento 

    context = {
        'title': 'Treinamento',
        'questions': data
        
    }
    return render(request, 'pm_app/pages/game_page/game.html', context)




