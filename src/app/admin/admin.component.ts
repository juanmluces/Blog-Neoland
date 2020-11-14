import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/post';
import { DatosPostsService } from '../services/datos-posts.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  arrayPosts: Post[];
  postBorrado: string;

  constructor(private datosPostsService: DatosPostsService) { }

  ngOnInit(): void {

    this.datosPostsService.getAllPosts()
      .then(response => this.arrayPosts = response)
      .catch(error => console.log(error));
  }

  async onClickEdit(pIndex) {
    const response = await this.datosPostsService.postToEdit(pIndex)
    console.log(response);
  }

  async onClickDelete(pIndex) {
    const response = await this.datosPostsService.deletePost(pIndex)
    this.postBorrado = response;
    setTimeout(() => {
      this.postBorrado = null;
    }, 5000);

  }

}
