# home_sigma
python3 -m pip install --user virtualenv | python -m pip install --user virtualenv
python3 -m venv env | python -m venv env
source env/bin/activate | env\Scripts\activate.bat
pip install django
pip install djangorestframework
python -m pip install django-cors-headers
python manage.py makemigrations 
python manage.py migrate  
python manage.py createsuperuser
python manage.py runserver

npm i
npm start
