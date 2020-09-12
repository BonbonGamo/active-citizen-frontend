import { Async } from "react-declarative-state"

const configUrl = "http://localhost:3000/"

export function test() {
  return Async.GET(configUrl + "test")
}
