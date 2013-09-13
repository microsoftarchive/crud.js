clean:
	rm -f dist/*.js

jshint:
	jshint .

build:
	webmake index.js dist/crud.js

minify:
	uglifyjs dist/crud.js > dist/crud.min.js

all: jshint build minify

.PHONY: all