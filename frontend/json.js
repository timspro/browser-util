import * as json from "@tim-code/json-fetch"

const host = typeof process === "undefined" ? "" : `http://localhost:${process.env.PORT}`

function checkUrl(url) {
  if (url[0] === "/") {
    return `${host}${url}`
  }
  return url
}

export function get(url, query, options = {}) {
  url = checkUrl(url)
  return json.get(url, query, options)
}

export function post(url, body, options = {}) {
  url = checkUrl(url)
  return json.post(url, body, options)
}
