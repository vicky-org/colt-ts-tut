//tupesEnums.ts
const color: [number, number, number] = [255, 0, 0, 4,"3"]; // RGB color
console.log(color);

type HTTPResponse = [number, string];

const goodResponse1: HTTPResponse = [200, "OK"];
goodResponse1[0] = 201
goodResponse1[0] = "Created"; // This will cause a type error
const goodResponse2: HTTPResponse = [200, "OK", 1];  // This will cause a type error
const goodResponse3: HTTPResponse = [200, "OK", "Extra data"]; // This will cause a type error

enum OrderStatus {
    PENDING,
    SHIPPED,
    DELIVERED,
    CANCELLED
    // PENDING = 'pending',
    // SHIPPED = 'shipped',
    // DELIVERED = 'delivered',
    // CANCELLED = 'cancelled'
}

const myStatus = OrderStatus.DELIVERED;
console.log(myStatus); // 0
//console.log(OrderStatus[myStatus]); // "PENDING"