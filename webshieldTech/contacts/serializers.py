from rest_framework import serializers
from .models import Contact

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = '__all__'

    def validate_first_name(self, value):
        if len(value) < 3:
            raise serializers.ValidationError("First name must be at least 3 characters long.")
        return value

    def validate_last_name(self, value):
        if len(value) < 3:
            raise serializers.ValidationError("Last name must be at least 3 characters long.")
        return value

    def validate_phone_number(self, value):
        if not value.isdigit():
            raise serializers.ValidationError("Phone number must contain only digits.")
        if len(value) < 10:
            raise serializers.ValidationError("Phone number must be at least 10 digits long.")
        return value

    def validate_message(self, value):
        if len(value) < 100:
            raise serializers.ValidationError("Message must be at least 100 characters long.")
        return value
