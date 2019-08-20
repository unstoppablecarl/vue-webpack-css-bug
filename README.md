
Looking for a solution to solve this problem in webpack 4.39.2

## Intended Design

`/output/mix-manifest.json`: used internally for cache busting

`/output/styles.css`: loaded on all pages
`/output/vendor.js`: loaded on all pages
`/output/base.js`: loaded on all pages, only dependency is `vendor.js`

`/output/bar.js`: included in page(s) that use it, only dependency is `vendor.js`
`/output/bar.js`: included in page(s) that use it, only dependency is `vendor.js`


## Problem

A `output/styles.js` file is created containing the following:
```
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],[]]);
//# sourceMappingURL=styles.js.map
```

`/output/styles.js` is a dependency of the following files (must be included on the page for the following files to function):

```
/output/base.js
/output/bar.js
/output/bar.js
```

## Gathered Info


PR claims to solve problem but is merged into webpack 5 branch (plugins required for vue do not work with webpack 5 yet)
https://github.com/webpack/webpack/pull/9040

Probable root cause
https://github.com/webpack/webpack/issues/7300

Issue in related mini-css-extract-plugin
https://github.com/webpack-contrib/mini-css-extract-plugin/issues/151

Plugins tested but do not solve the problem
https://www.npmjs.com/package/webpack-remove-empty-js-chunks-plugin
https://www.npmjs.com/package/eliminate-empty-chunk-file-webpack-plugin
