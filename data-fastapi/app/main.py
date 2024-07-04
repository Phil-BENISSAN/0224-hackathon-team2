import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import hackathon3_qcm_tech as qcm
import pandas as pd

app = FastAPI()

# ------- DATASETS IMPORTS -------------
softskills = pd.read_csv('softskilltest.csv')

# ------- CONFIGURATION CORS -------------
# Pour les tests, autorisez toutes les origines. Vous pouvez restreindre les origines plus tard si nécessaire.
origins = [
    "http://localhost:8080",
    # Vous pouvez ajouter d'autres origines si nécessaire
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# -------  INSERER VOTRE CODE ICI -----------------

@app.get('/')
def fn_fast_api():
    return {'div' : "t'as tout compris"}

@app.get('/softskills_test')
def fn_softskills():
    return softskills.to_dict(orient='index')

# ---------------- FIN DE TON CODE ----------------
#__________________________________________________

@app.get('/tech')
def return_tech_domaines():
    return list(qcm.domaines_dict.keys())

@app.get('/tech/{domaine}/{level}')
def return_tech_QCM(domaine, level):
    if domaine in qcm.domaines_dict.keys() and int(level) in [0, 1, 2]:
        return qcm.domaines_dict[domaine][int(level)]

if __name__ == '__main__':
    uvicorn.run(app, port=8000, host='0.0.0.0')
