import { firestore } from 'firebase';

export interface Destination {
    id: string;
    name: string;
    image: string;
    timeOfArrival: firestore.Timestamp;
    timeOfDeparture: firestore.Timestamp;

    // Injected after fetch
    postsCount: number;
    photosCount: number;
}
