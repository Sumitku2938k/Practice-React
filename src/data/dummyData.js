export const tourists = [
    {
        id: "T-1001",
        name: "Aarav Sharma",
        gender: "male",
        itinerary: "Delhi → Jaipur",
        location: { lat: 28.6139, lng: 77.209 },
    },
    {
        id: "T-1002",
        name: "Emily Johnson",
        gender: "female",
        itinerary: "Noida → Agra",
        location: { lat: 28.5355, lng: 77.391 },
    },
];

export const alerts = [
    {
        id: "A-1",
        type: "SOS",
        status: "active",
        name: "Aarav Sharma",
        touristId: "T-1001",
        location: { lat: 28.61, lng: 77.21 },
        time: "11/1/2026, 11:58 PM",
    },
    {
        id: "A-2",
        type: "Geo-fence",
        status: "ack",
        name: "Emily Johnson",
        touristId: "T-1002",
        location: { lat: 28.53, lng: 77.39 },
        time: "10/1/2026, 11:58 PM",
    },
];

export const zones = [
    {
        id: "Z-1",
        name: "Connaught Place",
        risk: "High",
        location: { lat: 28.6315, lng: 77.2167 },
    },
];
