import pandas as pd
from pymongo import InsertOne
from ScriptsMongoDB import ScriptsMongoDB

db = pd.read_excel('dataset/database.xlsx')
db = db.reset_index()
scripts_mongo = ScriptsMongoDB()
scripts_mongo.delete_elements_from_collection(collection_name='eletivas')
col = scripts_mongo.db['eletivas']
c = db.values.tolist()
eletivas = []
for _, row in db.iterrows():
      json = {
            'sigla': row['Sigla'],
            'creditos': row['Creditos'],
            'nome' : row['Nome'],
            'curso' : row['Tipo']

      }
      eletivas.append(InsertOne(json))
col.bulk_write(eletivas)