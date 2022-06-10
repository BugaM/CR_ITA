from django.shortcuts import render
from django.http import HttpResponse

from dataset.ScriptsMongoDB import ScriptsMongoDB

# Create your views here.

def randomData(request):
      scripts = ScriptsMongoDB()
      doc = scripts.get_random(collection_name='disciplinas')
      nome = doc['nome']
      creditos = doc['creditos']
      sigla = doc['sigla']
      curso = doc['curso']
      return render(request, 'basic/test.html', {'nome' : nome, 'creditos': creditos,
                                                 'sigla' :sigla , 'curso' : curso})