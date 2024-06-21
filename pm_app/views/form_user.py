from django.shortcuts import render

def user_view(request, name_user):
    context = {
        'title': f'{name_user} - PMA'
    }
    return render(request, 'pm_app/pages/user_page/profile.html', context)

def login(request):
    context = {
        'title': 'Login - PMA'
    }

    return render(request, 'pm_app/pages/form_pages/login.html', context)

def register(request):
    context = {
        'title': 'Registrar - PMA'
    }

    return render(request, 'pm_app/pages/form_pages/register.html', context)