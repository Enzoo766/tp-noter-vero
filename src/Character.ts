import type { Weapon } from './Weapon.ts';
export class Character {
    abstract 
    public name : string;      
    public maxHealth : number;     
    public baseAttack : number;       
    public baseDefense : number;       
    private _health : number;        
    private _weapon : Weapon | null;

     public constructor (name: string, health: number, baseAttack: number, baseDefense: number) {
        this.name = name;
        this._health= health;
        this.baseAttack = baseAttack;
        this.baseDefense = baseDefense;
      }
}