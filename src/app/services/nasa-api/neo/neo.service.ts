import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { NasaService } from "../nasa.service";
import { NeoBrowseResp, NeoFeedParams, NeoFeedResp, NeoLookupResp } from "./neo.models";

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
    public neoFeed(inputParams?: NeoFeedParams): Observable<NeoFeedResp> {
        return this.http.get<NeoFeedResp>(`${this.neoFeedUrl}`, {
            'params' : {
                ...this.baseParams,
                ...inputParams,
            }
        });
    }

    public neoLookup(): Observable<NeoLookupResp> {
        return this.http.get<NeoLookupResp>(`${this.neoLookupUrl}`, {});
    }

    public neoBrowse(): Observable<NeoBrowseResp> {
        return this.http.get<NeoBrowseResp>(`${this.neoBrowseUrl}`, {});
    }
}