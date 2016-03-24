# JBJ playground - test your stylesheets online

> *Warning:* the content of this playground is in the `gh-pages` branch, where
> the static files are.

See http://inist-cnrs.github.io/jbj-playground/

If you want to serve this static server locally, use `npm start`.

## Contribute

### Install

If you want to add a module to the playground, say 'jbj-module', first install
it:

```bash
$ npm install --save jbj-module
```

Then, add it to the `build` script in `package.json`:
```json
{
  "scripts": {
    "build": "browserify --debug -r jbj -r jbj-module -r reqwest > ./assets/js/jbj.js",
  }
}
```

and rebuild the `jbj.js` bundle:

```bash
$ npm run build
```

### Add the button

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

### Add documentation

To add the JBJ actions of the `jbj-module`, insert `li` tags into the list 
which id is `actions-list`.

For example, if you want to add the link to `myAction` action, add a line:

```html
<li class="action"> <a target="_blank" href="https://github.com/Inist-CNRS/node-jbj-module#myAction">myAction</a> </li>
```


### Add examples

To add the examples, you have to link to an `examples.json` in the `jbj-module`
repository, generally those used to test the module.
For that, edit `assets/js/examples.js`, and complete the `urls` table:

```js
var urls = [
  "https://rawgit.com/Inist-CNRS/node-jbj/master/test/examples.json",
  "https://rawgit.com/Inist-CNRS/node-jbj-array/master/test/examples.json",
  "https://rawgit.com/Inist-CNRS/node-jbj-parse/master/test/examples.json",
  "https://rawgit.com/Inist-CNRS/node-jbj-template/master/test/examples.json",
  "https://rawgit.com/Inist-CNRS/node-jbj-module/master/test/examples.json"
];
```


### Test it

You can test using `npm start`.


### Push it

Don't forget to commit and push (to the `gh-pages` branch):

```bash
$ git commit -a
$ git push
```
