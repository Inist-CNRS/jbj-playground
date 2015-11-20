# JBJ playground - test your stylesheets online

> *Warning:* the content of this playground is in the `gh-pages` branch, where
> the static files are.

See http://inist-cnrs.github.io/jbj-playground/

If you want to serve this static server locally, use `npm start`.

## Contribute

If you want to add a module to the playground, say 'jbj-module', first install
it and rebuild the `jbj.js` bundle:

```bash
$ npm install --save jbj-module
$ npm run build
```

Next, add the button in `index.html`:

```html
      <div class="modules btn-group" role="group" aria-label="Modules to use">
        <button class="btn btn-default active" disabled="disabled">
          basics
        </button>
        <button id="arrayButton"    class="btn btn-default">array</button>
        <button id="parseButton"    class="btn btn-default">parse</button>
        <button id="templateButton" class="btn btn-default">template</button>
        ...
        <button id="moduleButton"   class="btn btn-default">module</button>
      </div>
```

And declare it in the javascript (also in `index.html`):

```javascript
addModuleButton('jbj-array',arrayButton);
addModuleButton('jbj-parse',parseButton);
addModuleButton('jbj-template',templateButton);
// ...
addModuleButton('jbj-module',moduleButton);
```

You can test using `npm start`.

Don't forget to commit and push (to the `gh-pages` branch):

```bash
$ git commit -a
$ git push
```
