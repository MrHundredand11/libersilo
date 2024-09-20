#still way too messy
#fix mismatches
#fix missing values

import requests
import json

def isbn_json(b_isbn):
    book = {
        "head": "",
        "api_info": {
            "google": "",
            "openlibrary": ""
        }
    }
    rq = requests.get(f'https://openlibrary.org/isbn/{b_isbn}.json').content
    jason = json.loads(rq.decode())
    book['api_info']['openlibrary'] = jason

    rq2 = requests.get(f'https://www.googleapis.com/books/v1/volumes?q=isbn:{b_isbn}').content
    jason2 = json.loads(rq2.decode())
    book['api_info']['google'] = jason2['items'][0]
    print(jason)
    head = {
            "title": jason2['items'][0]['volumeInfo']['title'],
            "subtitle": "",
            "authors": jason2['items'][0]['volumeInfo']['authors'],
            "publisher": jason2['items'][0]['volumeInfo']['publisher'],
            "published_date": jason2['items'][0]['volumeInfo']['publishedDate'],
            "ids": jason2['items'][0]['volumeInfo']['industryIdentifiers'],
            "categories": jason2['items'][0]['volumeInfo']['categories'],
            "subjects": ""
        }
    if 'subtitle' in jason2['items'][0]['volumeInfo']: head['subtitle'] = jason2['items'][0]['volumeInfo']['subtitle']
    if 'subjects' in jason: head['subjects'] = jason['subjects']

    for i in jason['identifiers']:
        id = {
            "type": i,
            "identifier": jason['identifiers'][i][0]
        }
        head['ids'].append(id)

    if 'lccn' in jason: head['ids'].append({"type": "lccn", "identifier": jason['lccn'][0]})
    if 'oclc_numbers' in jason: head['ids'].append({"type": "oclc", "identifier": jason['oclc_numbers'][0]})
    book['head'] = head

    if jason2['items'][0]['volumeInfo']['title'] != jason['title']: print("Title mismatch. Doublecheck that entries are the same.")

    jason3 = json.dumps(book, indent=4)
    with open(f'./ls/000/rsrc/book/isbn_{b_isbn}.json', 'w') as j_out:
        j_out.write(jason3)


b_isbn = ''
isbn_json(b_isbn)