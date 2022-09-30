import { BaseParams } from "../nasa.models";

export interface ApodParams extends BaseParams {
    date?: string;
    start_date?: string;
    end_date?: string;
    count?: number;
    thummbs?: boolean;
}

export interface ApodResp {
    copyright?: string;
    date: string;
    explanation: string;
    hdurl: string;
    media_type: string;
    service_version: string;
    title: string;
    url: string;
}