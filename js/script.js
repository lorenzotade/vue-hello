// creo una costante partendo da Vue che
// conterrà tutti i dati e la logica della
// mia app
const app = new Vue({

  // linko Vue al div app in html
  el: '#app',

  // sezione contenente le mie variabili
  data: {
    msg: 'Ciao Vue!',
    cssClass: '',
    input: '',
    txt: '',
    imgSrc: 'img/gattino.jpeg'
  },

  // sezione contenente le mie funzioni
  methods: {

    // prende una stringa classe come parametro
    // e la cambia a cssClass in data
    changeColor(classe) {
      this.cssClass = classe;
    },

    // quando chiamata assegna a msg
    // il valore di input (che viene assegnato
    // da v-model in html) e resetta il campo
    inputTxt() {
      this.msg = this.txt;
      this.txt = '';
    },

    // quando chiamata assegna a cssClass
    // il valore di input (che viene assegnato
    // da v-model in html) e resetta il campo
    inputColor() {
      this.cssClass = this.input;
      this.input = '';
    }

  }

}); 