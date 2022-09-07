import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FormUtil } from './form.util';

describe('FormUtil', () => {
  describe('InValid', () => {
    it('should return false if control has no errors', () => {
      expect(
        FormUtil.InValid({
          errors: null,
        } as AbstractControl)
      ).toEqual(false);
    });
    it('should return false if control is not dirty', () => {
      expect(
        FormUtil.InValid({
          errors: {},
          dirty: false,
          touched: false,
        } as AbstractControl)
      ).toEqual(false);
    });
    it('should return false if control is not touched', () => {
      expect(
        FormUtil.InValid({
          errors: {},
          dirty: false,
          touched: false,
        } as AbstractControl)
      ).toEqual(false);
    });
    it('should return true if control has error and is dirty and touched', () => {
      expect(
        FormUtil.InValid({
          errors: {},
          dirty: true,
          touched: true,
        } as AbstractControl)
      ).toEqual(true);
    });

    it('should return false if control is undefined', () => {
      expect(FormUtil.InValid(undefined as any)).toEqual(false);
    });
  });

  describe('ValidateAll', () => {
    it('should validate formGroup', () => {
      let spy = jest.spyOn(FormUtil, 'ValidateAll');
      const formGroup = new FormGroup({
        name: new FormControl('', Validators.required),
      });
      expect(formGroup.controls['name'].touched).toEqual(false);
      FormUtil.ValidateAll(formGroup);
      expect(spy).toHaveBeenCalledTimes(1);
      expect(formGroup.controls['name'].touched).toEqual(true);
    });

    it('should validate formGroup with formarray', () => {
      let spy = jest.spyOn(FormUtil, 'ValidateAll');
      const formGroup = new FormGroup({
        name: new FormControl('', Validators.required),
        array: new FormArray([new FormControl('', Validators.required)]),
      });
      expect(formGroup.controls['name'].touched).toEqual(false);
      FormUtil.ValidateAll(formGroup);
      expect(spy).toHaveBeenCalledTimes(3);
      expect(formGroup.controls['name'].touched).toEqual(true);
    });
  });

  describe('ContainsError', () => {
    it('should return true if control has errors', () => {
      const formGroup = new FormGroup({
        name: new FormControl('', Validators.required),
      });
      expect(
        FormUtil.ContainsError(formGroup.controls['name'], 'required')
      ).toBeTruthy();
    });
    it('should return false if control has no errors', () => {
      const formGroup = new FormGroup({
        name: new FormControl('name', Validators.required),
      });
      expect(
        FormUtil.ContainsError(formGroup.controls['name'], 'required')
      ).toBeFalsy();
    });
    it('should return false if control is undefined', () => {
      expect(FormUtil.ContainsError(undefined as any, 'error')).toBeFalsy();
    });
    it('should return false if control is undefined', () => {
      expect((FormUtil as any).InValidErrors(undefined as any)).toEqual(null);
    });
  });
});
