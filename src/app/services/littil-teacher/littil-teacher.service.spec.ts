import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import {
  createHttpFactory,
  HttpMethod,
  SpectatorHttp,
} from '@ngneat/spectator';
import { TeacherService } from '../../api/generated';
import { GuestTeacher } from '../../api/generated/model/guestTeacher';
import { LittilTeacherService } from './littil-teacher.service';

describe('LittilTeacherService', () => {
  let baseUrl = 'http://localhost/';
  let service: LittilTeacherService;
  let spectator: SpectatorHttp<LittilTeacherService>;
  const createHttp = createHttpFactory(LittilTeacherService);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TeacherService],
    });
    service = TestBed.inject(LittilTeacherService);
    spectator = createHttp();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getById', () => {
    it('should get teacher by id', () => {
      spectator.service.getById('123').subscribe();
      spectator.expectOne(
        baseUrl + 'api/v1/guest-teachers/123',
        HttpMethod.GET
      );
    });
  });

  describe('getAll', () => {
    it('should get all teachers', () => {
      spectator.service.getAll().subscribe();
      spectator.expectOne(baseUrl + 'api/v1/guest-teachers', HttpMethod.GET);
    });
  });

  describe('create', () => {
    it('should create new teacher', () => {
      spectator.service
        .create({
          id: undefined,
          firstName: 'Gast',
          surname: 'Docent',
          address: 'Street 1',
          postalCode: '1000AA',
        } as GuestTeacher)
        .subscribe();
      spectator.expectOne(baseUrl + 'api/v1/guest-teachers', HttpMethod.POST);
    });
  });

  describe('update', () => {
    it('should update teacher', () => {
      spectator.service
        .update('123', {
          id: '123',
          firstName: 'Gast',
          surname: 'Docent',
          address: 'Street 1',
          postalCode: '1000AA',
        } as GuestTeacher)
        .subscribe();
      spectator.expectOne(
        baseUrl + 'api/v1/guest-teachers/123',
        HttpMethod.PUT
      );
    });
  });

  describe('delete', () => {
    it('should delete teacher', () => {
      spectator.service.delete('123').subscribe();
      spectator.expectOne(
        baseUrl + 'api/v1/guest-teachers/123',
        HttpMethod.DELETE
      );
    });
  });
});
