# -*- coding: utf-8 -*-

def get_urls(request):
    import cursojs.urls as project_urls

    context = {}

    urls = project_urls.urlpatterns.copy()
    urls.pop(0)
    urls = [url.name for url in urls]

    context['urls'] = urls

    return context