import { Component } from '@angular/core';
import { take } from 'rxjs';
import { DateService } from './services/date/date.service';
import { ApodService } from './services/nasa-api/apod/apod.service';
import { ApodParams, NeoFeedParams, NeoLookupParams } from './services/nasa-api/nasa.models';
import { NeoService } from './services/nasa-api/neo/neo.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'Artemis';

    constructor (
        private readonly date: DateService,
        private readonly apod: ApodService,
        private readonly neo: NeoService,
    ) {}

    ngOnInit() {
        this.apodRequest({
            date: this.date.getDate(12, 6, 2020),
        });
        this.apodRequest({
            start_date: this.date.getDate(6, 6, 2022),
        });
        // this.neoFeedRequest({
        //     start_date: this.date.getDate(9, 28, 2022)
        // });
    }

    public apodRequest(inputParams: ApodParams) {
        this.apod.apod(inputParams).pipe(take(1)).subscribe((resp) => {
            console.log(resp);
        });
    }

    public neoFeedRequest(inputParams: NeoFeedParams) {
        this.neo.neoFeed(inputParams).pipe(take(1)).subscribe((resp) => {
            console.log(resp);
        });
    }
}
