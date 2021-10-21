export function get(name) {
  try {
    return document.cookie
      .split(";")
      .find((row) => row.startsWith(name))
      .split("=")[1]
  } catch (error) {
    return undefined
  }
}
