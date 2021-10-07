# reCAPTCHA V3 Extension

This Plugin will enable reCAPTCHA v3 functionality on your form. Workflow: 
- Loads `https://www.google.com/recaptcha/api.js` if not available
- Adds token to captcha field on your form

## Enable Extension
```js
import 'jquery-pimcore-formbuilder/dist/jquery.fb.ext.recaptcha-v3';
```
```html
<!-- optional but recommended by google to load the api on every page -->
<!-- "form_builder_spam_protection_recaptcha_v3_site_key" is a twig global which comes with formbuilder by default -->
<script type="text/javascript" src="https://www.google.com/recaptcha/api.js?render={{ form_builder_spam_protection_recaptcha_v3_site_key }}" async defer></script>
```

```js
document.addEventListener('DOMContentLoaded', () => {
    $('form.formbuilder').formBuilderReCaptchaV3();
});
```

## Extended Usage
```js
document.addEventListener('DOMContentLoaded', () => {
    $('form.formbuilder').formBuilderReCaptchaV3({
        disableFormWhileLoading: true
    });
});
```
