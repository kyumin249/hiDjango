from django.http import HttpResponse
from django.shortcuts import render


# Create your views here.
def index(request):
    if request.method =="GET":
        if request.GET == "Login":
            return render(request, "login.html")
        if request.GET == "About":
            context = info(request.POST)
            return render(request, "about.html", context)
        if request.GET == "diary":
            return render(request, "diary.html")
        if request.GET == "info":
            return render(request, "info.html")

def info(request):
    if request.method == "POST":
        myname = request.POST.get("myname")
        mydescription = request.POST.get("mydescription")
        email = request.POST.get("email")
        myhistory = request.POST.get("myhistory")
        return HttpResponse("my info is %s, %s, %s, %s.", myname, mydescription, email, myhistory)

