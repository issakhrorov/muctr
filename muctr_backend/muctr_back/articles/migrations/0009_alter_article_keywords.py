# Generated by Django 4.2.2 on 2023-06-20 06:32

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0008_alter_article_keywords_alter_course_doc_acceptance_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='article',
            name='keywords',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(blank=True, max_length=200, null=True), blank=True, default=[], size=10),
        ),
    ]
