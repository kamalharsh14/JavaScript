// 13. Getters and Setters
const person = {
    firstName: 'Harsh',
    midName: 'Kamal',
    lastName: 'Singh',
    get fullName() {
        return `${person.firstName} ${person.midName} ${person.lastName}`
    },
    set fullName(name) {
        const parts = name.split(' ');
        this.firstName = parts[0];
        this.midName = parts[1];
        this.lastName = parts[2];
    }
};
console.log(person.fullName);
person.fullName = 'Yash Kamal Singh';
console.log(person);