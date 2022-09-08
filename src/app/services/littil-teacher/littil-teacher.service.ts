import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TeacherService } from '../../api/generated';
import { GuestTeacher } from '../../api/generated/model/guestTeacher';

@Injectable({
  providedIn: 'root',
})
export class LittilTeacherService {
  constructor(private teacherService: TeacherService) {}

  getById(id: string): Observable<GuestTeacher> {
    return this.teacherService.apiV1GuestTeachersIdGet(id);
  }

  getAll(): Observable<GuestTeacher[]> {
    return this.teacherService.apiV1GuestTeachersGet();
  }

  create(teacher: GuestTeacher): Observable<any> {
    return this.teacherService.apiV1GuestTeachersPost(teacher);
  }

  update(id: string, teacher: GuestTeacher): Observable<any> {
    return this.teacherService.apiV1GuestTeachersIdPut(id, teacher);
  }

  delete(id: string): Observable<number> {
    return this.teacherService.apiV1GuestTeachersIdDelete(id);
  }
}
