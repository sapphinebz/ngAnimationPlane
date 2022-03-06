import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  HostBinding,
} from '@angular/core';

@Component({
  selector: 'app-pointer-animation',
  templateUrl: './pointer-animation.component.html',
  styleUrls: ['./pointer-animation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PointerAnimationComponent implements OnInit {
  @Input() set x(x: number) {
    this.left = `${x - 40}px`;
  }
  @Input() set y(y: number) {
    this.top = `${y - 40}px`;
  }
  @HostBinding('style.position') position = 'fixed';
  @HostBinding('style.top') top = '0px';
  @HostBinding('style.left') left = '0px';

  constructor() {}

  ngOnInit(): void {}
}
