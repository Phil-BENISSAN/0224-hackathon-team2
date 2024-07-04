import uvicorn
from fastapi import FastAPI
import pandas as pd

app = FastAPI()

# ------- DATASETS IMPORTS -------------

softskills = pd.read_csv('softskilltest.csv')

# -------  INSERER VOTRE CODE ICI -----------------

@app.get('/')
def fn_fast_api():

    return {'div' : "t'as tout compris"}


@app.get('/softskills_test')
def fn_softskills():
    
    return softskills.to_dict(orient='index')
    

# ---------------- FIN DE TON CODE ----------------
#__________________________________________________

if __name__ == '__main__':
    uvicorn.run(app, port=8000, host='0.0.0.0')