from django.utils import timezone
from .models import *


class DbService:

    @staticmethod
    def insert_lead_history(lead_id, comments=""):
        data_to_insert = {
            "lead_id": lead_id,
            "comments": comments,
            "updated_at": timezone.now()
        }
        try:
            return LeadHistory.objects.create(**data_to_insert)
        except Exception as _exp:
            return (False, None)
