# Generated by Django 3.2.7 on 2021-10-10 13:44

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('shopping', '0003_cashdue'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='cashdue',
            options={'verbose_name': 'Cash Due', 'verbose_name_plural': 'Cash Dues'},
        ),
        migrations.AlterModelOptions(
            name='shoppingitem',
            options={'verbose_name': 'Shopping Item', 'verbose_name_plural': 'Shopping Items'},
        ),
    ]