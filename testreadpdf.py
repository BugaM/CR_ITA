import gradereportreader
from dataset.ScriptsMongoDB import ScriptsMongoDB


path = "test_pdfs/test_ney.pdf"
grades = gradereportreader.GradeReportReader(path).get_grades()
scripts = ScriptsMongoDB()
total_creditos = 0
total_eletivas = 0


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

x = 3
