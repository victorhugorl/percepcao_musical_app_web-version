from django.shortcuts import render

# Create your views here.


def home(request):

    return render(
        request,
        'pm_app/index.html'
    )


def login(request):

    return render(
        request,
        'pm_app/login.html'
    )


def main(request):

    return render(
        request,
        'pm_app/main.html'
    )


def game(request):

    return render(
        request,
        'pm_app/game.html'
    )
