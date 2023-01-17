from django.db import models

# Create your models here.
class Chats(models.Model):
    name = models.CharField(max_length=120)

    def __str__(self):
      return str(self.name)
 
    def get_messages(self):
       return self.message