# existy

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]

[npm-image]: https://img.shields.io/npm/v/existy.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/existy
[travis-image]: https://img.shields.io/travis/bcomnes/existy.svg?style=flat-square
[travis-url]: https://travis-ci.org/bcomnes/existy


Check if something exists (e.g. not `null` || `undefined`)

A modularized version of the `existy` function found in [*Functional Javascript*](http://shop.oreilly.com/product/0636920028857.do) by [Michael Fogus](http://blog.fogus.me/).

## Install

```sh
$ npm i existy --save
```

## Usage

```js
var existy = require('existy')
existy(null) // false
existy(undefined) // false
existy(0) // true
existy(false) // true
```

## Contributing

Contributions welcome! Please read the [contributing guidelines](CONTRIBUTING.md) first.

## References

- [*Functional Javascript*](http://shop.oreilly.com/product/0636920028857.do) by [Michael Fogus](http://blog.fogus.me/)
- ["this is my best module"](https://twitter.com/substack/status/469024887949242368) - substack

## Licenses
[ISC](LICENSE)
