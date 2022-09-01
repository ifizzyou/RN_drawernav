interface Ilocation {
  address?: string;
  lat: number;
  lng: number;
}
export class Place {
  title: string;
  imageUri: string;
  address: string|undefined;
  location: { lat: number; lng: number };
  id: string;
  constructor(title: string, imageUri: string, location: Ilocation) {
    this.title = title;
    this.imageUri = imageUri;
    this.address = location.address;
    this.location = { lat: location.lat, lng: location.lng };
    this.id = new Date().toString() + Math.random().toString();
  }
}
