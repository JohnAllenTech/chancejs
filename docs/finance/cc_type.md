# cc_type

```js
// usage
chance.cc_type()
chance.cc_type({ raw: true })
```

Return a random credit card type.

```js
chance.cc_type();
=> 'Visa'
```

Default returns just the name. To return the entire object (consisting of name,
short name, numeric prefix, and length), specify so with the raw flag.

```js
chance.cc_type({raw: true});
=> {name: 'Discover Card', short_name: 'discover', prefix: '6011', length: 16}
```

The available types are (name - _short_name_):

- American Express - _amex_
- Bankcard - _bankcard_
- China UnionPay - _chinaunion_
- Diners Club Carte Blanche - _dccarte_
- Diners Club enRoute - _dcenroute_
- Diners Club International - _dcintl_
- Diners Club United States & Canada - _dcusc_
- Discover Card - _discover_
- InstaPayment - _instapay_
- JCB - _jcb_
- Laser - _laser_
- Maestro - _maestro_
- Mastercard - _mc_
- Solo - _solo_
- Switch - _switch_
- Visa - _visa_
- Visa Electron - _electron_
