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

  private arrayPosts: Post[];
  private postEdit: Post; // el post que se va a modificar en la seccion de Admin
  editMode: Boolean; // modo edit activo o desactivado en formulario
  arrayCategorias: Categoria[] //variable publica para que los demaás componentes pueda acceder al array de categorias



  constructor() {

    this.arrayCategorias = [
      Categoria.deporte,
      Categoria.hobbies,
      Categoria.informatica,
      Categoria.salud
    ]

    if (localStorage.getItem('posts')) {
      this.arrayPosts = JSON.parse(localStorage.getItem('posts'))
    } else {
      // posts de prueba, se deben borrar si se piensa utilizar esta página para monetizar y ser millonario
      this.arrayPosts = [
        {
          titulo: 'Kenny Golladay ruled out by Lions',
          texto: `ALLEN PARK -- The Detroit Lions haven’t won without Kenny Golladay all season. Now with their backs very much against the wall, they have no other choice but to give it another try.

        The Lions have officially ruled out Golladay for Sunday’s game against the Washington Football Team at Ford Field, while tight end T.J. Hockenson (foot), offensive lineman Halapoulivaati Vaitai (foot), guard Joe Dahl (back), linebacker Jarrad Davis (knee), defensive tackle Nick Williams (shoulder) and receiver Jamal Agnew (ribs) are all questionable.

        “Obviously, we jinxed ourselves a couple of weeks ago because I don’t think we had anybody injured there," head coach Matt Patricia said. “We were feeling pretty good about it. And we got a bunch of (injuries) here in a couple of weeks.”
        
        Golladay’s absence is the biggest concern. He’s so important to what Detroit does offensively, especially down the field and in the red zone. He hit triple-digits in back-to-back wins against Jacksonville and Atlanta, and caught a contested 29-yard catch that set up the winning play on the road against the Falcons.
        
        But he hasn’t caught a pass since, and the Lions haven’t won a game since. They’re 0-3 without Golladay this season -- he also missed two games to open the season because of a hamstring injury -- and 0-4 when he doesn’t play four quarters.
        Note to readers: if you purchase something through one of our affiliate links we may earn a commission.`,
          autor: 'Juan Miguel Luces',
          imagen: 'https://cdn.mos.cms.futurecdn.net/J9KeYkEZf4HHD5LRGf799N.jpg',
          fecha: new Date,
          categoria: Categoria.hobbies,
          id: 1
        },
        {
          titulo: "Computer model uses cellphone data to predict COVID-19's spread in US cities",
          texto: `A team of researchers from Stanford and Northwestern universities have created a computer model that predicts how COVID-19 spreads in cities by studying anonymized cellphone data from 98 million Americans in 10 major cities.

        Their findings indicate that most infections occur at so-called super-spreader sites where people are in contact for long periods of time, such as at restaurants or gyms that have reopened at or near full capacity. Researchers said the model also can help explain some of the reasons COVID-19 has hit communities of color particularly hard.
        
        The new research comes at a time when new COVID-19 cases in the U.S. are surging across the country and cities have struggled to quell the virus's spread -- shutdown and reopening plans have varied and had varying degrees of success as local officials have struggled to balance health risks with economic losses.
        
        "What our model can do is start to inform the public and policymakers on where we fall on this tradeoff, and how many visits and how many infections would occur at each level of reopening," Serina Chang, the co-first author of the paper and a Ph.D. student at Stanford University, told ABC News.`,
          autor: 'Juan Miguel Luces',
          imagen: 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          fecha: new Date,
          categoria: Categoria.informatica,
          id: 2
        },
        {
          titulo: "College football kickoff: Don’t expect many coaching changes",
          texto: `This is normally the time for narrowing down playoff contenders to a mere handful at one end of the college football success spectrum. At the other, thoughts turn to whether it’s time for struggling teams to make coaching changes.

          Revitalizing programs is still important, though it pales in comparison to the common aim of merely holding entire athletic departments together in the middle of a pandemic.
          
          The cost of paying someone not to coach has probably never required a greater percentage of available resources than now. And the perception of doing so while asking the gainfully employed in a department to take pay cuts or while slashing jobs is not a pleasant one.
          
          Besides money, there’s also this matter: How can anyone fairly assess coaching performance in the middle of a pandemic?
          Amid college football’s starts and stops is one central question: Can it finish?
          
          The variables are far greater than mere injury luck and player development. The former is a fact of life, and coaches are on the hook for the latter all the time. Most coaches — especially most football coaches — are creatures of routine, which has been virtually nonexistent since March.
          
          A truncated or eliminated spring practice. Substantially altered summer workouts. Players opting out over virus concerns. A late start to the season for nearly everyone. A spate of postponements and cancellations. Players opting out in the middle of the season. The need to be conscious of mental health concerns in the midst of a full-blown public health emergency now in its ninth month.
          
          Then there’s the problem of keeping teams in the middle of disappointing seasons fully engaged over the next month amid a virus caseload spike. Some of the sport’s best motivators could very well struggle with that one.`,
          autor: 'Juan Miguel Luces',
          imagen: 'https://images.pexels.com/photos/186076/pexels-photo-186076.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          fecha: new Date,
          categoria: Categoria.deporte,
          id: 3
        },
        {
          titulo: "'Don't give up': German hospital in for virus long haul",
          texto: `No matter if a viable vaccine is coming on the market soon or not, Germany's Aachen hospital already knows there will still be a marathon to run when it comes to treating patients worst hit by the coronavirus.

          "We've learnt that it's an illness with very long legs, and we must not give up after 10 or 15 days but keep at it," Gernot Marx, who heads the intensive care unit at the university hospital, told AFP.
          
          "The patients who have received the longest treatment were with us in intensive care for 60 days and they really came back from the brink. That is certainly a very important lesson we have learnt."
          
          Marx and his team were on the frontlines when the pandemic first hit Germany in the spring.
          
          During that first wave, half of the Covid-19 patients in Germany who were put on ventilators succumbed to the disease.
          
          This time round, Marx, 54, hopes more lives can be saved as healthcare practitioners have a better understanding of how best to treat the most severe cases.
          
          Recalling a patient in his fifties who ended up in intensive care even though he had no pre-conditions, the doctor said: "We fought for weeks.
          
          "He was put on all sorts of machines that we had available and today, he's back home and in pretty good shape.
          
          "That shows that every effort is worth it."
          
          - 'Fear gives way to routine' -
          
          Behind the glass door of one of the hospital's critical care units, four patients are kept alive thanks to respiratory machines and infusions.
          
          Wearing masks, surgical gowns, glasses and two pairs of gloves each, Marx and his team are on their ward rounds.
          
          Today, it's the patient in bed 9 who needs the most attention.`,
          autor: 'Juan Miguel Luces',
          imagen: 'https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          fecha: new Date,
          categoria: Categoria.salud,
          id: 4
        },
      ];
    }

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
      localStorage.setItem('posts', JSON.stringify(this.arrayPosts))
      resolve(`El Post ${newPost.titulo} se ha agregado Correctamente!`);
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

  //busca un post segun el id
  getPostById(pId: number): Promise<Post> {
    return new Promise((resolve, reject) => {
      resolve(this.arrayPosts.find(post => post.id === pId));
      reject('Ha ocurrido un error');
    })
  }

  //añade un id al post nuevo
  getNewPostId(): Promise<number> {
    return new Promise((resolve, reject) => {
      const id = (this.arrayPosts.length + 1);
      resolve(id);
    })
  }

  //------------------seccion ADMIN ---------------------

  //Borrar un post
  deletePost(pIndex: number): Promise<string> {
    return new Promise((resolve, reject) => {
      this.arrayPosts.splice(pIndex, 1);
      // actualizar los id de los post al borrar un elemento del array
      this.arrayPosts.forEach(post => post.id = (this.arrayPosts.indexOf(post) + 1));
      localStorage.setItem('posts', JSON.stringify(this.arrayPosts))
      resolve('Post Borrado!');
      reject(error => console.log(error));
    });
  }

  // activa el modo editar y selecciona el post a editar
  activateEditMode(pIndex: number): Promise<string> {
    return new Promise((resolve, reject) => {
      this.postEdit = this.arrayPosts[pIndex];
      this.editMode = true
      resolve(this.postEdit.titulo);
    })
  }


  // se envia la info del post a editar para el formulario
  getPostEdit(): Promise<Post> {
    return new Promise((resolve, reject) => {
      resolve(this.postEdit);
      reject(error => console.log(error));
    })
  }


  // se modifica el post editado en el array
  modifyPost(pPost: Post, pIndex: number): Promise<string> {
    return new Promise((resolve, reject) => {
      this.arrayPosts.splice(pIndex, 1, pPost);
      localStorage.setItem('posts', JSON.stringify(this.arrayPosts))
      resolve('Post Modificado')
    })
  }

}
