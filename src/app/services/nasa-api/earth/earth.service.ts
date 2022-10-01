import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { NasaService } from "../nasa.service";
import { EarthAssetsParams, EarthAssetsResp, EarthImageryParams, EarthImageryResp } from "./earth.models";

@Injectable({
    providedIn: 'root',
})
export class EarthService extends NasaService {
    private readonly earthImageryUrl = `${this.baseUrl}/planetary/earth/imagery`;
    private readonly earthAssetsUrl = `${this.baseUrl}/planetary/earth/assets`;

    constructor(
        private readonly http: HttpClient,
    ) { super() }

    // TODO: API not currently working
    public earthImagery(inputParams: EarthImageryParams): Observable<EarthImageryResp> {
        console.log('before request');
        return this.http.get<EarthImageryResp>(this.earthImageryUrl, {
            'params': {
                ...inputParams,
                ...this.baseParams,
            }
        });
    }

    public earthAssets(inputParams: EarthAssetsParams): Observable<EarthAssetsResp> {
        return this.http.get<EarthAssetsResp>(this.earthAssetsUrl, {
            'params': {
                ...inputParams,
                ...this.baseParams,
            }
        });
    }
}