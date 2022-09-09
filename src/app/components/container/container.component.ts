import { Component, Input } from '@angular/core';

@Component({
  selector: 'littil-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent {
  @Input()
  public outerClasses = '';

  @Input()
  public innerClasses = '';

  @Input()
  public widthClass = 'max-w-screen-lg';
}
