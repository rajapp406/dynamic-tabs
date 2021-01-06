import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { IUserLogin, UserLogin } from "../types/user.type";

@Injectable({
  providedIn: "root"
})
export class UserService {
  public userLogin$ = new BehaviorSubject<UserLogin>({
    type: "NOT_LOGGEDIN",
    data: []
  });
  private userLogin = this.userLogin$.asObservable();
  constructor(private http: HttpClient) {}
  loginUser(payload: IUserLogin): Observable<any> {
    return this.http.post(`${environment.endPoints.baseUri}/posts`, payload);
  }
}
