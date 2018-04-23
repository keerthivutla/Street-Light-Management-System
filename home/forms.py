from django import forms

from .models import Complaint

class ComplaintForm(forms.ModelForm):

    class Meta:
        model = Complaint
        # fields = ('Light_Number', 'Phone_Number','Location')
        fields = ('Light_Number','Location',)