run: dist/index.js
	@node dist/index.js

dist/index.js: src/index.js
	@make clean
	./node_modules/.bin/broccoli build dist

clean:
	@rm -rf dist || true

