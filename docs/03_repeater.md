# Repeater Extension
This Plugin will enable the repeater functionality.

## Enable Extension
```js
import 'jquery-pimcore-formbuilder/dist/jquery.fb.ext.repeater';
```

```js
document.addEventListener('DOMContentLoaded', () => {
    $('form.formbuilder').formBuilderRepeater();
});
```

## Extended Usage
```js
document.addEventListener('DOMContentLoaded', () => {
    $forms.formBuilderRepeater({
    
        classes: {
            add: 'btn btn-special-class',
            remove: 'btn btn-special-class'
        },
        
        onRemove: function (cb) {
            var $containerBlock = $(this);
            $containerBlock.slideUp(1350, function () {
                $(this).remove();
                cb(); // always trigger the callback action!
            });
        },
    
        onAdd: function (newForm, cb) {
            var $container = $(this),
                $newForm = $(newForm);
            $newForm.insertAfter($container.find('span.add-block')).hide().slideDown(1000, function () {
                cb($newForm); // always trigger the callback action!
            });
        },
    
        renderCreateBlockElement: function (classes, text) {
            var $container = $(this);
            return $('<span/>', {
                'href': '#',
                'class': classes,
                'text': text
            });
        },
    
        allocateCreateBlockElement: function ($element) {
            var $container = $(this);
            $container.prepend($element);
        },
    
        renderRemoveBlockElement: function (classes, text) {
            var $containerBlock = $(this);
            return $('<span/>', {
                'href': '#',
                'class': classes,
                'text': text
            });
        },
    
        allocateRemoveBlockElement: function ($element) {
            var $containerBlock = $(this);
            $containerBlock.prepend($element);
        }
    
    });
});
```
