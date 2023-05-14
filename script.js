//exercise 1
function Task1(sum, sum2) {
    if (sum > sum2) {
        console.log(1);
    }
    else if (sum2 > sum) {
        console.log(-1);
    }
    else console.log(0);
}
//exercise 2
function Task2(fact) {
    let num = fact;
    while (fact > 1) {
        fact--;
        num = num * fact;
    }
    console.log(num);

}
//exercise 3
function Task3(num1, num2, num3) {
    let total = `${num1}${num2}${num3}`;
    console.log(total);
}
//exercise 4
function Task4(num1, num2) {
    let square = null;
    if (num2 === undefined)
        square = num1 * 4;
    else
        square = num1 * num2;
    console.log(square);
}
//exercise 5
function Task5(num) {
    if (num % 2 !== 0 && num % 3 !== 0)
        console.log(num);
}
//exercise 6
function Task6(num1, num2) {
    while (num2 > num1) {
        num2--;
        Task5(num2);
    }
}
//exercise 7
function Task7(hour, minute, sec) {
    if (minute === undefined && sec === undefined)
        console.log(`${hour}:00:00`);
    else if (minute === undefined)
        console.log(`${hour}:${minute}:00`);
    else
        console.log(`${hour}:${minute}:${sec}`);
}
//exercise 8
function Task8(hour, minute, sec) {
    let total = (hour * 3600) + (minute * 60) + sec;
    return total;
}
//exercise 9
function Task9(sec) {
    let hour = Math.floor(sec / 3600);
    let minute = Math.floor((sec % 3600) / 60);
    let seconds = (sec % 3600) % 60;
    return (`${hour}:${minute}:${seconds}`);
}
//exercise 10
function Task10(hour1, minute1, sec1, hour2, minute2, sec2) {
    let total1 = Task8(hour1, minute1, sec1);
    let total2 = Task8(hour2, minute2, sec2);
    let totalDiff = null;
    if (total1 > total2) {
        total1 = total1 - total2;
        totalDiff = Task8(total1);
    }
    else {
        total2 = total2 - total1;
        totalDiff = Task8(total2)
    }
}
