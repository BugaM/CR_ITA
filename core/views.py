from django.shortcuts import render
from django.http import HttpResponse
from core.serializer import DataSerializer
from .models import Data

from dataset.ScriptsMongoDB import ScriptsMongoDB

from gradereportreader import GradeReportReader
from rest_framework import viewsets
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

def get_cr(request):
      scripts = ScriptsMongoDB()
      path = "test_pdfs/test_buga.pdf"
      reader = GradeReportReader(path)
      grades = reader.get_grades()
      scripts = ScriptsMongoDB()
      total_creditos = 0
      total_eletivas = 0
      prof = reader.get_prof()


      sum_creditos = 0

      not_identified = []
      media_simples = grades['grade'].mean()
      for _, grade in grades.iterrows():
            sigla = grade['courses']
            data = scripts.get_data_find_one(collection_name='disciplinas', filter={'sigla': sigla})
            if data:
                  total_creditos += data['creditos']
                  sum_creditos += data['creditos']*grade['grade']
                  if 'ELETIVA' in data['curso']:
                        total_eletivas += data['creditos']
            else:
                  not_identified.append(sigla)
      cr = sum_creditos/total_creditos
      return render(request, 'cr/test.html', {'cr' : cr, 'media_simples': media_simples,
                                                 'curso' : prof, 'creditos' : total_eletivas})      

class DataViewSet(viewsets.ModelViewSet):
      serializer_class = DataSerializer
      queryset = Data.objects.all()                  