import { Spectator } from '@ngneat/spectator';
import { createRoutingFactory } from '@ngneat/spectator/jest';
import { MockComponent, MockProvider } from 'ng-mocks';
import { ButtonComponent } from '../../components/button/button.component';
import { ModalController } from '../../components/modal/modal.controller';
import { LoginModalComponent } from '../login-modal/login-modal.component';
import { HomepageComponent } from './homepage.component';

describe('HomepageComponent', () => {
  let spectator: Spectator<HomepageComponent>;
  let modalController: ModalController;
  let modalControllerSpy: jest.SpyInstance;
  let openLoginModalSpy: jest.SpyInstance;

  const createComponent = createRoutingFactory({
    component: HomepageComponent,
    declarations: [
      MockComponent(LoginModalComponent),
      MockComponent(ButtonComponent),
    ],
    providers: [MockProvider(ModalController)],
  });

  beforeEach(() => {
    spectator = createComponent();
    modalController = spectator.inject(ModalController);
    modalControllerSpy = jest.spyOn(modalController, 'present');
    openLoginModalSpy = jest.spyOn(spectator.component, 'openLoginModal');
    spectator.detectChanges();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  describe('openLoginModal', () => {
    it('should call present modalController function [type=Login]', async () => {
      await spectator.component.openLoginModal();
      expect(modalControllerSpy).toHaveBeenCalledTimes(1);
      expect(modalControllerSpy).toHaveBeenCalledWith(LoginModalComponent);
    });
  });

  describe('Template', () => {
    it('should call openLoginModal() when clicked on Login button', async () => {
      const loginBtn = spectator.query('[data-test="login-btn"]');
      if (loginBtn) {
        spectator.click(loginBtn);
      }
      expect(openLoginModalSpy).toHaveBeenCalledTimes(1);
    });
  });
});
