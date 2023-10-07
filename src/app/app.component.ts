import { AfterViewInit, Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'profile';
  constructor(
    private spinner: NgxSpinnerService
  ) {
    this.spinner.show()
  }
  ngAfterViewInit() {
    this.spinner.hide()

  }
}
