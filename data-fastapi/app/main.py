import uvicorn
from fastapi import FastAPI
import hackathon3_qcm_tech as qcm

app = FastAPI()

@app.get('/')
def fn_fast_api():

# -------  INSERER VOTRE CODE ICI -----------------

    return {'div' : "t'as tout compris"}


# ---------------- FIN DE TON CODE ----------------
#__________________________________________________

@app.get('/tech')
def return_tech_QCM():
    return qcm.Machine_Learning_1


if __name__ == '__main__':
    uvicorn.run(app, port=8000, host='0.0.0.0')