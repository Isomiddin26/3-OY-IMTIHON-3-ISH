var salaries = {
    Akmal: 1200,
    Salim: 5200,
    Karima: 1800
};

var sumSalaries = 0;
for (let res in salaries) {
    sumSalaries = sumSalaries + salaries[res];
}
console.log(" Ishchilarning oyligi:",sumSalaries)