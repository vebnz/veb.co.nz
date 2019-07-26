---
layout: post
title:  "Face Detection in images using OpenCV and Python"
date:   2011-09-11 09:12:23 +1300
categories: code
---
I hacked together this basic script to detect faces in images using OpenCV, Python, Web.py and ImageMagick. It’s a fun wee learning experience.

At the moment it tries to replace a face with an image. Some more tweaking, and it should be good to go. 

To run it:

```
python code.py 9000
```



```python
import web, sys, os, subprocess, uuid
from opencv.cv import *
from opencv.highgui import *
from shutil import copy
 
def detectObjects(image, imagefile):
  """Converts an image to grayscale and prints the locations of any
     faces found"""
  grayscale = cvCreateImage(cvSize(image.width, image.height), 8, 1)
  cvCvtColor(image, grayscale, CV_BGR2GRAY)
 
  storage = cvCreateMemStorage(0)
  cvClearMemStorage(storage)
  cvEqualizeHist(grayscale, grayscale)
  cascade = cvLoadHaarClassifierCascade(
    '/usr/share/doc/opencv-doc/examples/haarcascades/haarcascades/haarcascade_frontalface_default.xml.gz',
    cvSize(1,1))
  faces = cvHaarDetectObjects(grayscale, cascade, storage, 1.2, 2,
                             CV_HAAR_DO_CANNY_PRUNING, cvSize(50,50))
 
  if faces.total > 0:
    for f in faces:
        print("found a face: [(%d,%d) -> (%d,%d)]" % (f.x, f.y, f.x+f.width, f.y+f.height))
        foundFace(imagefile, f)
  return faces.total
 
def foundFace(imagefile, f):
    #os.system("convert {image} -stroke red -fill red -draw \"rectangle {a},{b} {c},{d}\" {output}".format(
    os.system("convert {image} -draw \"image SrcOver {a},{b} {c},{d} biglazer.png\" {output}".format(
                    image=imagefile,
                    a=f.x+6,
                    b=f.y,
                    c=f.width,
                    d=f.height,
                    output=imagefile));
 
urls = (
    '/upload', 'Upload',
)
 
class Upload:
    def GET(self):
        web.header("Content-Type","text/html; charset=utf-8")
        return """<html><head><link rel="shortcut icon" href="/static/favicon.ico"
type="image/x-icon"></head><body>
<form method="POST" enctype="multipart/form-data" action="">
<input type="file" name="myfile" />
<br/>
<input type="submit" />
</form>
</body></html>"""
    def POST(self):
        x = web.input(myfile={})
        filedir = '/home/mike/python/uploads' # change this to the directory you want to store the file in.
        if 'myfile' in x: # to check if the file-object is created
            filepath=x.myfile.filename.replace('\\','/') # replaces the windows-style slashes with linux ones.
            #filename=filepath.split('/')[-1] # splits the and chooses the last part (the filename with extension)
            filename = str(uuid.uuid4())
            fout = open(filedir +'/'+ filename,'w') # creates the file where the uploaded file should be stored
            fout.write(x.myfile.file.read()) # writes the uploaded file to the newly created file.
            fout.close() # closes the file, upload complete.
            # detect face
            imagefile = filedir +'/'+ filename;
            image = cvLoadImage(imagefile);
            unique_name = str(uuid.uuid4())
            output_path = '/home/mike/python/static/%s.png' % unique_name
            if (detectObjects(image, imagefile) > 0):
                copy(imagefile, output_path)
                web.redirect("static/%s.png" % unique_name)
            else:
                return """No face found."""
        raise web.seeother('/upload')
 
if __name__ == "__main__":
   app = web.application(urls, globals(), True)
   app.run()
```

There are some problems – it doesn’t like bitmap (*.BMP) nor cartoon type images. Here are some examples of images that worked:

![John Key](https://i.imgur.com/g2SpDS1.png)



![John Key Derp](https://i.imgur.com/pdwr7zI.png)