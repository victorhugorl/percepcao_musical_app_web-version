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

        correct_aswners = request.POST.get('acertos', '').strip()
        time = request.POST.get('time', '').strip()
        
        context = {
            'title': 'Menu Principal - PMA',
            'profile': profile,
            'data': {
                'time': time,
                'corrects': correct_aswners
            }
        }
        return render(request, 'pm_app/main.html', context)
    # depois e so ajeitar o back ou model profile
    profile = get_object_or_404(Profile, user=request.user)
    context = {
        'title': 'Menu Principal - PMA',
        'profile': profile,
        'data': {
            'time': '00:00:00',
            'corrects': 0
        }
    }

    return render(request, 'pm_app/main.html', context)