//load URL parameters
function getURLParameter(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null;
}

function updateURLParameters(datahash) {
  var hash;
  if (window.location.search.includes(datahash) && window.location.hash) {
    hash = window.location.hash;
  }
  
  var newurl = window.location.pathname+"?data="+datahash;
  window.history.pushState("", "", newurl);
  
  if (hash) {
    newurl += hash;
    window.history.pushState("","",newurl);
  }
}
