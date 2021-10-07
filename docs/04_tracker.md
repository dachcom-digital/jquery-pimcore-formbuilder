# Tracker Extension
This Plugin will enable the tracker functionality. 
If enabled, this extension tries to submit insensible data like dropdown selection, checked radios/boxes to google analytics or matomo.

> **Configuration:**: You need to listen to the `form_builder_submission` event in your tag manager!

## Enable Extension
```js
import 'jquery-pimcore-formbuilder/dist/jquery.fb.ext.tracker';
```
```js
document.addEventListener('DOMContentLoaded', () => {
    $('form.formbuilder').formBuilderTracker();
});
```

## Extended Usage
```js
document.addEventListener('DOMContentLoaded', () => {
    $('form.formbuilder').formBuilderTracker({
        onBeforeSubmitDataToProvider: function(data, formName, $form) {
            
            // add some special value to data
            // warning: in some cases, no data will be submitted (gtag, ga)
            
            return data;
        },
        provider: 'google', // choose between "google" or "matomo"
        trackDropDownSelection: true,
        trackCheckboxSelection: true,
        trackRadioSelection: true,
        trackHiddenInputs: true,
        invalidFieldNames: ['_token', 'formCl']
    });
});
```