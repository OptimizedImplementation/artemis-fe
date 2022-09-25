import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { API_KEY, ApodResp } from "./nasa.models";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class NasaService {
    private baseUrl = 'https://api.nasa.gov';
    private params = {
        'api_key': API_KEY,
    }
    private apodUrl = `${this.baseUrl}/planetary/apod`;

    constructor(
        private readonly http: HttpClient,
    ) {}

    public apod(): Observable<ApodResp> {
        return this.http.get<ApodResp>(`${this.apodUrl}`, { 'params': this.params });
    }
}