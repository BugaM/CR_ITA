# CR_ITA

## Link do website

https://crita.herokuapp.com

## Configurando ambiente python

Antes de usar o ambiente, crie um ambiente virtual. Recomendo o [virtualenv](https://pypi.org/project/virtualenv/).

```shell
pip install virtualenv
```

Para criar o ambiente virtual, execute:

```shell
virtualenv venv
```

Para ativar o ambiente virtual, use:

```shell
source venv/bin/activate
```

Uma vez ativado o ambiente virtual, instale os pacotes:

```shell
pip install -r requirements.txt
```

Sempre que for instalado um novo pacote é nesse arquivo que será colocado as mudanças.

## Usando o MongoDB

Para visualizar localmente os dados, pode-se utilizar o [MongoDB Compass](https://www.mongodb.com/pt-br/products/compass). Para se conectar ao banco, use a URI:
```
mongodb+srv://alienX:alienx208@crita.qogmy.mongodb.net/test
```

## Instalando os pacotes 

O comando `npm install` na pasta front baixa os pacotes necessários para o front-end.

## Realizando a build

O comando `npm run build` na raiz realiza a build do front-end.

## Usando o django

O comando `python manage.py runserver` executa o servidor Django.

