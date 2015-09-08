
//When page loadded, read data and URL state, if any
$( document ).ready(load_data());

function page_main(){
  update_stats();
  load_data_state(default_function="full_list");
}


function full_list(){
  //Add listing and stats
  updateURLParameters("full_list");
  empty_dashboard();
  add_goals();
  add_targets();
  add_indicators();
}

function update_stats(){
 //make stats
 stats.goals=sdgs.goals.goals.length;
 stats.targets = sdgs.targets.targets.length;
 stats.indicators = sdgs.indicators.indicators.length;
 stats.goal_targets = array_num(sdgs.goals.goals.length,0);
 stats.goal_indicators = array_num(sdgs.goals.goals.length,0);
 for (var i in sdgs.indicators.indicators){ stats.goal_indicators[sdgs.indicators.indicators[i].goal-1]++; }
 for (var j in sdgs.targets.targets){ stats.goal_targets[sdgs.targets.targets[j].goal-1]++; }
 // Add left bar with numbers.
 document.getElementById("goals-num").innerHTML = stats.goals+" Goals";
 document.getElementById("targets-num").innerHTML = stats.targets+" Targets";
 document.getElementById("indicators-num").innerHTML = stats.indicators+" Indicators";
}

function vizs(){
  empty_dashboard();
  updateURLParameters("vizs");
  $('#Visualizations').addClass("btn-primary");
  document.getElementById("dashboard-title").innerHTML = "SDGs Visualized";
  add_stack_plot();
  add_leads_pie();
}

function add_stack_plot(){
 // Add plot stack viz on id "barplot".
 var data = {
    labels: d3.range(1, stats.goals+1).map(function(i){return "Goal "+i;}),
    labels_tooltip: sdgs.goals.goals.map(function (key) { return key.short;}),
    datasets: [
        {
            label: "Targets",
            fillColor: "rgba(220,220,220,0.5)",
            strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: stats.goal_targets
        },
        {
            label: "Potential Indicators",
            fillColor: "rgba(151,187,205,0.5)",
            strokeColor: "rgba(151,187,205,0.8)",
            highlightFill: "rgba(151,187,205,0.75)",
            highlightStroke: "rgba(151,187,205,1)",
            data: stats.goal_indicators
        }
    ]
 };
 var options = {
    barStrokeWidth : 2
 };
 var anchor=document.getElementById("dashboard-content");
 var wrapper = document.createElement("div");
 var title = document.createElement("h3");
 title.innerHTML = "Indicator candidates and Targets per Goal";
 var canvas = document.createElement("canvas");
 canvas.setAttribute("id", "barplot");
 canvas.setAttribute("class", "barplot");
 anchor.appendChild(wrapper).appendChild(title);
 anchor.appendChild(wrapper).appendChild(canvas);
 var ctx= canvas.getContext("2d");
 Chart.defaults.global.multiTooltipTemplate = "<%= value %> <%= datasetLabel %> ";
 var myBarChart = new Chart(ctx).Bar(data, options);
}

function count_match_leads(dictionary,regex){
 //Given a dictionary, return the sum of the values whose
 //keys match the string
 var count = 0;
 for (var key in dictionary){
   regex.test(key)? count+=dictionary[key]: null;
 }
 return count;
}

function add_leads_pie(){
 // Add leads pie. Leads normalized by indicator

 //count leads
 var leads = {total:0};
 for (var j in sdgs.indicators.indicators){
  var ileads = sdgs.indicators.indicators[j].leads.split(",");
   for (var jj in ileads){
    var lead=ileads[jj].trim().replace('""',"");
    leads[lead] ? leads[lead]++ : leads[lead]=1;
    leads["total"]++;
   }
  }
 var data = [
    {
        value: count_match_leads(leads,/UN/),
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "UN bodies"
    },
    {
        value: count_match_leads(leads,/WB|World Bank/),
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "World Bank Group"
    },
    {
        value: count_match_leads(leads,/OECD/),
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "OECD"
    },
    {
        value: leads["total"]-
               count_match_leads(leads,/OECD|WB|UN|World Bank/)
               -leads[""],
        color: "#FF245C",
        highlight: "#FF245A",
        label: "Others"
    },
    {
        value: leads[""],
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Unclear"
    }
];
 var options = [];
 var anchor=document.getElementById("dashboard-content");
 var wrapper = document.createElement("div");
 var title = document.createElement("h3");
 title.innerHTML = "Leads per Indicator";
 var canvas = document.createElement("canvas");
 canvas.setAttribute("id", "leadpie");
 canvas.setAttribute("class", "pie");
 anchor.appendChild(wrapper).appendChild(title);
 anchor.appendChild(wrapper).appendChild(canvas);
 var ctx= canvas.getContext("2d");
 var myPieChart = new Chart(ctx).Pie(data,options);
}

function empty_dashboard(){
  document.getElementById("dashboard-title").innerHTML = "";
  document.getElementById("dashboard-content").innerHTML = "";
  $('li.active').removeClass("active");
  $('#Visualizations').removeClass("btn-primary");
}

function list_goals(){
  updateURLParameters("list_goals");
  empty_dashboard();
  $('#goals').addClass("active");
  document.getElementById("dashboard-title").innerHTML = "SDG Goals";
  var sdgList = document.getElementById("dashboard-content");
  var goals=sdgs.goals.goals;
  for (var i in goals){
    var goal= goals[i];
    append('li',sdgList,"goal-"+goal.goal,"",goal.goal+": "+goal.title+".");
  }
}

function list_indicators(){
  updateURLParameters("list_indicators");
  empty_dashboard();
  $('#indicators').addClass("active");
  document.getElementById("dashboard-title").innerHTML = "SDG Indicators Candidates";
  var sdgList = document.getElementById("dashboard-content");
  var indicators=sdgs.indicators.indicators;
  for (var i in indicators){
    var indicator= indicators[i];
    append('li',sdgList,"goal-"+indicator.indicator,"indicator",indicator.indicator+": "+indicator.indicator+".");
  }
}

function list_targets(){
  updateURLParameters("list_targets");
  empty_dashboard();
  $('#targets').addClass("active");
  document.getElementById("dashboard-title").innerHTML = "SDG Targets";
  var sdgList = document.getElementById("dashboard-content");
  var targets=sdgs.targets.targets;
  for (var i in targets){
    var target= targets[i];
    append('li',sdgList,"goal-"+target.target,"",target.id+": "+target.title+".");
  }
}

function add_goals(){
  $('#load-all').addClass("active");
  document.getElementById("dashboard-title").innerHTML = "SDG Goals";
  var sdgList = document.getElementById("dashboard-content");
  var goals=sdgs.goals.goals;
  for (var i in goals){
    var goal= goals[i];
    append('li',sdgList,"goal-"+goal.goal,"h2",goal.goal+": "+goal.title+".");
  }
}

function add_targets(){
  var targets=sdgs.targets.targets;
  for (var i in targets){
    var target=targets[i];
    var goalLi = document.getElementById("goal-"+target.goal);
    var targetId="goal-"+target.goal+"-targets";
    if ( document.getElementById(targetId) === null) {
      var nestedOl = document.createElement("ul");
      nestedOl.setAttribute("id", targetId);
      goalLi.appendChild(nestedOl);
    }
    var goalLiUl = document.getElementById(targetId);
    append('li',goalLiUl,"target-"+target.id,"target",target.id+": "+target.title);
  }
}

function add_indicators(){
  var indicators=sdgs.indicators.indicators;
  for (var i in indicators){
    var indicator=indicators[i];
    var goalLi = document.getElementById("goal-"+indicator.goal);
    var indicatorsId="goal-"+indicator.goal+"-indicators";
    if (document.getElementById(indicatorsId) === null) {
      var responsiveTable = document.createElement("div");
      responsiveTable.setAttribute("class","table-responsive");
      var nestedTable = document.createElement("table");
      nestedTable.setAttribute("class","table table-striped table-bordered");
      var header = nestedTable.createTHead();
      var rowObject = header.insertRow(0);
      var columns=["Candidate Indicator","Category","Leads","Available"];
      for (var ii in columns ){
          var th = document.createElement('th');
          th.innerHTML = columns[ii];
          rowObject.appendChild(th);
      }
      var body = nestedTable.createTBody();
      body.setAttribute("id", indicatorsId);
      body.setAttribute("class", "indicator");
      goalLi.appendChild(responsiveTable).appendChild(nestedTable);
     }else{
      append_row(indicatorsId,[indicator.indicator,indicator.category,indicator.leads,indicator.available]);
    }
  }
}
