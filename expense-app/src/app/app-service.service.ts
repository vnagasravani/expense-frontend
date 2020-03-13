import { Injectable } from '@angular/core';
import {HttpClientModule,HttpParams, HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http:HttpClient) { }
  private url = "/api";
  

 public signUp(data):Observable<any>{
    const params = new HttpParams().
    set('firstName',data.firstName)
    .set('lastName',data.lastName)
    .set('email',data.email)
    .set('mobileNumber',data.mobileNumber)
    .set('password',data.password)
  
  
    return this.http.post(`${this.url}/signup`,params);

  }//end signup

  public getCountryNames(){
    return this.http.get('../assets/CountryList.json');
  
  }//end getCountryNames

  public getCountryNumbers(){
    return this.http.get('../assets/CountryCodes.json');
  }//end getCountryNumbers

  
 public login(data):Observable<any>{
      const params = new HttpParams().
      set('email',data.email)
      .set('password',data.password);
      return this.http.post(this.url+'/login',params);

  }//end login

  public forgotPassword (email):Observable<any>{
    console.log('in app service0',email);
    const params = new HttpParams()
    .set('email',email);
    return this.http.post(this.url+'/resetpassword',params);
  }//end forgot password

  public resetPassword (rpassword , newpassword):Observable<any>{
    const params = new HttpParams()
    .set('recoveryPassword',rpassword)
    .set('password',newpassword);
    return this.http.post(this.url+'/updatepassword',params);
  } //end reset password

  public groupCreation(name,description):Observable<any>{
    const params = new HttpParams()
    .set('groupName',name)
    .set('userId',Cookie.get('userId'))
    .set('description',description)
    .set('authToken', Cookie.get('AuthToken'))
    .set('userName',Cookie.get('userName'));
    return this.http.post(this.url+'/creategroup',params);
  }//end group creation

  public getGroupDetails(groupName):Observable<any>{
    
    return this.http.get(this.url+'/getgroup/'+groupName);
  } //end getGroupDetails

  public getAllUsers (pageValue,limit):Observable<any>{
    const params = new HttpParams() 
    .set('pageValue',pageValue)
    .set('authToken', Cookie.get('AuthToken'))
    .set('limit',limit);
    return this.http.post(this.url+'/all',params);
  } //end getAllUsers

  public getExpenses (pageValue,limit,groupName):Observable<any>{
    const params = new HttpParams()
    .set('skip',pageValue)
    .set('limit',limit)
    .set('groupName',groupName)
    .set('authToken', Cookie.get('AuthToken'));
    return this.http.post(this.url+'/getexpenses',params);
  } //end getExpenses

  public getExpenseHistory(expenseId):Observable<any>{
    return this.http.get(this.url+'/getexpensehistory/'+expenseId);
  } //end getExpenseHistory

  public logout(): Observable<any> {
    const params = new HttpParams()
    .set('authToken', Cookie.get('AuthToken'))
     return this.http.post(`${this.url}/out`, params);

  } // end logout function

  public getUser():Observable<any>{
    let authToken = Cookie.get('AuthToken');
    return this.http.get(this.url+'/user/'+Cookie.get('userId')+'?authToken='+authToken);

  } //end getUser

  public getUserInfo(){
    return JSON.parse(localStorage.getItem('userInfo'));
  }//end getUserInfo

  public setUserInfo(data){
    localStorage.setItem('userInfo',JSON.stringify(data))
  }//end setUserInfo

}
