// import './css/styles.css'; // Should not need this if compiling sass
import $ from 'jquery';
import './scss/styles.scss';
import { addToTen } from './js/project.js';

$(document).ready(function(){
  $("#adder").submit(function(event) {
    event.preventDefault();
    const num1 = parseInt($("#num1").val());
    const num2 = parseInt($("#num2").val());
    let result = addToTen(num1,num2);
    console.log(result);
    let answer = "";
    if (result === true) {
      answer = "";
    } else {
      answer = "do not ";
    }
    $(".result").html(`<p>${num1} and ${num2} ${answer}add up to 10.</p>`);
  });
});
