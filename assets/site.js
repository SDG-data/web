//load URL parameters
function getURLParameter(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null;
}

function updateURLParameters(datahash) {
  var newurl = window.location.pathname+"?data="+datahash;
  if(window.location.hash) newurl += window.location.hash;
  window.history.pushState("", "", newurl);
}
