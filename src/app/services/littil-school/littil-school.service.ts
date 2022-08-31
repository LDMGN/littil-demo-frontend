import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { School, SchoolService } from '../../api/generated';

@Injectable({
  providedIn: 'root',
})
export class LittilSchoolService {
  constructor(private schoolService: SchoolService) {}

  getById(id: string): Observable<School> {
    return this.schoolService.apiV1SchoolIdGet(id);
  }

  getAll(): Observable<School[]> {
    return this.schoolService.apiV1SchoolGet();
  }

  create(school: School): Observable<any> {
    return this.schoolService.apiV1SchoolPost(school);
  }

  update(id: string, school: School): Observable<any> {
    return this.schoolService.apiV1SchoolIdPut(id, school);
  }

  delete(id: string): Observable<number> {
    return this.schoolService.apiV1SchoolIdDelete(id);
  }
}
