from django.shortcuts import render

def login(request):
    context = {
        'title': 'Login - PMA'
    }

    return render(request, 'pm_app/login.html', context)

def register(request):
    context = {
        'title': 'Login - PMA'
    }

    return render(request, 'pm_app/login.html', context)