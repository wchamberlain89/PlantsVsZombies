// import './css/styles.css'; // Should not need this if compiling sass
import $ from 'jquery';
import './scss/styles.scss';
import { Game } from './classes/gameManager.js'
import { Sunflower } from './classes/sunflower.js'
import { Zombie } from './classes/zombie.js'

function refreshSun(game) {
  $(".sunScore").text(game.sunQty);
}

function refreshBoard(game) {
  for(let space in game.board) {
      if(game.board[space] !== 0) {
        $("#" + space).html(game.board[space].imgSrc);
      }

  }
}

$(document).ready(function() {
  const game = new Game();

  game.spawn();

  setInterval(function(){
    refreshSun(game);
    refreshBoard(game);
  }, 2000);

  $(".sunflower").on("click", function(){
    $(this).addClass("selected");
  });

  $(".space").on("click", function(){
    if($(".sunflower").hasClass("selected")){
      const space = $(this).attr("id");
      game.addSunflower(space);
      refreshSun(game);
      // $(this).html(game.board[space].imgSrc);
      $(".sunflower").removeClass("selected")
    }
  });

});
