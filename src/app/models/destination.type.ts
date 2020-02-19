export interface Destination {
    id: string;
    name: string;
    image: string;
    timeOfArrival: Date;
    timeOfDeparture: Date;

    // Injected after fetch
    postsCount: number;
    photosCount: number;
}
