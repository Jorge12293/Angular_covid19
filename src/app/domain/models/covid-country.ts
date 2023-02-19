export interface CovidCountry {
    provincestate: string;
    countryregion: string;
    countryRegion: string;  
    lastupdate:    Date;
    location:      Location;
    countrycode:   Countrycode;
    confirmed:     number;
    deaths:        number;
    recovered:     number;
}

export interface Countrycode {
    iso2: string;
    iso3: string;
}

export interface Location {
    lat: number;
    lng: number;
}

// Converts JSON strings to/from your types
export class ConvertListCovidCountry {
    public static toAPICovidListCountry(json: string): CovidCountry[] {
        return JSON.parse(json);
    }

    public static apiCovidListCountryToJson(value: CovidCountry[]): string {
        return JSON.stringify(value);
    }
}
