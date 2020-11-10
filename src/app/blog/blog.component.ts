import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/post';
import { DatosPostsService } from '../services/datos-posts.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  arrayMostrado: Post[];

  constructor(private datosPosts: DatosPostsService) { }

  ngOnInit(): void {

    this.datosPosts.getAllPosts()
      .then(response => {
        this.arrayMostrado = response;
        console.log(this.arrayMostrado);

      })
      .catch(error => console.log(error));
  }

  async filtrarCategoria(pCategoria) {
    this.arrayMostrado = await this.datosPosts.getPostByCategory(pCategoria)
  }

}
