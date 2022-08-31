import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { createHttpFactory, SpectatorHttp } from '@ngneat/spectator';
import { TeacherService } from '../../api/generated';
import { LittilSchoolService } from './littil-school.service';

describe('LittilSchoolService', () => {
  let service: LittilSchoolService;
  let spectator: SpectatorHttp<LittilSchoolService>;
  const createHttp = createHttpFactory(LittilSchoolService);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TeacherService],
    });
    service = TestBed.inject(LittilSchoolService);
    spectator = createHttp();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  //   it('test get by id', () => {
  //     spectator.service.get('test').subscribe();
  //     spectator.expectOne('api/v1/teacher/test', HttpMethod.GET);
  //   });

  //   it('test create new teacher', () => {
  //     let teacher = new Teacher(
  //       undefined,
  //       'Gast',
  //       'Docent',
  //       'gast@docent.nl',
  //       '1000AA'
  //     );
  //     spectator.service.create(teacher).subscribe();
  //     spectator.expectOne('api/v1/teacher', HttpMethod.POST);
  //   });

  //   it('test update existing teacher', () => {
  //     let teacher = new Teacher(
  //       'abcd-1234',
  //       'Gast',
  //       'Docent',
  //       'gast@docent.nl',
  //       '1000AA'
  //     );
  //     spectator.service.update(teacher).subscribe();
  //     spectator.expectOne('api/v1/teacher', HttpMethod.PUT);
  //   });
});
