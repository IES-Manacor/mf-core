import {Usuari} from "src/model/Usuari";
import {GrupCorreu} from "src/model/google/GrupCorreu";

export interface Calendari {
  id: number;
  email: string;
  nom: string;
  descripcio: string;
  tipus: string;
  usuarisLectura?: Array<Usuari>;
  usuarisEdicio?: Array<Usuari>;
  grupCorreuLectura?: Array<GrupCorreu>;
  grupCorreuEdicio?: Array<GrupCorreu>;
  label?: string;
  value?: string;
}
