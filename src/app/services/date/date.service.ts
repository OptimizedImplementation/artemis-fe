import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class DateService {
    public getDate(month: number, day: number, year: number): string {
        return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    }
}