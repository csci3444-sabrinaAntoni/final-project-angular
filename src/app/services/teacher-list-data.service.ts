import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TeacherListDataService {

  constructor(public http:Http) { }

  getTeachers() {
    return this.http.get('http://localhost:9016/api/v1/teachers')
      .map(response => response.json());
  }

}
