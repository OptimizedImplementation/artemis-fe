import { Component } from '@angular/core';
import { take } from 'rxjs';
import { DateService } from './services/date/date.service';
import { ApodParams } from './services/nasa-api/apod/apod.models';
import { ApodService } from './services/nasa-api/apod/apod.service';
import { EarthAssetsParams, EarthImageryParams } from './services/nasa-api/earth/earth.models';
import { EarthService } from './services/nasa-api/earth/earth.service';
import { NeoFeedParams } from './services/nasa-api/neo/neo.models';
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
        private readonly earth: EarthService,
    ) {}

    ngOnInit() {
        // this.apodRequest({
        //     date: this.date.getDate(12, 6, 2020),
        // });
        // this.apodRequest({
        //     start_date: this.date.getDate(6, 6, 2022),
        // });
        // this.neoFeedRequest({
        //     start_date: this.date.getDate(9, 28, 2022)
        // });
        // this.neoLookupRequest(2489453);
        // this.neoBrowseRequest();
        this.earthImageryRequest({
            lat: 29.78,
            lon: -95.33,
        });
        this.earthAssetsRequest({
            lat: 29.78,
            lon: -95.33,
            date: this.date.getDate(12, 6, 2020),
        });
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

    public neoLookupRequest(asteroid_id: number) {
        this.neo.neoLookup(asteroid_id).pipe(take(1)).subscribe((resp) => {
            console.log(resp);
        });
    }

    public neoBrowseRequest() {
        this.neo.neoBrowse().pipe(take(1)).subscribe((resp) => {
            console.log(resp);
        });
    }

    public earthImageryRequest(inputParams: EarthImageryParams) {
        this.earth.earthImagery(inputParams).pipe(take(1)).subscribe((resp) => {
            console.log(resp);
        });
    }

    public earthAssetsRequest(inputParams: EarthAssetsParams) {
        this.earth.earthAssets(inputParams).pipe(take(1)).subscribe((resp) => {
            console.log(resp);
        });
    }
}