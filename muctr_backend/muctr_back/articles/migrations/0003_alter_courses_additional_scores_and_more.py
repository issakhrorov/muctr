# Generated by Django 4.2.2 on 2023-06-15 07:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0002_alter_article_keywords_alter_courses_doc_acceptance_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='courses',
            name='additional_scores',
            field=models.JSONField(),
        ),
        migrations.AlterField(
            model_name='courses',
            name='exam_scores',
            field=models.JSONField(),
        ),
        migrations.AlterField(
            model_name='courses',
            name='students_number',
            field=models.JSONField(),
        ),
    ]
