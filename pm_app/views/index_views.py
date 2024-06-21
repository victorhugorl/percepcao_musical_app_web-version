from django.shortcuts import render

def index(request):
    context = {
        'title': 'Percepção Musical App'
    }
    return render(request, 'pm_app/index.html', context)

def main(request):
    context = {
        'title': 'Menu Principal - PMA'
    }

    return render(request, 'pm_app/main.html', context)