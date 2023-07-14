import { Component, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  imports: [
    // otros módulos importados
    MatButtonModule
  ],
  // otros metadatos del módulo
})
export class AppModule { }


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'laboratorioWeb2WilliamCubero';
   //btn: boolean=false;
   //onButtonClick(){
    //this.btn=true;

   }
//}
