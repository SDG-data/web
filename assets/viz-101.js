
//When page loadded, read data and URL state, if any
$( document ).ready(load_data());

function page_main(){
  add_goals_sidebar();
  add_goals();
  load_vizrefs();
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

var visualizations={};
function load_vizrefs(){
  // Load Visualizations references from the json file
  d3.json("/web/assets/viz-101.json", function (error, data) {
    var viz=data.visualizations[0];
    var vizHook = document.getElementById("goal-"+viz.goal);
    console.log(viz,vizHook);
    if (vizHook === null){
      throw new Error("Something went badly wrong!");
    }
    //append(htype,hookElement,id,classes,value,link)
    append('div',vizHook,"viz-"+viz.goal,"",viz["viz-title"]);
  });
}
