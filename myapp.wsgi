import os
import sys

from django.core.wsgi import get_wsgi_application

# Add your project directory to the sys.path
sys.path.append('/home/ubuntu/home_sigma')
sys.path.append('/home/ubuntu/home_sigma/home_sigma')

# Set the settings module
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'home_sigma.settings')

# Get the WSGI application for Django
application = get_wsgi_application()

