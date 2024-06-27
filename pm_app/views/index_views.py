from pm_app.models import Profile
from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect, get_object_or_404

def index(request):

    if request.user.is_authenticated:
        return redirect('pm_app:main')
    
    context = {
        'title': 'Percepção Musical App'
    }
    return render(request, 'pm_app/index.html', context)


@login_required(login_url='pm_app:login')
def main(request):
    if request.method == "POST":
        profile = get_object_or_404(Profile, user=request.user)
        context = {
            'title': 'Menu Principal - PMA',
            'profile': profile,
            'data': 'data'
        }
        return render(request, 'pm_app/main.html', context)
    profile = get_object_or_404(Profile, user=request.user)
    context = {
        'title': 'Menu Principal - PMA',
        'profile': profile
    }

    return render(request, 'pm_app/main.html', context)