export default class BrowserStore {
  static add (key, val, stringify = false) {
    const value = stringify ? JSON.stringify(val) : val
    return localStorage.setItem(btoa(key), btoa(value))
  }

  static get (key, parse = false) {
    const serialised = BrowserStore.getRaw(btoa(key))
    if (serialised) return BrowserStore.parseIfRequired(atob(serialised), parse)
    else {
      return BrowserStore.getRaw(key, parse)
    }
  }

  static remove (key) {
    return localStorage.removeItem(btoa(key))
  }

  static getRaw (key, parse = false) {
    return BrowserStore.parseIfRequired(localStorage.getItem(key), parse)
  }

  static parseIfRequired (value, parse) {
    return parse ? JSON.parse(value) : value
  }

}
