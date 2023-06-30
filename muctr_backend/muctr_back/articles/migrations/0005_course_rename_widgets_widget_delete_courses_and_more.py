# Generated by Django 4.2.2 on 2023-06-15 07:25

from django.db import migrations, models
import django_better_admin_arrayfield.models.fields


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0004_alter_courses_additional_scores'),
    ]

    operations = [
        migrations.CreateModel(
            name='Course',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(choices=[('Химическая технология', 'Химическая технология'), ('Техносферная безопасность', 'Техносферная безопасность'), ('Материаловедение и технологии материалов', 'Материаловедение и технологии материалов'), ('Технология художественной обработки материалов', 'Технология художественной обработки материалов'), ('Наноматериалы', 'Наноматериалы')], max_length=50)),
                ('programs', django_better_admin_arrayfield.models.fields.ArrayField(base_field=models.CharField(max_length=255), blank=True, null=True, size=None)),
                ('level', models.CharField(choices=[('бакалавриат', 'бакалавриат'), ('магистратура', 'магистратура')], max_length=15)),
                ('duration', models.CharField(choices=[('2', 2), ('4', 4), ('4.6', 4.6)], max_length=3)),
                ('language', models.CharField(default='русский', max_length=10)),
                ('type', models.CharField(choices=[('очная', 'очная'), ('заочная', 'заочная')], max_length=10)),
                ('students_number', models.JSONField()),
                ('fee', models.IntegerField()),
                ('doc_acceptance', django_better_admin_arrayfield.models.fields.ArrayField(base_field=models.DateField(blank=True, null=True), blank=True, null=True, size=None)),
                ('exam_days', models.DateField(blank=True, null=True)),
                ('appeal', models.DateField(blank=True, null=True)),
                ('admission_protocol', models.DateField(blank=True, null=True)),
                ('exam_scores', models.JSONField()),
                ('exam_desc', models.TextField(blank=True, null=True)),
                ('required_docs', django_better_admin_arrayfield.models.fields.ArrayField(base_field=models.CharField(max_length=255), blank=True, null=True, size=None)),
                ('address', models.CharField(default='Мирзо-Улугбекский район, ТТЗ-1, дом 47, ауд. 111.', max_length=150)),
                ('additional_scores', models.JSONField(default=dict)),
            ],
        ),
        migrations.RenameModel(
            old_name='Widgets',
            new_name='Widget',
        ),
        migrations.DeleteModel(
            name='Courses',
        ),
        migrations.AlterField(
            model_name='news',
            name='keywords',
            field=django_better_admin_arrayfield.models.fields.ArrayField(base_field=models.CharField(max_length=200), blank=True, null=True, size=None),
        ),
    ]
