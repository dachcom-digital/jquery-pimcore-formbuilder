# Dynamic Multi File | DropZone

![image](https://user-images.githubusercontent.com/700119/119269406-daf90080-bbf7-11eb-9059-01485bf2edf7.png)

- Resource: https://www.dropzonejs.com
- Handler: `jquery.fb.dmf.drop-zone.js`
- Library: [Dropzone](https://www.npmjs.com/package/dropzone)

***

## Implementation

```bash
npm i dropzone
```

### Declarative Way

#### Async
The recommended way to implement this adapter. This allows form builder to load handler and library files only if a form with a
corresponding file handler is requested!

```js
let Encore = require('@symfony/webpack-encore'),
    path = require('path');

if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
    .setOutputPath('./public/static/')
    .setPublicPath('/static')

    // css: @import ./node_modules/dropzone/dist/dropzone.css
    .addStyleEntry('appstyle', './assets/css/app.css')

    // copy bundle libs
    .copyFiles({
        from: path.resolve(__dirname, './node_modules/jquery-pimcore-formbuilder/dist/dynamic-multi-file'),
        pattern: /\.js$/,
        to: '/fb-mf-handler/[name].[ext]'
    })
    .copyFiles({
        from: path.resolve(__dirname, './node_modules/dropzone/dist/min'),
        pattern: /\.js$/,
        to: '/fb-mf-handler/lib/[name].[ext]'
    })

    .autoProvidejQuery()

module.exports = Encore.getWebpackConfig();
```

```js
import 'jquery-pimcore-formbuilder/dist/jquery.fb.core';

$(function () {
    $('form.formbuilder.ajax-form').formBuilderAjaxManager({
        dynamicMultiFileHandlerOptions: {
            defaultHandlerPath: '/static/fb-mf-handler',
            libPath: '/static/fb-mf-handler/lib/dropzone.min.js',
        }
    });
});
```

#### Synced
Although this does not require any copy actions, it will load all the libraries into your global javascript assets.
Since they could easily grow on filesize and gets loaded at every request, you should be careful with that.

```js
import 'dropzone';
import 'jquery-pimcore-formbuilder/dist/dynamic-multi-file/jquery.fb.dmf.drop-zone';

$('form.formbuilder.ajax-form').formBuilderAjaxManager({
    dynamicMultiFileHandlerOptions: {
        defaultHandlerPath: null,
        libPath: null,
    }
});
```

### Imperative Way
This requires more work from your side since we only provide a simple jQuery Handler. Read more about the
implementation [here](https://dropzone.gitbook.io/dropzone/getting-started/setup/imperative). You also need to build your own
handler and requires to **[disable the default behaviour](./01_core.md#disable-default-dynamic-multi-file-initialization)**.

## Events
If you're using the default handler, you're able to hook into the most important initialization processes:

```javascript
$forms.on('formbuilder.dynamic_multi_file.init', function (ev, $dmfField, configuration) {
    // overwrite configuraiton
    configuration.addRemoveLinks = false;

    // NEVER! override configuration.init! this would break all the internal server side communication!
    // use event below to add your custom events!
});

$forms.on('formbuilder.dynamic_multi_file.drop_zone.init', function (ev, dropZoneInstance) {
    // add eventlistener
    dropZoneInstance.on('sending', function (file, xhr, formData) {
        console.log(file);
    });
});
```
