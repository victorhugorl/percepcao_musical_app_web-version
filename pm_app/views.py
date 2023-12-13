from django.shortcuts import render

# Create your views here.


def home(request):

    context = {
        'title': 'Home'
    }

    return render(
        request,
        'pm_app/index.html',
        context,
    )


def login(request):

    context = {
        'title': 'Login'
    }

    return render(
        request,
        'pm_app/login.html',
        context,
    )


def main(request):

    context = {
        'title': 'Menu Principal'
    }

    return render(
        request,
        'pm_app/main.html',
        context
    )


def game(request):

    context = {
        'title': 'Treinamento'
    }

    return render(
        request,
        'pm_app/game.html',
        context
    )
