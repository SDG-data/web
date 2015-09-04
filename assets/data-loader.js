// Base URL
var version = "v0.05"
var dataurl = "https://raw.githubusercontent.com/SDG-data/SDGs/"+version+"/"
//Read Goals, Targets and Indicators
var sdgs = [];
var stats = {};

files = ["goals","targets","indicators"];
var data_loaded = 0;
function load_data(){
  //Reset and Read into memory the SDGs
  sdgs = {};
  stats = {};
  files.forEach(function (f) {
    console.log("Loading "+f);
    d3.json(dataurl+f+".json", function (error, data) {
      //for (var attrname in data) { sdgs[attrname] = data[attrname]; }
      sdgs[data.meta.id]=data;
      if (Object.keys(sdgs).length == 3) {
        update_stats();
        load_data_state();
        data_loaded=1;}
  });
});
}
