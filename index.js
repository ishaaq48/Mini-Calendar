const monthEl = document.getElementById("month-name");
const dayEl = document.getElementById("day-name");
const dateEl = document.getElementById("day-number");
const yearEl = document.getElementById("year");
const title = document.querySelector("h1");
let str = "Calendar";
let characterIndex = 0;

updateText();
function updateText()
{
    
    title.innerHTML = `<h1 style = "font-size : 40px; margin: 0">${str
    .slice(0,characterIndex+1)}</h1>`;

    characterIndex++;

    // if(characterIndex === str.length)
    // {
    //     characterIndex = 0;
    // }
    setTimeout(updateText,400);

}
const date = new Date();

monthEl.innerText = date.toLocaleString("en",
    {month:"long"}
);
dayEl.innerText = date.toLocaleString("en",
    {weekday:"long"}
);
dateEl.innerText = date.getDate();
yearEl.innerText = date.getFullYear();