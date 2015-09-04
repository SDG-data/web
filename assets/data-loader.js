//Common fnctions for data Loading
// Base URL
var version = "v0.05";
var dataurl = "https://raw.githubusercontent.com/SDG-data/SDGs/"+version+"/";
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
        page_main();
        data_loaded=1;}
  });
});
}

function append(htype,hookElement,id,classes,value,link){
  var wrapper = document.createElement("div");
  var newListItem = document.createElement(htype);
  wrapper.setAttribute("id", id);
  newListItem.setAttribute("class", classes);
  if (typeof link !== 'undefined') {
    newListItem.setAttribute("href", link);
  }
  var ListValue = document.createTextNode(value);
  newListItem.appendChild(ListValue);
  hookElement.appendChild(wrapper).appendChild(newListItem);
}

function append_raw(hookElement,content){
  var wrapper = document.createElement("div");
  wrapper.innerHTML=content;
  hookElement.appendChild(wrapper);
}

function append_row(hookElement,row){
 var table = document.getElementById(hookElement);
  var rowObject = table.insertRow(0);
  for (var i in row){
    cell = rowObject.insertCell(i);
    cell.innerHTML = row[i];
  }
}

function array_num(size,num){
  return Array.apply(null, new Array(size)).map(Number.prototype.valueOf,num);
}
