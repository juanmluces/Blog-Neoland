import { Categoria } from '../services/datos-posts.service';


export interface Post {
  titulo: string;
  texto: string;
  autor: string;
  imagen: string;
  fecha: string;
  categoria: Categoria;
}
