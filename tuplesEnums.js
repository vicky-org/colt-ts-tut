//tupesEnums.ts
var color = [255, 0, 0, 4, "3"]; // RGB color
console.log(color);
var goodResponse1 = [200, "OK"];
goodResponse1[0] = 201;
goodResponse1[0] = "Created"; // This will cause a type error
var goodResponse2 = [200, "OK", 1]; // This will cause a type error
var goodResponse3 = [200, "OK", "Extra data"]; // This will cause a type error
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["PENDING"] = 0] = "PENDING";
    OrderStatus[OrderStatus["SHIPPED"] = 1] = "SHIPPED";
    OrderStatus[OrderStatus["DELIVERED"] = 2] = "DELIVERED";
    OrderStatus[OrderStatus["CANCELLED"] = 3] = "CANCELLED";
    // PENDING = 'pending',
    // SHIPPED = 'shipped',
    // DELIVERED = 'delivered',
    // CANCELLED = 'cancelled'
})(OrderStatus || (OrderStatus = {}));
var myStatus = OrderStatus.DELIVERED;
console.log(myStatus); // 0
//console.log(OrderStatus[myStatus]); // "PENDING"
