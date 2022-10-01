export interface EarthImageryParams {
    lat: number;
    lon: number;
    dim?: number;
    date?: string;
    cloud_score?: boolean;
}

export interface EarthImageryResp {

}

export interface EarthAssetsParams {
    lat: number;
    lon: number;
    date: string;
    dim?: number;
}

export interface EarthAssetsResp {
    date: string;
    id: string;
    resource: Object,
    service_version: string;
    url: string;
}

export interface EarthAssetsResource {
    dataset: string;
    planet: string;
}