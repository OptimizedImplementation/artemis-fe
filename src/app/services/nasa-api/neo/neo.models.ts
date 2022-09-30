import { BaseParams } from "../nasa.models";

// Feed
export interface NeoFeedParams extends BaseParams {
    start_date?: string;
    end_date?: string;
}

export interface NeoFeedRawResp {
    element_count: number;
    links: Links;
    near_earth_objects: Object;
}

export interface NeoFeedResp extends NeoFeedRawResp {
    near_earth_objects: Neo[];
}

export interface Links {
    next?: string;
    previous?: string;
    self: string;
}

export interface NeoResp {
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

export interface Neo extends NeoResp {
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

// Lookup
export interface NeoLookupParams extends BaseParams {
    asteroid_id?: number;
}

export interface NeoLookupResp {

}

// Browse
export interface NeoBrowseResp {

}