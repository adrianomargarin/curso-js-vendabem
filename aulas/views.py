
from django.views.generic.base import TemplateView


class Home(TemplateView):

    template_name = "index.html"

    def get_context_data(self, **kwargs):
        import cursojs.urls as project_urls

        context = super(Home, self).get_context_data(**kwargs)

        urls = project_urls.urlpatterns.copy()
        urls.pop(0)
        urls = [url.name for url in urls]

        context['urls'] = urls

        return context
