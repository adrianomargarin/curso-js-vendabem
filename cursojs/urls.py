"""cursojs URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.9/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
from django.views.generic import TemplateView


urlpatterns = [
    url(r'^admin/', admin.site.urls),

    url(r'^aula-01/$', TemplateView.as_view(template_name="aulas/index.html"),
        name='aula-01'),
    url(r'^aula-01/bootstrap$',
        TemplateView.as_view(template_name="aulas/index-bootstrap.html"),
        name='aula-01-bootstrap'),

    url(r'^aula-02/example-js$',
        TemplateView.as_view(template_name="aulas/example-js.html"),
        name='example-1-js'),
    url(r'^aula-02/example-2-js$',
        TemplateView.as_view(template_name="aulas/example-2-js.html"),
        name='example-2-js'),
    url(r'^aula-02/example-3-js$',
        TemplateView.as_view(template_name="aulas/example-3-js.html"),
        name='example-3-js'),
    url(r'^aula-02/example-4-js$',
        TemplateView.as_view(template_name="aulas/example-4-js.html"),
        name='example-4-js'),
    url(r'^aula-02/commands$',
        TemplateView.as_view(template_name="aulas/commands.html"),
        name='commands'),
    url(r'^aula-02/debug-js$',
        TemplateView.as_view(template_name="aulas/debug-js.html"),
        name='debug-js'),
    url(r'^aula-02/exercises$',
        TemplateView.as_view(template_name="aulas/exercises.html"),
        name='exercises'),

    url(r'^$', TemplateView.as_view(template_name="index.html"),
        name='index'),
]
