export function get(name) {
  try {
    return document.cookie
      .split(";")
      .find((row) => row.trim().startsWith(name))
      .split("=")[1]
  } catch (error) {
    return undefined
  }
}
