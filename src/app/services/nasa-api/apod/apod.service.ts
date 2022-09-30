import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { NasaService } from "../nasa.service";
import { ApodParams, ApodResp } from "./apod.models";

@Injectable({
    providedIn: 'root',
})
export class ApodService extends NasaService {
    private readonly apodUrl = `${this.baseUrl}/planetary/apod`;

    constructor(
        private readonly http: HttpClient,
    ) { super() }

    public apod(inputParams: ApodParams): Observable<ApodResp[]> {
        const transformResp = (resp: ApodResp | ApodResp[]): ApodResp[] => {
            if (inputParams.count || inputParams.start_date) {
                return resp as ApodResp[];
            } else {
                return [resp] as ApodResp[];
            }
        }

        return this.http.get<ApodResp[]>(`${this.apodUrl}`, {
            'params': {
                ...this.baseParams,
                ...inputParams,
            }
        }).pipe(
            map(resp => {
                return transformResp(resp);
            })
        );
    }
}