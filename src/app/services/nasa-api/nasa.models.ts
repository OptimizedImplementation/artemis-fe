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
    element_count: number;
    links: Links;
    near_earth_objects: Object;
}
export interface Links {
    next?: string;
    previous?: string;
    self: string;
}
export interface Neo {
    absolute_magnitude_h: number;
    close_approach_data: CloseApproach[];
    estimated_diameter: EstimatedDiameter;
    id: string;
    is_potentially_hazardous_asteroid: boolean;
    is_sentry_object: false;
    links: Links;
    name: string;
    nasa_jpl_url: string;
    neo_reference_id: string;
}
export interface NeoDate extends Neo {
    date: string;
}
export interface CloseApproach {
    close_approach_date: string;
    close_approach_date_full: string;
    epoch_date_close_approach: number;
    miss_distance: MissDistance;
    orbiting_body: string;
    relative_velocity: RelativeVelocity;
}
export interface MissDistance {
    astronomical: string;
    kilometers: string;
    lunar: string;
    miles: string;
}
export interface RelativeVelocity {
    kilometers_per_hour: string;
    kilometers_per_second: string;
    miles_per_hour: string;
}
export interface EstimatedDiameter {
    feet: EstimatedDiameter;
    kilometers: EstimatedDiameter;
    meters: EstimatedDiameter;
    miles: EstimatedDiameter;
}
export interface EstimatedDiameterData {
    estimated_diameter_min: number;
    estimated_diameter_max: number;
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