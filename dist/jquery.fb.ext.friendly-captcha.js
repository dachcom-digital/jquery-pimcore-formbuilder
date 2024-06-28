/*
 *  Project: PIMCORE FormBuilder
 *  Extension: Friendly Captcha Injector
 *  Since: 1.1.0
 *  Author: DACHCOM.DIGITAL
 *  License: GPLv3

*/
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('jquery'), window) :
        typeof define === 'function' && define.amd ? define(['exports', 'jquery', 'window'], factory) :
            (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory({}, global.jQuery, window));
}(this, (function (exports, $, window) {
    'use strict';

    var clName = 'FriendlyCaptcha';

    function FriendlyCaptcha(form, options) {
        this.siteKey = null;
        this.dataSolutionFieldName = null;
        this.start = null;
        this.lang = null;
        this.callback = null;
        this.puzzleEndpoint = null;
        this.$form = $(form);
        this.options = $.extend({}, $.fn.formBuilderFriendlyCaptcha.defaults, options);
        this.init();
    }

    $.extend(FriendlyCaptcha.prototype, {

        init: function () {

            this.$friendlyCaptchaField = this.$form.find(this.options.friendlyCaptchaFieldClass);

            if (this.$friendlyCaptchaField.length === 0) {
                return;
            }

            if (this.$friendlyCaptchaField.length > 1) {
                alert('Form has invalid amount of friendly captcha fields. There should be only one dedicated captcha field!');
                return;
            }

            this.siteKey = this.$friendlyCaptchaField.data('sitekey');
            this.dataSolutionFieldName = this.$friendlyCaptchaField.data('data-solution-field-name');
            this.start = this.$friendlyCaptchaField.data('start');
            this.lang = this.$friendlyCaptchaField.data('lang');
            this.callback = this.$friendlyCaptchaField.data('callback');
            this.puzzleEndpoint = this.$friendlyCaptchaField.data('puzzle-endpoint');

            this.$form.on('formbuilder.success', this.onReset.bind(this));
            this.$form.on('formbuilder.fail', this.onReset.bind(this));

            this.bindDependency();
        },

        bindDependency: function () {

            var widgetUrl = 'https://cdn.jsdelivr.net/npm/friendly-challenge/widget.min.js';

            if (this.options.autoWidgetVersionToLoad !== null) {
                widgetUrl = `https://cdn.jsdelivr.net/npm/friendly-challenge@${this.options.autoWidgetVersionToLoad}/widget.min.js`;
            }

            if (this.options.useAutoWidget === false) {

                if (typeof this.options.setupField === 'function') {
                    this.options.setupField(this.$friendlyCaptchaField, this.$form, {
                        sitekey: this.siteKey,
                        dataSolutionFieldName: this.dataSolutionFieldName,
                        start: this.start,
                        lang: this.lang,
                        callback: this.callback,
                        puzzleEndpoint: this.puzzleEndpoint,
                    });
                }

                return;
            }

            if (typeof window.friendlyChallenge !== 'undefined') {
                return;
            }

            $.getScript(widgetUrl);
        },

        onReset: function () {

            if (typeof window.friendlyChallenge === 'undefined') {
                return;
            }

            if (this.$friendlyCaptchaField.length === 0) {
                return;
            }

            window.friendlyChallenge.autoWidget.reset();
        }
    });

    $.fn.formBuilderFriendlyCaptcha = function (options) {
        this.each(function () {
            if (!$.data(this, 'fb-' + clName)) {
                $.data(this, 'fb-' + clName, new FriendlyCaptcha(this, options));
            }
        });
        return this;
    };

    $.fn.formBuilderFriendlyCaptcha.defaults = {
        useAutoWidget: true,
        autoWidgetVersionToLoad: null,
        setupField: null,
        friendlyCaptchaFieldClass: 'div.form-builder-friendly-captcha',
    };
})));
