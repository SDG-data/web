//load URL parameters
function getURLParameter(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null;
}

function updateURLParameters(datahash) {
  if (window.location.search.includes(datahash)) return;
  
  var newurl = window.location.pathname+"?data="+datahash;
  window.history.pushState("", "", newurl);
}
