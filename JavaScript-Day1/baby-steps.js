//console.log(process.argv)
var sum=0;
for (let i = 2; i < process.argv.length; i++) {
    const el = process.argv[i];
    sum = sum + Number(el);
}
console.log(sum);