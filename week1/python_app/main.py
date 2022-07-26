# Python application to read data from a JSON file, print all keys with their values multipled by 10 

import json
from Subject import Subject

#create empty array object
grades = []

print("Start reading JSON file...")
#open JSON file
openFile = open('data.json')

#store json data to variable
data = json.load(openFile)

openFile.close

#save data to array
for i in data['Grades']:
    grades.append(Subject(i['id'], i['name'], i['score']))
      

#print the result with the score multiply by 10
for item in grades:
    print(str(item.id) +" | " +"Name: "+ item.name +" " +"Score: "+ str(item.score * 10))
    print("----------------------------")


