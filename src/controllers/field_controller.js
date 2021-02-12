import { Controller } from "stimulus"

export default class extends Controller {
  static get targets() {
    return [ "field" ]
  }

  add(event) {
    this.fieldTarget.value = this.fieldTarget.value + event.target.textContent
  }
}

