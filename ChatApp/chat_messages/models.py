from django.db import models
from chats.models import Chats
# Create your models here.


class ChatMessage(models.Model):
    chat = models.ForeignKey(Chats,on_delete=models.CASCADE,related_name="message")
    nick = models.CharField(max_length=120)
    text =models.TextField()


    def __str__(self):
        return f"{self.chat.name}-{self.nick}"
    

