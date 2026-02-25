# jQuery Pimcore FormBuilder Extensions

***

> [!IMPORTANT]
> This bundle will **not** be compatible with Pimcore 12 or any future Pimcore versions.
>
> For all future development, updates, and documentation, please refer to [opendxp.io](https://www.opendxp.io):
>
> - Access the latest info here: [https://www.opendxp.io/en/bundles](https://www.opendxp.io/en/bundles)  
> - Migration of Dachcom Digital Bundles: [https://www.opendxp.io/en/dachcom-bundles](https://www.opendxp.io/en/dachcom-bundles)
>
> **Note:** We are open to partnerships for those interested in porting this bundle to future versions.
> 
> For inquiries, please contact: dcdi@dachcom.ch

***

We're providing some helpful Javascript Extensions to simplify your daily work with the PIMCORE FormBuilder.
This Library provides all jQuery extensions for the [PIMCORE FormBuilder Bundle](https://github.com/dachcom-digital/pimcore-formbuilder).

## Installation
```bash
npm i jquery-pimcore-formbuilder
```

## Extensions Overview
- [Core Extension](./docs/01_core.md)
  - [Dynamic Multi File Libraries](./docs/01_core.md#install-dynamic-multi-file-libraries)
- [Conditional Logic Extension](./docs/02_conditionalLogic.md)
- [Repeater Extension](./docs/03_repeater.md)
- [Tracker Extension](./docs/04_tracker.md)
- [reCAPTCHA V3 Extension](./docs/05_1_recaptchaV3.md)
- [Friendly Captcha Extension](./docs/05_2_friendlyCaptcha.md)

## Upgrade Notes

### 1.2.0
- **[NEW FEATURE]**: Bootstrap 5 layout support
- **[SECURITY]**: Extend file upload handlers to include fieldReference in requests for better form tracking (Formbuilder 5.3.4 Support)

### 1.1.0
- **[NEW FEATURE]**: Add FriendlyCaptcha Component

### 1.0.1
- Allow multiple Instances [#1](https://github.com/dachcom-digital/jquery-pimcore-formbuilder/issues/1)

***

## License
**DACHCOM.DIGITAL AG**, Löwenhofstrasse 15, 9424 Rheineck, Schweiz  
[dachcom.com](https://www.dachcom.com), dcdi@dachcom.ch  
Copyright © 2025 DACHCOM.DIGITAL. All rights reserved.  

For licensing details please visit [LICENSE.md](LICENSE.md)  
