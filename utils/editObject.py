import json
import uuid
import pprint
import time

dict = json.load(open("../front-end/bnewmandotdev/src/data.json"))

while True:
    selection = int(
        input(
            """
    1) My Skills
    2) Currently Learning
    3) My Plans
    4) My Projects
    5) SAVE
    6) Exit
    Selection: """
        )
    )

    if selection == 1:

        obj = {
            "title": input("Title: "),
            "image": input("Image Source: "),
            "body": input("Tag Line: "),
            "link": input("Link: "),
            "id": str(uuid.uuid4()),
        }
        pprint.pp(obj)
        commit = input("Stage Changes to dictionary? (y/n) ")
        if commit == "y":
            dict["skills"].append(obj)
            print("\033[96mChanges Staged\033[0m")
        else:
            print("\033[91mChanges Discarded\033[0m")

    if selection == 2:
        obj = {
            "title": input("Title: "),
            "image": input("Image Source: "),
            "body": input("Tag Line: "),
            "link": input("Link: "),
            "id": str(uuid.uuid4()),
        }
        pprint.pp(obj)
        commit = input("Stage Changes to dictionary? (y/n) ")
        if commit == "y":
            dict["learning"].append(obj)
            print("\033[96mChanges Staged\033[0m")
        else:
            print("\033[91mChanges Discarded\033[0m")

    if selection == 3:
        obj = {
            "title": input("Title: "),
            "body": input("Body: "),
            "link": input("Link: "),
            "dateAdded": time.time(),
            "id": str(uuid.uuid4()),
        }
        pprint.pp(obj)
        commit = input("Stage Changes to dictionary? (y/n) ")
        if commit == "y":
            dict["plans"].append(obj)
            print("\033[96mChanges Staged\033[0m")
        else:
            print("\033[91mChanges Discarded\033[0m")

    if selection == 4:
        obj = {
            "title": input("Title: "),
            "body": input("Body: "),
            "link": input("Link: "),
            "dateAdded": time.time(),
            "id": str(uuid.uuid4()),
        }
        pprint.pp(obj)
        commit = input("Stage Changes to dictionary? (y/n) ")
        if commit == "y":
            dict["projects"].append(obj)
            print("\033[96mChanges Staged\033[0m")
        else:
            print("\033[91mChanges Discarded\033[0m")