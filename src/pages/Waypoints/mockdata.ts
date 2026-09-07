/** Row shape for the waypoints table (mock / list UI). */
export interface WaypointTableRow {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  demand: number;
  depot: boolean;
  active: boolean;
}

export const mockData: WaypointTableRow[] = [
  { id: "1", name: "John Doe", latitude: 40.7128, longitude: -74.006, demand: 100, depot: true, active: true },
  { id: "2", name: "Jane Doe", latitude: 40.7128, longitude: -74.006, demand: 100, depot: false, active: true },
  { id: "3", name: "John Doe", latitude: 40.7128, longitude: -74.006, demand: 100, depot: true, active: true },
  { id: "4", name: "Jane Doe", latitude: 40.7128, longitude: -74.006, demand: 100, depot: false, active: true },
  { id: "5", name: "John Doe", latitude: 40.7128, longitude: -74.006, demand: 100, depot: true, active: true },
  { id: "6", name: "Jane Doe", latitude: 40.7128, longitude: -74.006, demand: 100, depot: false, active: true },
  { id: "7", name: "John Doe", latitude: 40.7128, longitude: -74.006, demand: 100, depot: true, active: true },
  { id: "8", name: "Jane Doe", latitude: 40.7128, longitude: -74.006, demand: 100, depot: false, active: true },
  { id: "9", name: "John Doe", latitude: 40.7128, longitude: -74.006, demand: 100, depot: true, active: true },
  { id: "10", name: "Jane Doe", latitude: 40.7128, longitude: -74.006, demand: 100, depot: false, active: true },
  { id: "11", name: "John Doe", latitude: 40.7128, longitude: -74.006, demand: 100, depot: true, active: true },
  { id: "12", name: "Jane Doe", latitude: 40.7128, longitude: -74.006, demand: 100, depot: false, active: true },
];
