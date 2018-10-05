export class Address {
    private city: string;
    private country: string;
    private zipCode: number;

    constructor(city: string, country: string, zipCode: number) {
        this.city = city;
        this.country = country;
        this.zipCode = zipCode;
    }
}
