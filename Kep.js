export default class Kep {
  #eUt;
  #cim;
  #index;
  constructor(eUt, cim, index, szuloElem) {
    this.#eUt = eUt;
    this.#cim = cim;
    this.#index = index;
    this.szuloElem = szuloElem;
    this.megjelenit();
    this.kepElem = document.querySelector(".kep:last-child");
    this.kepElem.addEventListener("click", () => {
      console.log(this.#index);
      // nincs return
      const e = new CustomEvent("kivalaszt", { detail: this.#index });
      window.dispatchEvent(e);
    });
  }

  megjelenit() {
    let html = `<div class="kep">
                    <img src="${this.#eUt}" alt="${this.#cim}">
                </div>`;
    // HTML DOM okjektumot készít
    this.szuloElem.insertAdjacentHTML("beforeend", html);
  }
}
