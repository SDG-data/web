---
layout: empty
title: Full List
permalink: /list/
js:
 - data-loader.js
 - list.js
redirect_from:
  - /
---

<div class="row">
  <div class="col-sm-2 col-md-2 sidebar">
   <ul class="nav nav-sidebar">
   <li id="load-all" class="active" ><a  onClick="full_list()" href="#">Load All<span class="sr-only">(current)</span></a></li>
   <li id="goals"><a id="goals-num" onClick="list_goals()" href="#"> ?? Goals</a></li>
   <li id="targets"><a id="targets-num" onClick="list_targets()" href="#">?? Targets</a></li>
   <li id="indicators"><a id="indicators-num" onClick="list_indicators()" href="#">?? Indicators</a></li>
   </ul>
   <button id="Visualizations" onClick="vizs()" type="button">Visualizations </button>
  </div>
  <div class="col-sm-9 col-sm-offset-2 col-md-10 col-md-offset-2 main">
   <h1 id='dashboard-title' class="page-header"></h1>
   <div class="row ">
   <p id='dashboard-content' class="sub-header"></p>
  </div>
 </div>
</div>



  </body>
</html>
