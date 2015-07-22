---
layout: empty
title: Full List
permalink: /list/
js: list.js
redirect_from:
  - /
---

<div class="row">
  <div class="col-sm-2 col-md-2 sidebar">
   <ul class="nav nav-sidebar">
   <li class="active"><a onClick="vizs()" href="#">Overview <span class="sr-only">(current)</span></a></li>
   <li><a id="goals-num" onClick="goals_list()" href="#"> ?? Goals</a></li>
   <li><a id="targets-num" onClick="targets_list()" href="#">?? Targets</a></li>
   <li><a id="indicators-num" onClick="indicators_list()" href="#">?? Indicators</a></li>
   </ul>
   <button id="1" onClick="full_list()" type="button">Load All </button>
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
