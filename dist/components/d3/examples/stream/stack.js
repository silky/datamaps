function transitionGroup(){function t(){d3.select(this).transition().duration(500).attr("y",function(e){return height-y2(e)}).attr("height",y2)}var e=d3.selectAll("#chart");e.select("#group").attr("class","first active"),e.select("#stack").attr("class","last"),e.selectAll("g.layer rect").transition().duration(500).delay(function(e,t){return t%m*10}).attr("x",function(e,t){return x({x:.9*~~(t/m)/n})}).attr("width",x({x:.9/n})).each("end",t)}function transitionStack(){function t(){d3.select(this).transition().duration(500).attr("x",0).attr("width",x({x:.9}))}var e=d3.select("#chart");e.select("#group").attr("class","first"),e.select("#stack").attr("class","last active"),e.selectAll("g.layer rect").transition().duration(500).delay(function(e,t){return t%m*10}).attr("y",y1).attr("height",function(e){return y0(e)-y1(e)}).each("end",t)}var n=4,m=64,data=d3.layout.stack()(stream_layers(n,m,.1)),color=d3.interpolateRgb("#aad","#556"),margin=20,width=960,height=499.5-margin,mx=m,my=d3.max(data,function(e){return d3.max(e,function(e){return e.y0+e.y})}),mz=d3.max(data,function(e){return d3.max(e,function(e){return e.y})}),x=function(e){return e.x*width/mx},y0=function(e){return height-e.y0*height/my},y1=function(e){return height-(e.y+e.y0)*height/my},y2=function(e){return e.y*height/mz},vis=d3.select("#chart").append("svg").attr("width",width).attr("height",height+margin),layers=vis.selectAll("g.layer").data(data).enter().append("g").style("fill",function(e,t){return color(t/(n-1))}).attr("class","layer"),bars=layers.selectAll("g.bar").data(function(e){return e}).enter().append("g").attr("class","bar").attr("transform",function(e){return"translate("+x(e)+",0)"});bars.append("rect").attr("width",x({x:.9})).attr("x",0).attr("y",height).attr("height",0).transition().delay(function(e,t){return t*10}).attr("y",y1).attr("height",function(e){return y0(e)-y1(e)});var labels=vis.selectAll("text.label").data(data[0]).enter().append("text").attr("class","label").attr("x",x).attr("y",height+6).attr("dx",x({x:.45})).attr("dy",".71em").attr("text-anchor","middle").text(function(e,t){return t});vis.append("line").attr("x1",0).attr("x2",width-x({x:.1})).attr("y1",height).attr("y2",height)