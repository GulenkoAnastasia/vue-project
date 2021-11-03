/* eslint-disable @typescript-eslint/ban-types */
export interface CharacterInfo {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Object;
  location: Object;
  image: string;
  episode: Array<string>;
  url: string;
  created: string;
}
export interface RootInfo {
  baseUrl: string;
  characters: any;
}
