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
<script src="https://gistcdn.githack.com/solverat/5a70ea1b21eaff050460294094ec052d/raw/96d9e93f2f7beae8e6828ab46c8ec859d24f3bc8/dependsOn.min.js"></script>
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
