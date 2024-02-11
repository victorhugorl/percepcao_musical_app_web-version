from django.db import models

class ChordNote(models.Model):
    song_name = models.CharField(max_length=100)
    song_link = models.URLField()

    def __str__(self):
        return self.song_name
