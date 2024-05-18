# home_sigma
python3 -m pip install --user virtualenv
python3 -m venv env
source env/bin/activate
pip install django
pip install djangorestframework
python -m pip install django-cors-headers
python manage.py makemigrations 
python manage.py migrate  
python manage.py runserver
