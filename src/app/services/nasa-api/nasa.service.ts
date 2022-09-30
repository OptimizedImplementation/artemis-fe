import { Injectable } from "@angular/core";
import { API_KEY, BaseParams } from "./nasa.models";

@Injectable({
    providedIn: 'root'
})
export class NasaService {
    protected readonly baseUrl = 'https://api.nasa.gov';
    protected readonly baseParams: BaseParams = {
        'api_key': API_KEY,
    }

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
}