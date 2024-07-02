from django.shortcuts import render, redirect
from django.contrib import auth
from pm_app.forms import LoginForm, RegisterUser
from django.contrib.auth.decorators import login_required

def login(request):
    form = LoginForm(request)

    if request.method == "POST":
        form = LoginForm(request, data=request.POST)

        if form.is_valid():
            user = form.get_user()
            auth.login(request, user)
            return redirect('pm_app:profile', name_user=user.username)

    context = {
        'title': 'Login',
        'form': form,
        'title_form': 'Login',
        'btn_message': 'Logar'
    }   
    return render(request, 'pm_app/pages/form_pages/login.html', context)

def register(request):
    form = RegisterUser()

    if request.method == 'POST':
        form = RegisterUser(request.POST)

        if form.is_valid():
            form.save()
            return redirect('pm_app:login')

    context = {
        'title': 'Registrar',
        'form': form,
        'title_form': 'Registrar',
        'btn_message': 'Criar'
    }   

    return render(request, 'pm_app/pages/form_pages/register.html', context)

@login_required(login_url='pm_app:home')
def logout_view(request):
    auth.logout(request)
    return redirect('pm_app:login')