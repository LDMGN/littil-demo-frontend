import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { School, SchoolService } from '../../api/generated';
import { ApiV1SchoolsGet201Response } from '../../api/generated/model/apiV1SchoolsGet201Response';

@Injectable({
  providedIn: 'root',
})
export class LittilSchoolService {
  constructor(private schoolService: SchoolService) {}

  getById(id: string): Observable<ApiV1SchoolsGet201Response> {
    return this.schoolService.apiV1SchoolsIdGet(id);
  }

  getAll(): Observable<School[]> {
    return this.schoolService.apiV1SchoolsGet();
  }

  create(school: School): Observable<any> {
    return this.schoolService.apiV1SchoolsPost(school);
  }

  update(id: string, school: School): Observable<any> {
    return this.schoolService.apiV1SchoolsIdPut(id, school);
  }

  delete(id: string): Observable<number> {
    return this.schoolService.apiV1SchoolsIdDelete(id);
  }
}
