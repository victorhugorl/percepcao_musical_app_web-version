# Aplicativo de Percepção Musical
## Este é um aplicativo web desenvolvido em Django para testar e melhorar a percepção musical dos usuários.

# O que é percepção musical ?
Percepção musical é a habilidade de ao escutar a música, entender o sentido da música, conseguir identificar quais foram os acordes da música, identificar tonalidade (as notas que compõe a música),
saber tocar a música somente ao ouvir, e saber tocar ela com qualquer pessoa cantando, ou conseguir tocar a melodia (voz do cantor) no instrumento próprio. Isto é de grande ajuda para músicos que tocam em alta rotatividade (músicos que não são fixos), ajuda a tocar várias músicas de forma mais descomplicada como também em assuntos mais avançados como rearmonização, notas dissonantes entre outros.

# Qual é o objetivo do aplicativo ?

O objetivo do aplicativo é melhorar a capacidade do usuário de "escutar músicas" aumentando a conciência de muitos detalhes que as pessoas não percebem ao ouvir músicas, sendo uma grande ferramenta para músicos se desenvolverem melhor, e aprimorarem-se no seu instrumento. Este aplicativo é de grande ajuda para músicos profissionais e amadores que desejam melhorar sua percepção músical

# Funcionalidades Principais

## Exercícios de Percepção Musical:
O aplicativo oferece exercícios interativos para identificar notas, acordes, escalas, entre outros elementos musicais.
## Sistema de Pontuação: 
A pontuação é atribuída aos usuários com base na precisão das respostas dadas nos exercícios.
Autenticação de Usuários: Os usuários podem criar contas pessoais, fazer login e salvar seu progresso.
## Interface Amigável: 
Design responsivo e intuitivo para facilitar a experiência do usuário.

# Instalação e Uso

## requisitos:
* É necessário que você tenha python instalado assim como node para poder prosseguir

### Clonar o Repositório:
```shell
git clone
```
### Abra o repositório na raiz:
```shell
cd percepcao_musical_app_web-version
```
### Crie um ambiente virtual:
* no linux:

```shell
python3 -m venv venv
```
* Windows:

```shell
python -m venv venv
```
### ative o ambiente virtual:
* no linux:

```shell
source venv/bin/activate
```
* Windows:

```shell
./venv/Scripts/activate
```
### instale as dependências de python
```shell
pip install -r requirements.txt
```
### instale as dependências do Node:
```shell
npm i
```
## Uso do servidor local:

### incie primeiro o servidor Django:
*linux:

```shell
python3 manage.py runserver
```
*windows:
```shell
python manage.py runserver
```
### Inicie o servidor Vite em outro terminal :
```shell
npm run dev
```

* Os dois servidores precisam estar rodando localmente para que o Vite possa servir os arquivos estáticos para o Django
### entre na porta 8000 do servidor local para abrir a aplicação:
```shell
http://localhost:8000
```


# Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

# Autor
Victor Hugo Rangel Lima

Daniel tenório
