const currentDate = (x, monthIndex, dayIndex) =>
  new Date(x, monthIndex, dayIndex);

const dates = Array.from({ length: 31 }, (x, index) =>
  currentDate(0, 0, index).toLocaleDateString("en-US", { day: "numeric" })
);
console.log(dates);

const months = Array.from({ length: 12 }, (x, index) =>
  currentDate(0, index, 0).toLocaleDateString("en-US", { month: "long" })
);

console.log(months);

// const year = currentDate.getFullYear();

const dateSelect = document.getElementById("date");
const monthSelect = document.getElementById("month");
const option = document.createElement("option");

document.addEventListener("DOMContentLoaded", () => {
  months.map(month => {
    option.text = month;
    option.value = month;
    if (currentDate) monthSelect.add(option);
  });
});
