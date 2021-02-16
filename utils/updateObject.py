import json
import uuid
import pprint
import time

data = json.load(open("../front-end/bnewmandotdev/src/data.json"))
working = data["skills"]

for elem in working:
    if elem["id"] == "":
        elem["id"] = uuid.uuid4().hex
        print("L1: " + elem["id"])
    l2s = elem["eg"]
    for l2elem in l2s:
        if l2elem["id"] == "":
            l2elem["id"] = uuid.uuid4().hex
            print("     L2: " + l2elem["id"])

working2 = data["plans"]

for elem in working2:
    if elem["id"] == "":
        elem["id"] = uuid.uuid4().hex
        print("PLANS ID: " + elem["id"])
    if elem["dateAdded"] == "":
        cTime = time.time_ns()
        elem["dateAdded"] = int(round(cTime / 1000000))
        print("PLANS DATE: " + str(elem["dateAdded"]))

working3 = data["projects"]

for elem in working3:
    if elem["id"] == "":
        elem["id"] = uuid.uuid4().hex
        print("PLANS ID: " + elem["id"])
    if elem["dateAdded"] == "":
        cTime = time.time_ns()
        elem["dateAdded"] = int(round(cTime / 1000000))
        print("PLANS DATE: " + str(elem["dateAdded"]))

confirm = input("Type 'Commit': ")
if confirm == "Commit":
    json.dump(data, open("../front-end/bnewmandotdev/src/data.json", "w"))
