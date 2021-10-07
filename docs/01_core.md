# Core Extension
This Extension will enable the ajax functionality but also the multi file handling.

> Read more about the dynamic multi file setup [here](https://github.com/dachcom-digital/pimcore-formbuilder/blob/master/docs/80_FileUpload.md)

- [Enable Extension](./01_core.md#enable-extension)
- [Extended Usage](./01_core.md#extended-usage)
- [Dynamic Multi File Libraries](./01_core.md#install-dynamic-multi-file-libraries)
  - [Drop Zone (default)](./10_dmf_drop_zone.md)
  - [Fine Uploader](./11_dmf_fine_uploader.md)
- [Events](./01_core.md#events)

## Enable Extension

```js
import 'jquery-pimcore-formbuilder/dist/jquery.fb.core';
```

```js
document.addEventListener('DOMContentLoaded', () => {
    $('form.formbuilder.ajax-form').formBuilderAjaxManager();
});
```

## Extended Usage
```js
document.addEventListener('DOMContentLoaded', () => {
    $('form.formbuilder.ajax-form').formBuilderAjaxManager({
        setupFileUpload: true, // initialize upload fields
        resetFormMethod: null, // reset method after success
        validationTransformer: {
            addValidationMessage: function($fields, messages) {
                console.log($fields, messages);
            },
            removeFormValidations: function($form) {
                console.log($form);
            }
        }
    });
});
```

## Events

```js
document.addEventListener('DOMContentLoaded', () => {
    
    $('form.ajax-form')
       .on('formbuilder.success', function(ev, message, redirect, $form) {
             console.log(message, redirect);
     }).on('formbuilder.fail', function(ev, messages, $form) {
             console.log(messages);
     }).on('formbuilder.error', function(ev, messages, $form) {
             console.log(messages);
     }).on('formbuilder.error-form', function (ev, messages, $form) {
            console.error('error-form', messages);
     }).on('formbuilder.error-field', function(ev, data, $form) {
             console.log(data.field, data.messages);
     }).on('formbuilder.fatal', function (ev, response, $form) {
            console.error('fatal', response.error, response.trace);
    });
    
});
```

## Install Dynamic Multi File Libraries
Depending on the file handler you want to use, you may need to install some dependencies or include them.
- [Drop Zone (default)](./10_dmf_drop_zone.md)
- [Fine Uploader](./11_dmf_fine_uploader.md)

### Disable Default Dynamic Multi File Initialization
All handler will be initialized by lazy loading, so they will be requested only if upload files are available. 
However, if you **don't** want to initialize any handler because of your own frontend logic for example, you may want to disable the initialization:

```javascript
$('form.formbuilder.ajax-form').formBuilderAjaxManager({
    setupFileUpload: false, // disable default dynamic multi file handler
});
```
