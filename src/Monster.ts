import { SimpleFighter } from './Fighter';

class Monster implements SimpleFighter {
  private _lifePoints: number;
  private _strenght: number;

  constructor() {
    this._lifePoints = 85;
    this._strenght = 63;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strenght;
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._lifePoints;
    if (damage > 0) {
      this._lifePoints -= damage;
    }
    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }
    return this._lifePoints;
  }

  attack(enemy: SimpleFighter): void {
    const damage = this._strenght;
    enemy.receiveDamage(damage);
  }
}

export default Monster;