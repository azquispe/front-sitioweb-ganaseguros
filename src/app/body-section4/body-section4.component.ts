import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-body-section4',
  templateUrl: './body-section4.component.html',
  styleUrls: ['./body-section4.component.scss']
})
export class BodySection4Component implements OnInit {

  nombres:string = "";
  apellidos:string = "";
  telefonoCelular:string = "";
  correo:string = "";
  ciudad:number = 0;
  option1:boolean = false;
  option2:boolean = false;
  detalle:string = "";
  producto:number = 0;

  @Output() featureSelected = new EventEmitter<string>();
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSelect(feature: string){
    this.getServiceResponce();
    this.featureSelected.emit(feature);
  }

  getServiceResponce(){
    //const subscribeUrl = 'https://api-webmovil.azurewebsites.net/api/app-web/v1/solicitud-seguro'
    const subscribeUrl = 'https://api-consultapolizas.azurewebsites.net/api/app-web/v1/solicitud-seguro'
    
    const httpBody = {
      nombres: this.nombres,
      apellidos: this.apellidos,
      telefonoCelular: this.telefonoCelular,
      correo: this.correo,
      ciudad: this.ciudad,
      tipoProductoId: this.producto,
      tieneSeguroNosotros: this.option1,
      tieneSeguroOtros: this.option2,
      descripcion: this.detalle,
      aplicacionId:1002
    };
    this.http.post<any>(subscribeUrl,httpBody)
    .pipe(
      map((responseData:any) => {
        const postArray = [];
        for (let key in responseData) {
          if(responseData.hasOwnProperty(key)){
            postArray.push({ value:responseData[key], id:key });
          }
        }
        return postArray;
      })
    )
    .subscribe(responseData => {
      //console.log(responseData);
      //console.log(this.option1);
      //console.log(this.option2);
    });
  }

}
