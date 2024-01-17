export interface IPokedex {
  id: number;
  name: IName;
  type: IType;
  base: IBase;
}
export interface IName {
  english: string;
  japanese: string;
  chinese: string;
  french: string;
}

export interface IType {
  types: string[];
}

export interface IBase {
  HP: number;
  Attack: number;
  Defense: number;
  SpAttack: number;
  SpDefense: number;
  Speed: number;
}

export interface ISprites {
  id: number;
  name: IName;
  url: string;
}
