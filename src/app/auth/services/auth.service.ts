import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {LoginResponse} from '../models/login-response';
import {LoginRequest} from '../models/login-request';
import {jwtDecode} from 'jwt-decode';
import {User} from '../models/user';
import {RegisterRequest} from '../models/register-request';
import {RegisterResponse} from '../models/register-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl: string = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<LoginResponse>{
    const loginData: LoginRequest = {username, password};

    return this.http.post<LoginResponse>(`${this.apiUrl}/auth/login`, loginData);
  }

  register(userData: RegisterRequest): Observable<RegisterResponse>{

    return this.http.post<RegisterResponse>(`${this.apiUrl}/auth/register`, userData);
  }

  //método par guardar el token en localStorage
  setToken(token: string): void{
    localStorage.setItem('token', token);
  }

  //método para obtener el token
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  //método para logout
  logout(): void{
    localStorage.removeItem('token');
  }

  //método para validar si el token está expirado
  isTokenExpired(token: string): boolean{
    try{
      const decoded: {exp: number} = jwtDecode(token);
      if(!decoded.exp){
        return true; //Se considera expirado si no tienen expiración
      }
      const expirationDate = new Date(decoded.exp * 1000);
      return expirationDate < new Date();
    } catch (error){
      return true;
    }
  }

}
