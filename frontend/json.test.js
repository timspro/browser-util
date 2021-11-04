import { autotest } from "@tim-code/autotest"
import { get, post } from "./json.js"

autotest(get)("https://httpbin.org/get")(expect.objectContaining({ args: {} }))

const getInput = { test: "1" }
autotest(get)("https://httpbin.org/get", getInput)(expect.objectContaining({ args: getInput }))

const postInput = { check: 1 }
autotest(post)("https://httpbin.org/post", postInput)(
  expect.objectContaining({ json: postInput })
)
