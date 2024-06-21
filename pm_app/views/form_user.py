from django.shortcuts import render

def login(request):
    context = {
        'title': 'Login - PMA'
    }

    return render(request, 'pm_app/form_pages/login.html', context)

def register(request):
    context = {
        'title': 'Login - PMA'
    }

    return render(request, 'pm_app/form_pages/login.html', context)