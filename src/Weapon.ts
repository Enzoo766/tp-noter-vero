export type WeaponKind = 'sword' | 'axe' | 'staff' | 'dagger';
export class Weapon {
    
    public name : string;
    public kind : WeaponKind;
    public attackBonus : number;

    public constructor (name: string, kind: WeaponKind, attackBonus: number) {
    this.name = name;
    this.kind= kind;
    this.attackBonus = attackBonus;
  }

  public describe(): string {
    return `${this.name} (${this.kind}, +${this.attackBonus} attack)`;
  }
 
}