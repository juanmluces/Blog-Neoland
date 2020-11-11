import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from '../interfaces/post';
import { Categoria, DatosPostsService } from '../services/datos-posts.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;
  categorias: Categoria[];
  postPublicado: string;

  constructor(private datosPostsService: DatosPostsService) {

    this.categorias = this.datosPostsService.arrayCategorias;

    this.formulario = new FormGroup({
      titulo: new FormControl('', [
        Validators.required,
        Validators.minLength(2)
      ]),
      texto: new FormControl('', [
        Validators.required,
        Validators.minLength(10)
      ]),
      autor: new FormControl(''),
      imagen: new FormControl('', [
        Validators.pattern(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/)
      ]),
      categoria: new FormControl('', [
        Validators.required
      ]),

    });

  }

  ngOnInit(): void {


  }

  async onSubmit(newPost: Post) {

    if (!newPost.autor) newPost.autor = 'Anonymous'
    if (!newPost.imagen) newPost.imagen = 'https://quicksprout-wpengine.netdna-ssl.com/wp-content/uploads/2014/08/stockphotography.jpg'


    newPost.id = await this.datosPostsService.getNewPostId();
    newPost.fecha = new Date();
    this.postPublicado = await this.datosPostsService.addNewPost(newPost);
    this.formulario.reset()
    setTimeout(() => {
      this.postPublicado = null;
    }, 5000);


  }

}
