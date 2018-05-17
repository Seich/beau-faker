# Beau Faker

Beau-faker allows you to use faker.js from within Beau.

## Installation

```
npm i -g beau-faker
```

Don't forget to add faker to your Beau plugins.

## Usage

You can let beau know you are using faked values within a request by adding the
`FakeIt` key and setting it to `true`.

```yml
endpoint: http://httpbin.org

plugins:
  - faker

POST /anything:
  alias: anything
  fakeIt: true
  payload:
    name:
      first: '{{name.firstName}}'
      last: '{{name.lastName}}'

    address: '{{address.city}}, {{address.state}}'
```

When set to `fakeIt` is set to `true` beau will run
[`Faker.faker`](https://github.com/marak/Faker.js/#fakerfake) on every value
within that request.
