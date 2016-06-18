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
from aulas.views import Home

urlpatterns = [
    url(r'^admin/', admin.site.urls),

    url(r'^aula-01/$',
        TemplateView.as_view(template_name='aulas/aula-01/index.html'),
        name='aula-01-index'),
    url(r'^aula-01/bootstrap/$',
        TemplateView.as_view(template_name='aulas/aula-01/index-bootstrap.html'),
        name='aula-01-bootstrap'),

    url(r'^aula-02/example-js/$',
        TemplateView.as_view(template_name='aulas/aula-02/example-1-js.html'),
        name='aula-02-example-1-js'),
    url(r'^aula-02/example-2-js/$',
        TemplateView.as_view(template_name='aulas/aula-02/example-2-js.html'),
        name='aula-02-example-2-js'),
    url(r'^aula-02/example-3-js/$',
        TemplateView.as_view(template_name='aulas/aula-02/example-3-js.html'),
        name='aula-02-example-3-js'),
    url(r'^aula-02/example-4-js/$',
        TemplateView.as_view(template_name='aulas/aula-02/example-4-js.html'),
        name='aula-02-example-4-js'),
    url(r'^aula-02/commands/$',
        TemplateView.as_view(template_name='aulas/aula-02/commands.html'),
        name='aula-02-commands'),
    url(r'^aula-02/debug-js/$',
        TemplateView.as_view(template_name='aulas/aula-02/debug-js.html'),
        name='aula-02-debug-js'),
    url(r'^aula-02/exercises/$',
        TemplateView.as_view(template_name='aulas/aula-02/exercises.html'),
        name='aula-02-exercises'),

    url(r'^aula-03/$',
        TemplateView.as_view(template_name='aulas/aula-03/index.html'),
        name='aula-03-index'),
    url(r'^aula-03/search$',
        TemplateView.as_view(template_name='aulas/aula-03/search.html'),
        name='aula-03-search'),
    url(r'^aula-03/date$',
        TemplateView.as_view(template_name='aulas/aula-03/date.html'),
        name='aula-03-date'),
    url(r'^aula-03/calculator-dates$',
        TemplateView.as_view(template_name='aulas/aula-03/calculator-dates.html'),
        name='aula-03-calculator-dates'),
    url(r'^aula-03/objects$',
        TemplateView.as_view(template_name='aulas/aula-03/objects.html'),
        name='aula-03-objects'),

    url(r'^aula-04/events$',
        TemplateView.as_view(template_name='aulas/aula-04/events.html'),
        name='aula-04-events'),
    url(r'^aula-04/clinic$',
        TemplateView.as_view(template_name='aulas/aula-04/clinic.html'),
        name='aula-04-clinic'),
    url(r'^aula-04/window-actions$',
        TemplateView.as_view(template_name='aulas/aula-04/window-actions.html'),
        name='aula-04-window-actions'),
    url(r'^aula-04/scrolling$',
        TemplateView.as_view(template_name='aulas/aula-04/scrolling.html'),
        name='aula-04-scrolling'),
    url(r'^aula-04/cookies$',
        TemplateView.as_view(template_name='aulas/aula-04/cookies.html'),
        name='aula-04-cookies'),

    url(r'aula-05/window/',
        TemplateView.as_view(template_name='aulas/aula-05/window.html'),
        name='aula-05-window'),
    url(r'aula-05/window-new-page/',
        TemplateView.as_view(template_name='aulas/aula-05/new-page.html'),
        name='aula-05-new-page'),
    url(r'aula-05/local-storage/',
        TemplateView.as_view(template_name='aulas/aula-05/local-storage.html'),
        name='aula-05-local-storage'),
    url(r'aula-05/jquery/',
        TemplateView.as_view(template_name='aulas/aula-05/jquery.html'),
        name='aula-05-jquery'),
    url(r'aula-05/jquery-gallery/',
        TemplateView.as_view(template_name='aulas/aula-05/jquery-gallery.html'),
        name='aula-05-jquery-gallery'),

    url(r'^$', Home.as_view(), name='index'),
]
