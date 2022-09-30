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
export interface NeoLookupResp extends NeoResp {
    designator: string;
    orbital_data: NepOrbitalData;
}

export interface NepOrbitalData {
    aphelion_distance: string;
    ascending_node_longitude: string;
    data_arc_in_days: number;
    eccentricity: string;
    epoch_osculation: string;
    equinox: string;
    first_observation_date: string;
    inclination: string;
    jupiter_tisserand_invariant: string;
    last_observation_date: string;
    mean_anomaly: string;
    mean_motion: string;
    minimum_orbit_intersection: string;
    observations_used: number;
    orbit_class: OrbitClass;
    orbit_determination_date: string;
    orbit_id: string;
    orbit_uncertainty: string;
    orbital_period: string;
    perihelion_argument: string;
    perihelion_distance: string;
    perihelion_time: string;
    semi_major_axis: string;
}

export interface OrbitClass {
    orbit_class_description: string;
    orbit_class_range: string;
    orbit_class_type: string;
}

// Browse
export interface NeoBrowseResp {

}