from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect

def index(request):

    if request.user.is_authenticated:
        return redirect('pm_app:main')
    
    context = {
        'title': 'Percepção Musical App'
    }
    return render(request, 'pm_app/index.html', context)


@login_required(login_url='pm_app:login')
def main(request):
    context = {
        'title': 'Menu Principal - PMA'
    }

    return render(request, 'pm_app/main.html', context)