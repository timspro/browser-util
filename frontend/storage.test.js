import { autotest } from "@tim-code/autotest"
import { get, set } from "./storage.js"

const name = "test"
const data = { a: "b" }
autotest(get, { setup: () => set(name, data) })(name)(data)
