from multiprocessing import context
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse
from .models import Post 
from django.http import JsonResponse
import json
from django.core import serializers


# Create your views here.

@csrf_exempt
def bloghome(request):
    allPosts = Post.objects.filter(status='Approved').order_by('-timeStamp')
    
    print(allPosts)
    data = serializers.serialize(allPosts)
    print(data)
    return HttpResponse(allPosts, content_type="application/json")

@csrf_exempt
def blogPost(request): 
    post = Post.objects.first() 
    context = {'post' : post}    
    return render(request,'blog/blogpost.html',context)



