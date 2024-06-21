from django.shortcuts import render

from utils import make


def game(request):

    data = make.make_object_songs() # o date está mandando um array para o javascript

  
    
    # verificar o tipo de jogo que ele tem 

    # executar o make_object_songs

    # mandar um array de objetos no context para mandar os dados necessários

    # enviar os links necessários para o devido treinamento 

    context = {
        'title': 'Treinamento',
        'questions': data
        
    }
    return render(request, 'pm_app/game_page/game.html', context)




