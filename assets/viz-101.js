
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

function append_viz(vizHook,viz){
  append('div',vizHook,"viz-"+viz.goal,"h4",viz["viz-title"]);
  append('a',vizHook,"viz-"+viz.goal,"","Relevant target: "+viz.target,"/web/list/?data=list_targets#");
  append('p',vizHook,"viz-"+viz.goal,"",viz.description);
  append_raw(vizHook,viz.embed);
  append('a',vizHook,"viz-"+viz.goal,"","Source: "+viz["source-name"],viz["source-link"]);
  append('hr',vizHook,"","","");
}

var visualizations={};
function load_vizrefs(){
  // Load Visualizations references from the json file
  d3.json("/web/assets/viz-101.json", function (error, data) {
    for ( var i in data.visualizations){
      var viz=data.visualizations[i];
      var vizHook = document.getElementById("goal-"+viz.goal);
      console.log(viz,vizHook);
      if (vizHook === null){
        throw new Error("Something went badly wrong!");
      }
    //append(htype,hookElement,id,classes,value,link)
    append_viz(vizHook,viz);
  }
  });
}
