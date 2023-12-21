# from django.db import models

# # Create your models here.


# class User(models.Model):
#     first_name = models.CharField(max_length=150)
#     last_name = models.CharField(max_length=150)
#     email = models.CharField(max_length=255)
#     password = models.CharField(max_length=255)
#     salt = models.CharField(max_length=255)
#     login = models.CharField(max_length=255)


# class Objetivo(models.Model):
#     TipoObjetivo = models.TextChoices('Nota', 'Acorde')
#     nome = models.CharField(max_length=255)
#     nome_arquivo = models.CharField(max_length=255)
#     tipo = models.CharField(max_length=255, choices=TipoObjetivo)


# class Jogo(models.Model):
#     jogador = models.ForeignKey(User, on_delete=models.CASCADE)
#     objetivo = models.ForeignKey(Objetivo)

# # eu queria salvar  a % do progresso, da parte do jogo
# # montar um gráfico com a pontuação que ele faz no dia
# # e os dias que o jogador jogou
# # só tem isso de salvar


# # UML
# #  isso eu entendi
# # encontra o usuario pelo email
# # bcrypt (senha informada + salt) == password
# #

# # Char 'a' VarChar 'nome' Text/TinyText
# # 1 - 1 (tudo na mesma tabela ou tabelas separadas)
# #  1 - N | N - 1 //
# # N - M | Post Categorias
# #
#     # é um aplicativo de percepção músical
