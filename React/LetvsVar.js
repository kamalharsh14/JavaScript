// 16. let vs var
function varscope() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('\n' + i);
}
varscope();

function letscope() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('\n' + i);
}
letscope();