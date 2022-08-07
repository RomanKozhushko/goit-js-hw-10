//1. Імпорт бібліотек
import Notiflix from 'notiflix'
import debounce from 'lodash.debounce'
// import { Notify } from 'notiflx/build/notiflix-notify-aio'
import './css/styles.css';
import { fetchCountries } from "./fetchCountries";
 
//2. Доступ до ресурсів
const input = document.querySelector("#search-box");
const countryList = document.querySelector(".country-list");
const countryInfo = document.querySelector(".country-info");
const DEBOUNCE_DELAY = 300;

// 3. Прослуховування інпута із затримкою!
input.addEventListener("input", debounce(onInput, DEBOUNCE_DELAY));

// 4. Функції виведення помилок
// 4.1 Введення малої кількості символів
function infoAlert() {
    Notiflix.info("Too many matches found. Please enter a more specific name.");
}
// 4.2 Введення неіснуючої країни
function wrongAlert() {
    Notiflix.failure("Oops, there is no country with that name");
}
// 5. Функція trim для вирізки пробілів!
function onInput() {
    const name = input.value.trim();
    if (name === "") {
        return (countryList.innerHTML = ""), (countryInfo.innerHTML = "");
    }
}
// 6. 