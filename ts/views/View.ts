declare var $:any;
abstract class View<T> {

  private _elemento: Element

  constructor(seletor: string){

    this._elemento = $(seletor);
  }

  update(model: T){

    this._elemento.html(this.template(model));
  }

  abstract template(model: T): string;
}
