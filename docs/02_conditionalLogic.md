# Conditional Logic Extension
This Plugin will enable the conditional logic functionality.

## Install Dependencies
This Extension requires the DependsOn library.

### Via NPM
```bash
npm i jquery-depends-on
```

### Via CDN 
```html
<script src="https://cdn.jsdelivr.net/npm/jquery-depends-on@1.5.1/src/dependsOn.min.js"></script>
```

## Enable Extension
```js

// optional: if you've added depends-on via npm
import 'jquery-depends-on';

// required: load extension
import 'jquery-pimcore-formbuilder/dist/jquery.fb.ext.conditional-logic';
```

```js
document.addEventListener('DOMContentLoaded', () => {
    $('form.formbuilder').formBuilderConditionalLogic();
});
```

### Extended Usage
```js
document.addEventListener('DOMContentLoaded', () => {
    $('form.formbuilder').formBuilderConditionalLogic({
        conditions: {},
        actions: {
            toggleElement: {
                onEnable: function (action, actionId, ev, $el) {
                    console.log(action, ev, $el);
                }
            }
        },
        elementTransformer: {
            hide: function($els) {
                $els.hide();
            }
        }
    });
});
```
