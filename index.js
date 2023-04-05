// 14 
let question = Number(prompt('Digite sua altura'));

function pesoIdealMasc() {
    return (72.7 * question) - 58;
}
console.log('O peso ideal para sua altura masculina é', pesoIdealMasc().toFixed(2));

function pesoIdealFem() {
    return (62.1 * question) - 44.7;
}
console.log('O peso ideal para sua altura feminina é', pesoIdealFem().toFixed(2));


