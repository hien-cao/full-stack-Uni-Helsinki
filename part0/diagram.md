# 0.4 New note

### Step 1: Browsing to URL https://fullstack-exampleapp.herokuapp.com/notes
browser->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/notes 

server->browser: HTML-code 

browser->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/main.css

server->browser: main.css

browser->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/main.js

server->browser: main.js

browser->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/data.json

server->browser: data.json

### Step 2: Entering text in the input and press 'submit'
browser->server: HTTP POST https://fullstack-exampleapp.herokuapp.com/new_note

server->browser: HTML-code

browser->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/notes 

server->browser: HTML-code 

browser->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/main.css

server->browser: main.css

browser->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/main.js

server->browser: main.js

browser->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/data.json

server->browser: data.json (the updated json file)

# 0.5 Single page app

### Situation: Browsing to URL https://fullstack-exampleapp.herokuapp.com/spa
browser->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/spa

server->browser: HTML-code

browser->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/main.css

server->browser: main.css

browser->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/spa.js

server->browser: spa.js

browser->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/data.json

server->browser: data.json

# 0.6 New note

### Situation: Entering text in the input and press 'submit'
browser->server: HTTP POST https://fullstack-exampleapp.herokuapp.com/new_note_spa

server->browser: json file with payload {"content":"hi","date":"2019-06-21T07:36:04.757Z"}






