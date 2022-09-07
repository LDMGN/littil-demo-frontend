import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { ModalController } from './modal.controller';

describe('ModalController', () => {
  let controller: ModalController;

  class dialogMock {
    open() {
      return {
        afterClosed: () => of({}),
      };
    }
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [{ provide: MatDialog, useValue: dialogMock }],
    });
    controller = TestBed.inject(ModalController);
  });
  it('should be created', () => {
    expect(controller).toBeTruthy();
  });
});
