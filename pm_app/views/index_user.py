from django.shortcuts import render
from django.contrib.auth.decorators import login_required

@login_required(login_url='pm_app:login')
def user_view(request, name_user):
    context = {
        'title': f'{name_user} - PMA'
    }
    return render(request, 'pm_app/pages/user_page/profile.html', context)