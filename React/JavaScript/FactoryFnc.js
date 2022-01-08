// 11. Factory Functions

function createcircle(radius) {
    return {
        radius,
        area() {
            console.log((3.142 * radius * radius));
        }
    }
};

const circle1 = createcircle(2);
const circle2 = createcircle(4);
console.log(circle1);
console.log(circle2);