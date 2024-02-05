from django.shortcuts import render, HttpResponse

# Create your views here.

# TODAS A VIES TEM INDEX KK

def index(request):

    return render(
        request,
        'pm_app/index.html', # Esse caminho aqui
    )

def register(request):

    return HttpResponse('formulário de cadastro')
