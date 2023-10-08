import { AfterViewInit, Component, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements AfterViewInit {

  constructor(
    private spinner: NgxSpinnerService,

  ) {
    this.spinner.show()
  }
  ngAfterViewInit() {
    this.spinner.hide()
  }
}
