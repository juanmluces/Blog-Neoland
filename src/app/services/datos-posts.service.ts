import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post';

export enum Categoria {
  informatica = 'Informática',
  deporte = 'Deporte',
  salud = 'Salud',
  hobbies = 'Hobbies'
}

@Injectable({
  providedIn: 'root'
})
export class DatosPostsService {

  arrayPosts: Post[];



  constructor() {

    this.arrayPosts = [
      {
        titulo: 'Prueba Post 1 INFORMATICA',
        texto: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, neque ab saepe numquam illum minima laudantium dignissimos ipsam vitae, commodi odit culpa corrupti. Nam ab voluptatem aliquid aliquam a voluptas sint reiciendis, laborum quos doloremque earum repudiandae velit? Nemo, totam!',
        autor: 'Juan Miguel Luces',
        imagen: 'https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        fecha: '10/11/2020',
        categoria: Categoria.informatica,
        id: 1
      },
      {
        titulo: 'Prueba Post 2 DEPORTE',
        texto: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, neque ab saepe numquam illum minima laudantium dignissimos ipsam vitae, commodi odit culpa corrupti. Nam ab voluptatem aliquid aliquam a voluptas sint reiciendis, laborum quos doloremque earum repudiandae velit? Nemo, totam!',
        autor: 'Juan Miguel Luces',
        imagen: 'https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        fecha: '10/11/2020',
        categoria: Categoria.deporte,
        id: 2
      },
      {
        titulo: 'Prueba Post 3 HOBBIES',
        texto: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, neque ab saepe numquam illum minima laudantium dignissimos ipsam vitae, commodi odit culpa corrupti. Nam ab voluptatem aliquid aliquam a voluptas sint reiciendis, laborum quos doloremque earum repudiandae velit? Nemo, totam!',
        autor: 'Juan Miguel Luces',
        imagen: 'https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        fecha: '10/11/2020',
        categoria: Categoria.hobbies,
        id: 3
      },
      {
        titulo: 'Prueba Post 4 SALUD',
        texto: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, neque ab saepe numquam illum minima laudantium dignissimos ipsam vitae, commodi odit culpa corrupti. Nam ab voluptatem aliquid aliquam a voluptas sint reiciendis, laborum quos doloremque earum repudiandae velit? Nemo, totam!',
        autor: 'Juan Miguel Luces',
        imagen: 'https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        fecha: '10/11/2020',
        categoria: Categoria.salud,
        id: 4
      },
    ];

  }

  getAllPosts(): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      resolve(this.arrayPosts);
      reject('ha ocurrido un error');
    })
  }

  addNewPost(newPost: Post): Promise<string> {
    return new Promise((resolve, reject) => {
      this.arrayPosts.push(newPost);
      resolve(`El Post ${newPost.titulo} se ha agregado!`);
      reject('Ha ocurrido un error');
    });
  }

  getPostByCategory(pCategoria: string): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      const filteredList = this.arrayPosts.filter(post => post.categoria === pCategoria);
      resolve(filteredList);
      reject('Ha ocuriido un error');
    })
  }

  getPostById(pId: number): Promise<Post> {
    return new Promise((resolve, reject) => {
      resolve(this.arrayPosts.find(post => post.id === pId));
      reject('Ha ocurrido un error');
    })
  }

}
