import { Component } from '@angular/core';
import { take } from 'rxjs';
import { NasaService } from './services/nasa-api/nasa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Artemis';

  constructor (
    private nasa: NasaService,
  ) {}

  ngOnInit() {
    this.nasa.apod().pipe(take(1)).subscribe((resp) => {
      console.log(resp);
    });
  }
}
