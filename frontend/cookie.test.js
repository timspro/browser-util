import { autotest } from "@tim-code/autotest"
import { get } from "./cookie.js"

autotest(get, {
  setup: () => {
    document.cookie = "id=test; path=/"
  },
})("id")("test")
