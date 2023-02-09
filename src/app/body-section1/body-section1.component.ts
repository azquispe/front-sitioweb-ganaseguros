import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-body-section1',
  templateUrl: './body-section1.component.html',
  styleUrls: ['./body-section1.component.scss']
})
export class BodySection1Component implements OnInit {

  nro:string = '4886793';
  exp:string = 'LP';
  comp:string = '';
  docto:string = 'CI';
  fecha:string = '08/11/1999';

  captchaChecked:boolean = false;
  gifActive = false;

  @Output() searchResponse = new EventEmitter<{ value: any; id: string; }[][]>();
  @Output() featureSelected = new EventEmitter<string>();

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  //variable para seccion mostrada
  onSelect(feature: string){
    this.featureSelected.emit(feature);
  }

  //validar solo ingreso de numero
  numberOnly(event: any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  setVars(event: any){
    console.log(event);
  }

  getServiceResponce(){
    this.gifActive = true;
    //const subscribeUrl = 'https://api-webmovil.azurewebsites.net/api/app-web/v1/consulta-poliza'
    const subscribeUrl = 'https://api-consultapolizas.azurewebsites.net/api/app-web/v1/consulta-poliza'
    const httpBody = {nroDocumento: this.nro,ciudadExpedido: this.exp,fechaNacimiento: this.fecha,complemento:this.comp};
    this.http.post<any>(subscribeUrl,httpBody)
    .pipe(
      map((responseData:any) => {
        //console.log(responseData);
        const postArray = [];
        let insideArray = [];
        let insideResponseArray = [];
        responseData = responseData['datosPoliza'];
        for (let key in responseData) {
          if(responseData.hasOwnProperty(key)){
            insideResponseArray = responseData[key];
            for (let keyInside in insideResponseArray) {
              if(insideResponseArray.hasOwnProperty(keyInside)){
                insideArray.push({ value:insideResponseArray[keyInside], id:keyInside });
              }
            }
            insideArray.push({ value:this.nro, id:'nro' });
            insideArray.push({ value:this.exp, id:'exp' });
            insideArray.push({ value:this.comp, id:'comp' });
            insideArray.push({ value:this.docto, id:'docto' });
            insideArray.push({ value:this.fecha, id:'fecha' });
            postArray.push(insideArray);
            insideArray = [];
          }
        }
        return postArray;
      })
    )
    .subscribe(responseData => {
      if(responseData.length == 0){
        this.onSelect('sec6');
      }else{
        this.onSelect('sec2');
        this.searchResponse.emit(responseData);
        //console.log(responseData);
      }
    });
  }

  captchaClick(){
    this.captchaChecked = !this.captchaChecked;
  }

}
