// 12. Constructor Function

function Circle(radius) {
    this.radius = radius;
    this.area = function() {
        console.log((3.142 * radius * radius));
    }
};