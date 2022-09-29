export const API_KEY = 'tW6rCBJBYlF20CerfLdehN1ZWIq2Jvak7VgUzQ2I';

export interface BaseParams {
    api_key?: string;
}

export interface ApodParams extends BaseParams {
    date?: string;
    start_date?: string;
    end_date?: string;
    count?: number;
    thummbs?: boolean;
}
export interface ApodResp {
    date: string;
    explanation: string;
    hdurl: string;
    media_type: string;
    service_version: string;
    title: string;
    url: string;
}

export interface NeoFeedParams extends BaseParams {
    start_date?: string;
    end_date?: string;
}
export interface NeoFeedResp {

}

export interface NeoLookupParams extends BaseParams {
    asteroid_id?: number;
}
export interface NeoLookupResp {

}

export interface NeoBrowseResp {

}

export interface DonkiCmeParams extends BaseParams {
    startDate?: string;
    endDate?: string;
}
export interface DonkiCmeResp {

}

export interface DonkiCmeAnalysisParams {
    startDate?: string;
    endDate?: string;
    mostAccurateOnly?: boolean;
    completeEntryOnly?: boolean;
    speed?: number;
    halfAngle?: number;
    catalog?: 'ALL' | 'SWRC_CATALOG' | 'JANG_ET_AL_CATALOG';
    keyword?: string;
}
export interface DonkiCmeAnalysisResp {

}

export interface DonkiGstParams extends BaseParams {
    startDate?: string;
    endDate?: string;
}
export interface DonkiGstResp {

}

export interface DonkiIpsParams extends BaseParams {
    startDate?: string;
    endDate?: string;
    location?: 'Earth' | 'MESSENGER' | 'STEREO A' | 'STEREO B';
    catalog?: 'SWRC_CATALOG' | 'WINSLOW_MESSENGER_ICME_CATALOG';
}
export interface DonkiIpsResp {

}

export interface DonkiFlrParams extends BaseParams {
    startDate?: string;
    endDate?: string;
}
export interface DonkiFlrResp {

}

export interface DonkiSepParams extends BaseParams {
    startDate?: string;
    endDate?: string;
}
export interface DonkiSepResp {

}

export interface DonkiMpcParams extends BaseParams {
    startDate?: string;
    endDate?: string;
}
export interface DonkiMpcResp {

}

export interface DonkiRbeParams extends BaseParams {
    startDate?: string;
    endDate?: string;    
}
export interface DonkiRbeResp {

}

export interface DonkiHssParams extends BaseParams {
    startDate?: string;
    endDate?: string;    
}
export interface DonkiHssResp {

}

export interface DonkiWsaParams extends BaseParams {
    startDate?: string;
    endDate?: string;    
}
export interface DonkiWsaResp {

}

export interface DonkiNotificationsParams extends BaseParams {
    startDate?: string;
    endDate?: string;
    type?: 'all' | 'FLR' | 'SEP' | 'CME' | 'IPS' | 'MPC' | 'GST' | 'RBE' | 'report';
}
export interface DonkiNotificationsResp {

}

export interface EarthImageryParams extends BaseParams {
    lat?: number;
    lon?: number;
    dim?: number;
    date?: string;
    cloud_score?: boolean;
}
export interface EarthImageryResp {

}

export interface EarthAssetsParams extends BaseParams {
    lat?: number;
    lon?: number;
    date?: string;
    dim?: number;
}
export interface EarthAssetsResp {

}