import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-body-section3',
  templateUrl: './body-section3.component.html',
  styleUrls: ['./body-section3.component.scss']
})
export class BodySection3Component implements OnInit {

  nombreUsuario = '';
  nombrePoliza = '';
  nombreProducto = '';
  nombreTomador = '';
  nombreAsegurado = '';
  lstBeneficiarios = [];
  numeroOperacion = '';
  fechaInicio = '';
  fechaFin = '';
  estado = '';
  tipoProducto = '';
  frecuencia = '';
  montoPrima = '';
  precio = '';
  nro = '';
  exp = '';
  comp = '';
  docto = '';
  fecha = '';
  pdfBase64 = '';
  idPoliza = '';

  @Output() featureSelected = new EventEmitter<string>();
  @Input() parentFoundData:{ value:any, id:string}[][] = [];
  @Input() policyId:string = '';

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  onSelect(feature: string){
    this.featureSelected.emit(feature);
  }

  ngOnChanges(){
    this.parentFoundData.forEach(policy =>{
      if(policy[0].value == this.policyId){
        policy.forEach(element => {
          switch(element.id) {
            case 'nombreTomador': {
              this.nombreUsuario = element.value;
              this.nombreTomador = element.value;
              break;
            }
            case 'nombrePoliza': {
              this.nombrePoliza = element.value;
              break;
            }
            case 'nombreProducto': {
              this.nombreProducto = element.value;
              break;
            }
            case 'nombreAsegurado': {
              this.nombreAsegurado = element.value;
              break;
            }
            case 'lstBeneficiarios': {
              this.lstBeneficiarios = element.value;
              break;
            }
            case 'numeroOperacion': {
              this.numeroOperacion = element.value;
              break;
            }
            case 'fechaInicio': {
              this.fechaInicio = element.value;
              this.fechaInicio = this.fechaInicio.substring(0, 10);
              break;
            }
            case 'fechaFin': {
              this.fechaFin = element.value;
              this.fechaFin = this.fechaFin.substring(0, 10);
              break;
            }
            case 'estado': {
              this.estado = element.value;
              break;
            }
            case 'tipoProducto': {
              this.tipoProducto = element.value;
              break;
            }
            case 'frecuencia': {
              this.frecuencia = element.value;
              break;
            }
            case 'montoPrima': {
              this.montoPrima = element.value;
              break;
            }
            case 'precio': {
              this.precio = element.value;
              break;
            }
            case 'nro': {
              this.nro = element.value;
              break;
            }
            case 'exp': {
              this.exp = element.value;
              break;
            }
            case 'comp': {
              this.comp = element.value;
              break;
            }
            case 'docto': {
              this.docto = element.value;
              break;
            }
            case 'fecha': {
              this.fecha = element.value;
              break;
            }
            case 'polizaId': {
              this.idPoliza = element.value;
              break;
            }

          }
        });
      }
    });
    this.getServiceResponce();
  }

  getServiceResponce(){
    //const subscribeUrl = 'https://api-webmovil.azurewebsites.net/api/app-web/v1/descargar-poliza/'+this.idPoliza;
    const subscribeUrl = 'https://api-consultapolizas.azurewebsites.net/api/app-web/v1/descargar-poliza/'+this.idPoliza;
    
    const httpBody = {nroDocumento: this.nro,extension: this.exp,fechaNacimiento: this.fecha,complemento:this.comp};
    this.http.get<any>(subscribeUrl)
    .pipe(
      map((responseData:any) => {
        const postArray = [];
        for (let key in responseData) {
          if(responseData.hasOwnProperty(key)){
            if(key == 'documento' && responseData[key] != null){
              this.pdfBase64 = `data:application/pdf;base64,${responseData[key]}`;
            }
            postArray.push({ value:responseData[key], id:key });
          }
        }
        return postArray;
      })
    )
    .subscribe(responseData => {
      //console.log(responseData);
    });
  }

  getPdf(){
    const source = this.pdfBase64;
    const link = document.createElement("a");
    link.href = source;
    link.download = `poliza_ganaseguros.pdf`;
    link.style.background = 'transparent';
    link.click();
  }

}
