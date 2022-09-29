import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { API_KEY, ApodParams, ApodResp, BaseParams, DonkiCmeAnalysisResp, DonkiCmeResp, DonkiFlrResp, DonkiGstResp, DonkiHssResp, DonkiIpsResp, DonkiMpcResp, DonkiNotificationsResp, DonkiRbeResp, DonkiSepResp, DonkiWsaResp, EarthAssetsResp, EarthImageryResp, NeoBrowseResp, NeoFeedParams, NeoFeedResp, NeoLookupResp } from "./nasa.models";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class NasaService {
    private readonly baseUrl = 'https://api.nasa.gov';
    private readonly baseParams: BaseParams = {
        'api_key': API_KEY,
    }

    private readonly apodUrl = `${this.baseUrl}/planetary/apod`;

    private readonly neoFeedUrl = `${this.baseUrl}/neo/rest/v1/feed`;
    private readonly neoLookupUrl = `${this.baseUrl}/neo/rest/v1/neo`;
    private readonly neoBrowseUrl = `${this.baseUrl}/neo/rest/v1/neo/browse`;

    private readonly donkiCmeUrl = `${this.baseUrl}/DONKI/CME`;
    private readonly donkiCmeAnalysisUrl = `${this.baseUrl}/DONKI/CMEAnalysis`;
    private readonly donkiGstUrl = `${this.baseUrl}/DONKI/GST`;
    private readonly donkiIpsUrl = `${this.baseUrl}/DONKI/IPS`;
    private readonly donkiFlrUrl = `${this.baseUrl}/DONKI/FLR`;
    private readonly donkiSepUrl = `${this.baseUrl}/DONKI/SEP`;
    private readonly donkiMpcUrl = `${this.baseUrl}/DONKI/MPC`;
    private readonly donkiRbeUrl = `${this.baseUrl}/DONKI/RBE`;
    private readonly donkiHssUrl = `${this.baseUrl}/DONKI/HSS`;
    private readonly donkiWsaUrl = `${this.baseUrl}/DONKI/WSAEnlilSimulations`;
    private readonly donkiNotificationsUrl = `${this.baseUrl}/DONKI/notifications`;

    private readonly earthImageryUrl = `${this.baseUrl}/planetary/earth/imagery`;
    private readonly earthAssetsUrl = `${this.baseUrl}/planetary/earth/assets`;

    constructor(
        private readonly http: HttpClient,
    ) {}

    // APOD
    public apod(inputParams: ApodParams): Observable<ApodResp | ApodResp[]> {
        if (inputParams.count || inputParams.start_date) {
            return this.http.get<ApodResp[]>(`${this.apodUrl}`, {
                'params': {
                    ...this.baseParams,
                    ...inputParams,
                }
            });
        } else {
            return this.http.get<ApodResp>(`${this.apodUrl}`, {
                'params': {
                    ...this.baseParams,
                    ...inputParams,
                }
            });
        }
    }

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

    // DONKI
    public donkiCme(): Observable<DonkiCmeResp> {
        return this.http.get<DonkiCmeResp>(`${this.donkiCmeUrl}`, {});
    }

    public donkiCmeAnalysis(): Observable<DonkiCmeAnalysisResp> {
        return this.http.get<DonkiCmeAnalysisResp>(`${this.donkiCmeAnalysisUrl}`, {});
    }

    public donkiGst(): Observable<DonkiGstResp> {
        return this.http.get<DonkiGstResp>(`${this.donkiGstUrl}`, {});
    }

    public donkiIps(): Observable<DonkiIpsResp> {
        return this.http.get<DonkiIpsResp>(`${this.donkiIpsUrl}`, {});
    }

    public donkiFlr(): Observable<DonkiFlrResp> {
        return this.http.get<DonkiFlrResp>(`${this.donkiFlrUrl}`, {});
    }

    public donkiSep(): Observable<DonkiSepResp> {
        return this.http.get<DonkiSepResp>(`${this.donkiSepUrl}`, {});
    }

    public donkiMpc(): Observable<DonkiMpcResp> {
        return this.http.get<DonkiMpcResp>(`${this.donkiMpcUrl}`, {});
    }

    public donkiRbe(): Observable<DonkiRbeResp> {
        return this.http.get<DonkiRbeResp>(`${this.donkiRbeUrl}`, {});
    }

    public donkiHss(): Observable<DonkiHssResp> {
        return this.http.get<DonkiHssResp>(`${this.donkiHssUrl}`, {});
    }

    public donkiWsa(): Observable<DonkiWsaResp> {
        return this.http.get<DonkiWsaResp>(`${this.donkiWsaUrl}`, {});
    }

    public donkiNotifications(): Observable<DonkiNotificationsResp> {
        return this.http.get<DonkiNotificationsResp>(`${this.donkiNotificationsUrl}`, {});
    }

    // EARTH
    public earthImagery(): Observable<EarthImageryResp> {
        return this.http.get<EarthImageryResp>(`${this.earthImageryUrl}`, {});
    }

    public earthAssets(): Observable<EarthAssetsResp> {
        return this.http.get<EarthAssetsResp>(`${this.earthAssetsUrl}`, {});
    }
}