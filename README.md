npm install
npm install --save-dev babel-core
npm install -g babel-cli

2 terminals running:

babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

live-server public

localhost:8080