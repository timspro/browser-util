const host = typeof process === "undefined" ? "" : `http://localhost:${process.env.PORT}`

async function jsonFetch(url, options) {
  if (url[0] === "/" && host) {
    url = `${host}${url}`
  }
  const response = await fetch(url, options)
  const text = await response.text()
  try {
    const json = JSON.parse(text)
    if (response.ok) {
      return json
    }
    console.error(response.status, json)
  } catch (error) {
    const shorter = text.slice(0, 50)
    console.error(`could not parse json starting with:`, shorter)
  }
  return {}
}

export function get(url, query, options = {}) {
  if (query) {
    url = `${url}?${new URLSearchParams(query).toString()}`
  }
  return jsonFetch(url, { ...options, method: "GET" })
}

export function post(url, body, options = {}) {
  body = JSON.stringify(body)
  const headers = { ...(options.headers || {}), "Content-Type": "application/json" }
  return jsonFetch(url, { ...options, headers, method: "POST", body })
}
