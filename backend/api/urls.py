from django.urls import path, include
from rest_framework import routers
from rest_framework.schemas import get_schema_view
from django.views.generic import TemplateView

from .views import CategoryViewSet, DishesViewSet, DishesCategory


router = routers.DefaultRouter()
router.register(r"categories", CategoryViewSet)
router.register(r"dishes", DishesViewSet)

urlpatterns = [
    path("", include(router.urls)),
    path("category/<int:pk>/", DishesCategory.as_view()),
    path(
        "openapi",
        get_schema_view(
            title="Culinary recipes", description="modul_F4_recipes"
        ),
        name="openapi-schema",
    ),
    path(
        "swagger-ui/",
        TemplateView.as_view(
            template_name="swagger-ui.html",
            extra_context={"schema_url": "openapi-schema"},
        ),
        name="swagger-ui",
    ),
]
