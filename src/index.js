class Lolita {
  constructor () {

  }
  use (bottle, name) {
    this[bottle] = name
    return this
  }
}

export default new Lolita()
