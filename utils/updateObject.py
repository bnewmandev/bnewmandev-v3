import json
import uuid
import pprint
import time

data = json.load(open("../front-end/bnewmandotdev/src/data.json"))
working = data["skills"]

for elem in working:
    if elem["id"] == "":
        elem["id"] = uuid.uuid4().hex
    l2s = elem["eg"]
    for l2elem in l2s:
        if l2elem["id"] == "":
            l2elem["id"] = uuid.uuid4().hex

confirm = input("Type 'Commit': ")
if confirm == "Commit":
    json.dump(data, open("../front-end/bnewmandotdev/src/data.json", "w"))