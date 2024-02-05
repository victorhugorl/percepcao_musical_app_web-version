from django.shortcuts import render, HttpResponse

# Create your views here.


def index(request):

    return render(
        request,
        'pm_app/index.html', # Esse caminho aqui
    )

def register(request):

    return HttpResponse(request,'formulário de cadastro')