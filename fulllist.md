---
layout: empty
title: Full List
permalink: /list/
js: list.js
---

<div class="row">
  <div class="col-sm-2 col-md-2 sidebar">
   <ul class="nav nav-sidebar">
   <li class="active"><a href="#">Overview <span class="sr-only">(current)</span></a></li>
   <li><a id="goals-num" href="#"> ?? Goals</a></li>
   <li><a id="targets-num" href="#">?? Targets</a></li>
   <li><a id="indicators-num" href="#">?? Indicators</a></li>
   </ul>
   <button id="1" onClick="load_data()" type="button">Reload data</button>
  </div>
  <div class="col-sm-9 col-sm-offset-2 col-md-10 col-md-offset-2 main">
   <h1 class="page-header">Dashboard</h1>

   <div class="row ">
   <h2 class="sub-header">All Goals, targets and Indicators</h2>
   <canvas id="barplot" ></canvas>
   <div id="legendbarplot"></div>
  </div>
 <div class="row">
   <h2 class="sub-header">Full listing</h2>
   <div id="sdgList"></div>
  </div>
 </div>
</div>



  </body>
</html>
