import browser from "browser-env"
import fetch from "node-fetch"

browser({ url: `http://localhost` })
global.fetch = fetch
