
//When page loadded, read data and URL state, if any
$( document ).ready(load_data());

function page_main(){
  add_goals_sidebar();
  add_goals();
}

function add_goals_sidebar(){
  $('#sidebar').addClass("active");
  var sdgList = document.getElementById("sidebar");
  var goals=sdgs.goals.goals;
  for (var i in goals){
    var goal= goals[i];
    append('a',sdgList,"",""," "+goal.goal+": "+goal.short+".","#goal-"+goal.goal,"");
  }
}

function add_goals(){
  var sdgList = document.getElementById("dashboard-content");
  var goals=sdgs.goals.goals;
  for (var i in goals){
    var goal= goals[i];
    append('div',sdgList,"goal-"+goal.goal,"h3"," "+goal.goal+": "+goal.title+".");
  }
}
