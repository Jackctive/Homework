const arr = [-10, 2, -32, 33, 26, 25, 37, 30, 48, 92, , 74, 23];

console.log('Map:');
arr.map((currentValue) => {
    if (currentValue % 2 === 0) {
        console.log('số chẳn log bằng .map',currentValue);
    }
})
const arr1 = arr.filter((currentValue) => currentValue % 2 === 0);
console.log('Số chẳn log bằng .filter :' + arr1);

const arr2 = arr.reduce((acc, currentValue) => acc + currentValue, 0);
console.log('Tổng: ' + arr2);

const arr3 = arr.filter((currentValue) => currentValue < 0);
console.log('Các số nhỏ hơn 0: ' + arr3);

const arr4 = arr.filter((currentValue) => (currentValue < 0 && currentValue % 2 === 0));
console.log('Cac số nhỏ hơn 0 và là số chẳn: ' + arr4);

const arr5 = arr.filter((currentValue) => (currentValue < 0 && currentValue % 5 === 0));
console.log('Các số nhỏ hơn 0 và chia hết cho 5: ' + arr5);

console.log('git')

console.log('feature_b')