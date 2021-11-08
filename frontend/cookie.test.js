import { autotest } from "@tim-code/autotest"
import { get } from "./cookie.js"

const setup = () => {
  document.cookie = "id=test; path=/;"
  document.cookie = "a=b; path=/;"
}

autotest(get, { setup })("id")("test")
autotest(get, { setup })("a")("b")
