export function get(name) {
  const found = localStorage.getItem(name)
  if (found !== undefined) {
    return JSON.parse(found)
  }
  return undefined
}

export function set(name, data) {
  return localStorage.setItem(name, JSON.stringify(data))
}
