# browser-util

```
npm install @tim-code/browser-util
```

Helper functions for dealing with ugly browser APIs

## Usage

```js
cookie.get(name)
json.get(url, query, options)
json.post(url, body, options)
storage.get(name) // local storage
storage.set(name, data) // local storage
```

## localhost

When used in a Node environment, `json` methods will rewrite URLs starting with `/` to `http://localhost:${process.env.PORT}`.
