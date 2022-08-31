import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Teacher, TeacherService } from '../../api/generated';

@Injectable({
  providedIn: 'root',
})
export class LittilTeacherService {
  constructor(private teacherService: TeacherService) {}

  getById(id: string): Observable<Teacher> {
    return this.teacherService.apiV1TeacherIdGet(id);
  }

  getAll(): Observable<Teacher[]> {
    return this.teacherService.apiV1TeacherGet();
  }

  create(teacher: Teacher): Observable<any> {
    return this.teacherService.apiV1TeacherPost(teacher);
  }

  update(id: string, teacher: Teacher): Observable<any> {
    return this.teacherService.apiV1TeacherIdPut(id, teacher);
  }

  delete(id: string): Observable<number> {
    return this.teacherService.apiV1TeacherIdDelete(id);
  }
}
