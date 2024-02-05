from django.shortcuts import render, HttpResponse

# Create your views here.

# TODAS A VIES TEM INDEX KK

def home(request):

    context = {
        'title': 'Home'
    }

    return render(
        request,
        'pm_app/index.html', # Esse caminho aqui
        context,
    )


def login(request):

    context = {
        'title': 'Login'
    }

    return render(
        request,
        'pm_app/index.html',
        context,
    )


def main(request):

    context = {
        'title': 'Menu Principal'
    }

    return render(
        request,
        'pm_app/index.html',
        context
    )

def game(request):

    context = {
        'title': 'Treinamento'
    }

    return render(
        request,
        'pm_app/index.html',
        context
    )

def make_object_notes(request):
    import random
    import json

    notes = ['A','B','C','D','E','F','G', 'A#','C#','D#','F#','G#']

    note_list = []
    
    for n in range(1,5):
        note = random.choice(notes)

        while (note in note_list):
            note = random.choice(notes)
        
        note_list.append(note)

    obj_list = []
    for note in note_list:
        obj_list.append({
            'name': note,
            'correct': False,
        })
    
    # escolhendo uma nota para ser a verdadeira
    obj_list[random.randint(0,len(obj_list)-1)]['correct'] = True 
    dados = json.dumps(obj_list, indent=2, ensure_ascii=False)

    print(dados)
    return HttpResponse(dados)

