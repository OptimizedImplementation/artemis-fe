import { Component } from '@angular/core';
import { take } from 'rxjs';
import { DateService } from './services/date/date.service';
import { ApodParams } from './services/nasa-api/nasa.models';
import { NasaService } from './services/nasa-api/nasa.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'Artemis';

    constructor (
        private readonly nasa: NasaService,
        private readonly date: DateService,
    ) {}

    ngOnInit() {
        // this.apodRequest({
        //     date: this.date.getDate(12, 6, 2020),
        // });
        // this.apodRequest({
        //     start_date: this.date.getDate(6, 6, 2022),
        // });
    }

    public apodRequest(inputParams: ApodParams) {
        this.nasa.apod(inputParams).pipe(take(1)).subscribe((resp) => {
            console.log(resp);
        });
    }
}
