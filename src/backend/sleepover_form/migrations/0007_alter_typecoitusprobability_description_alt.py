# Generated by Django 3.2.7 on 2021-09-28 11:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sleepover_form', '0006_typecoitusprobability_description_alt'),
    ]

    operations = [
        migrations.AlterField(
            model_name='typecoitusprobability',
            name='description_alt',
            field=models.CharField(max_length=255, verbose_name='Alternative description'),
        ),
    ]