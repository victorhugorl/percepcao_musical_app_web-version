from django import forms
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth.models import User

class RegisterUser(UserCreationForm):
    username = forms.CharField(
        widget=forms.TextInput(
            attrs={
                'class':'form-control border-2',
            }
        ),
        label="Nome"
    )

    email = forms.CharField(
        widget=forms.EmailInput(
            attrs={
                'class':'form-control border-2',
            }
        ),
        label="Digite um email valido"
    )

    password1 = forms.CharField(
        widget=forms.PasswordInput(
            attrs={
                'class':'form-control border-2',
                'id':'passwordInput',
            }
        ),
        label="Digite uma senha"
    )

    password2 = forms.CharField(
        widget=forms.PasswordInput(
            attrs={
                'class':'form-control border-2',
                'id':'passwordInput',
            }
        ),
        label="Confirmar senha"
    )

    class Meta:
        model = User
        fields = ('username', 'email', 'password1', 'password2',)

    def clean_password2(self):
        cd = self.cleaned_data
        if cd['password'] != cd['password2']:
            raise forms.ValidationError('Senhas diferentes uma da outra')
        return cd['password2']
    
    def clean_email(self):
        email = self.cleaned_data.get('email')

        if User.objects.filter(email=email).exists():
            self.add_error('email',forms.ValidationError('Já existe esse email use outro', code='invalid'))

        return email

class LoginForm(AuthenticationForm):
    username = forms.CharField(
        widget=forms.TextInput(
            attrs={
                'class':'form-control border-2',
                'placeholder': 'Digite seu nome...'
            }
        ),
        required=True,
        min_length=3,
    )
    password = forms.CharField(
        label='Senha',
        widget=forms.PasswordInput(
            attrs={
                'class': 'form-control border-2',
                'id': 'passwordInput'
            }
        ),
        required=True,
        min_length=3,
    )

    class Meta:
        model = User
        fields = (
            'username', 'password'
        )
