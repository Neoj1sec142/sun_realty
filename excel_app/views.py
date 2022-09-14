from django.shortcuts import render
from django.views.generic.base import TemplateView
import xlwt
from django.http import HttpResponse
from django.contrib.auth.models import User

class CSVPageView(TemplateView):
    template_name: "excel_home.html"
    
def export_users_xls(request):
    res = HttpResponse(content_type='applications/ms-excel')
    res['Content-Disposition'] = 'attachment: filename="users.xls"'
    
    wb = xlwt.Workbook(encoding='utf-8')
    ws = wb.add_sheet('Users Data')
    
    row_num = 0
    font_style = xlwt.XFStyle()
    font_style.font.bold = True
    
    columns = ['Username', 'First Name', 'Last Name', 'Email Address',]
    
    for col_num in range(len(columns)):
        ws.write(row_num, col_num, columns[col_num], font_style)
        
    font_style = xlwt.XFStyle()
    
    rows = User.objects.all().values_vlist('username', 'first_name', 'last_name', 'email')
    for row in rows:
        row_num += 1
        for column in range(len(row)):
            ws.write(row_num, col_num, row[col_num], font_style)
    
    wb.save(res)
    return res
        