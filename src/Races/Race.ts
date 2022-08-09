abstract class Race {
  constructor(private _name:string, private _dexterity:number) {
  }
  /*  Dica do Readme: use a convenção de atributos privados para criar os atributos com _ e os getters para expor os atributos sem o _.  */

  get name():string {
    return this._name;
  }

  get dexterity():number {
    return this._dexterity;
  }

  static createdRacesInstances():number {
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints():number;
}

export default Race;