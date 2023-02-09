import { Component, Input } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ganaSegurosV1';
  loadedFeature = 'main';
  loginToken = '';
  foundData:{ value: any; id: string; }[][] = [[{value:'valor',id:'clave'}]];
  policyId = '';

  constructor(private http: HttpClient) {}

  onNavigate(feature: string){
    this.loadedFeature = feature;
  }

  onDataFound(searchData:{ value: any; id: string; }[][]){
    this.foundData = searchData;
  }

  policyIdRecived(policyRecived:string){
    this.policyId = policyRecived;
  }

  /*
  onRequest(){
    this.http.post('https://sociedadganadero--devtemp8.sandbox.my.salesforce.com/services/oauth2/token?grant_type=password&client_id=3MVG99VEEJ_Bj3.7I7xGG.Bq_J8F3a4MeRx2mQ_YyzMsOkrBBLD_brf0BO42IQUn2rtDSdv5ryAoCQLuDZcwP&client_secret=77ADEFF8025EEBE56BC9DBA7AC5A45685293C40B2A553F1A4B35DCC0CE454E68&username=ararancibia@bg.com.bo.devtemp8&password=fa3BO2aa77cPSdT836OF12yYKHE2fj7Y', '')
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
      this.loginToken = responseData[0].value;
      //console.log(this.loginToken);
      //this.getService1();
    });
  }

  getService1(){
    let headers = new HttpHeaders();
    //const authroizationToken = 'bearer '.concat(this.loginToken);
    const authroizationToken = 'bearer 00D8I0000008hoz!ARUAQLqy6Q43kaO0Yl6.Wb7AVNCoO1R9txrgpUhTozL5_Fs5H4jZUD.l3pURMHepKJjjkK2E.fS3KmAeYi4jiumJDYWPCdL4';
    const httpBody = new HttpParams();
    const subscribeUrl = 'https://sociedadganadero--devtemp8.sandbox.my.salesforce.com/services/apexrest/vlocity_ins/v1/integrationprocedure/bg_ti_g_getPersonInformation';
    httpBody.set('searchCriteria', '3');
    httpBody.set('InsuranceNumber', 'DES-NL-00732');
    //const headers = {'Authorization': authroizationToken};
    //const body = {searchCriteria: '3', InsuranceNumber: 'DES-NL-00732'};
    //headers = headers .set('content-type', 'application/json');
    //headers = headers .set('Access-Control-Allow-Origin', '*');
    //headers = headers .set("Access-Control-Allow-Credentials", "true");
    //headers = headers .set("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    //headers = headers .set("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    headers = headers .set('Authorization', authroizationToken);
    //console.log(headers);

    let params = new HttpParams().set('param1', 'asd'); // create params object
    params = params.append('param2', 'asd'); // add a new param,
    //headers = headers.append('Authorization', authroizationToken);
    //headers = headers.append('Authorization', authroizationToken);
    this.http.post<any>(subscribeUrl, '', { 'headers':headers, 'params': params })
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
      console.log(responseData);
    });
  }
  */
}
