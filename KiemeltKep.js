export default class Kep {
    #eUt;
    #cim;
    constructor(eUt, cim, szuloElem) {
      this.#eUt = eUt
      this.#cim = cim
      this.szuloElem = szuloElem
      this.megjelenit()
    }
  
    megjelenit() {
      let html = `<div class="kep">
                      <h3>${this.#cim}</h3>
                      <img src="${this.#eUt}" alt="${this.#cim}">
                  </div>`
      this.szuloElem.innerHTML=html
    }
  }