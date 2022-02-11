import { LightningElement } from "lwc";

export default class App extends LightningElement {
  nome = "Prand'Silar";
  phone = '99887-7445';
  cpf = '998.877.445.-66';
  age = 34;
  email = 'prandsilar@gmail.com';
  insta = 'https://www.instagram.com/prandini33/';
  linkedin = 'https://www.linkedin.com/in/lzprandini/';
  soulcode = 'https://soulcodeacademy.org';
  bar = 'https://www.emporiotambo.com.br/pub/media/resized/1300x800/ves/blog/xdecorar-bar-rustico.jpg.pagespeed.ic.J921kbrubN.webp';
  visible = true;
  anotherBar = 'https://uploads.metropoles.com/wp-content/uploads/2021/09/29120152/61abcd96534e4ac8d1a9f30e75e2a6be-600x400.jpg'
  sameBar = 'https://www.emporiotambo.com.br/pub/media/resized/1300x800/ves/blog/xdecorar-bar-rustico.jpg.pagespeed.ic.J921kbrubN.webp'
  magic() {
    this.visible = !this.visible;
  }

  alteraValores(){
    if(this.nome == "Prand'Silar"){
      this.nome = 'Silar Prand';
      this.phone = 'inexistente';
      this.cpf = 'só plano premium sabe';
      this.age = '29'
      this.bar = this.anotherBar;
    } else {
      this.nome = "Prand'Silar";
      this.phone = '99887-7445';
      this.cpf = '998.877.445.-66';
      this.age = 34;
      this.bar = this.sameBar;
    }

    
  }
}
