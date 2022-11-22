/**
 * SWAPI's schema for Person
 */
export type Person = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  /**
   * Reference to `planets`'s resource
   */
  homeworld: string;
  /**
   * Reference to `films`'s resource
   */
  films: string[];
  species: string[];
  /**
   * Reference to `vehicle`'s resource
   */
  vehicles: string[];
  /**
   * Reference to `starship`'s resource
   */
  startships: string[];
  created: string;
  edited: string;
  /**
   * Unique
   */
  url: string;
};
