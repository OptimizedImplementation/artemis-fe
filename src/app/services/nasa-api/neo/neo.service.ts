import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, range, tap } from "rxjs";
import { NasaService } from "../nasa.service";
import { Neo, NeoBrowseResp, NeoFeedParams, NeoFeedRawResp, NeoFeedResp, NeoLookupResp, NeoResp } from "./neo.models";

@Injectable({
    providedIn: 'root',
})
export class NeoService extends NasaService {
    private readonly neoFeedUrl = `${this.baseUrl}/neo/rest/v1/feed`;
    private readonly neoLookupUrl = `${this.baseUrl}/neo/rest/v1/neo`;
    private readonly neoBrowseUrl = `${this.baseUrl}/neo/rest/v1/neo/browse`;

    constructor(
        private readonly http: HttpClient,
    ) { super() }

    // NEO
    public neoFeed(inputParams?: NeoFeedParams): Observable<NeoFeedRawResp> {
        const transformResp = (resp: NeoFeedRawResp) => {
            const dates = Object.keys(resp.near_earth_objects);
            const neos = Object.values(resp.near_earth_objects);
            const transformedNeos: Neo[] = [];

            for (let i = 0; i < dates.length; i++) {
                const neoSet = neos[i] as NeoResp[];
                neoSet.forEach(neo => {
                    transformedNeos.push({
                        ...neo,
                        date: dates[i],
                    });
                });
            }

            return {
                ...resp,
                near_earth_objects: transformedNeos,
            } as NeoFeedResp;
        }

        return this.http.get<NeoFeedRawResp>(`${this.neoFeedUrl}`, {
            'params' : {
                ...this.baseParams,
                ...inputParams,
            }
        }).pipe(
            map(resp => {
                return transformResp(resp)
            })
        );
    }

    public neoLookup(): Observable<NeoLookupResp> {
        return this.http.get<NeoLookupResp>(`${this.neoLookupUrl}`, {});
    }

    public neoBrowse(): Observable<NeoBrowseResp> {
        return this.http.get<NeoBrowseResp>(`${this.neoBrowseUrl}`, {});
    }
}