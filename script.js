"use strict";

var money,
time,
reqExpenses,
reqExpensesSecond;

money = prompt("Ваш бюджет на месяц?", "");

time = prompt("Введите дату в формате YYYY-MM-DD");

reqExpenses = prompt("Введите обязательную статью расходов в этом месяце");
reqExpensesSecond = prompt("Во сколько обойдется?");

var appData = {
    budget: money,
    timeData: time,
    expenses: reqExpenses,
    optionalExpenses: reqExpenses + ":" + reqExpensesSecond,
    income: '',
    savings: false
}

alert(money/30 + "- бюджет на день");