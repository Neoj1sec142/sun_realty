import os
from django.conf import settings
from rest_framework.views import APIView
from rest_framework.response import Response

class MediaView(APIView):
    def get(self, request):
        media_root = settings.MEDIA_ROOT
        response_data = self.get_folder_structure(media_root)
        return Response(response_data)
    
    def get_folder_structure(self, folder_path):
        result = {'name': os.path.basename(folder_path)}
        if os.path.isdir(folder_path):
            result['type'] = 'directory'
            result['children'] = [self.get_folder_structure(os.path.join(folder_path, child)) for child in os.listdir(folder_path)]
        else:
            result['type'] = 'file'
        return result

