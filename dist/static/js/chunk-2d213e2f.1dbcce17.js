(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d213e2f"],{af1e:function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"fillcontain"},[e("div",{ref:"fillcontainer",staticClass:"fillcontainer"},[e("div",{staticClass:"echartsPosition",attrs:{id:"incomePayPosition"}})])])},a=[],n=i("164e"),r=i.n(n),s={data:function(){return{chart:null}},mounted:function(){var t=this;this.setInit(),window.onresize=function(){t.setInit()}},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{setInit:function(){var t=this;this.$nextTick((function(){t.$refs.fillcontainer.style.height=document.body.clientHeight-160+"px",t.initChart(),t.chart=null}))},initChart:function(){this.chart=r.a.init(document.getElementById("incomePayPosition"));var t={};(function(){for(var e=[],i=[],o=[],a=[],n=1;n<13;n++)e.push(n+"月份");t["xAxisData"]=e;for(var r=1;r<13;r++)i.push(Math.round(1e4*Math.random())),o.push(Math.round(1e4*Math.random())),a.push(Math.round(1e4*Math.random()));t["seriesIncome"]=i,t["seriesPay"]=o,t["seriesaverage"]=a})(),this.chart.setOption({backgroundColor:"#CCFFCC",title:{text:"收支统计",subtext:"单位/万元",x:"4%",textStyle:{color:"#000000",fontSize:"22"},subtextStyle:{color:"#90979c",fontSize:"12"}},tooltip:{trigger:"axis",axisPointer:{textStyle:{color:"#fff"}}},grid:{borderWidth:0,top:110,bottom:95,textStyle:{color:"#000000"}},legend:{x:"15%",top:"10%",textStyle:{color:"#90979c"},data:["收入","支出","平均"]},calculable:!0,xAxis:[{type:"category",axisLine:{lineStyle:{color:"#0099CC"}},splitLine:{show:!1},axisTick:{show:!1},splitArea:{show:!1},axisLabel:{interval:0},data:t.xAxisData}],yAxis:[{type:"value",splitLine:{show:!1},axisLine:{lineStyle:{color:"#0099CC"}},axisTick:{show:!1},axisLabel:{interval:0},splitArea:{show:!1}}],dataZoom:[{show:!0,height:30,xAxisIndex:[0],bottom:30,start:10,end:80,handleIcon:"path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z",handleSize:"110%",handleStyle:{color:"#336699"},textStyle:{color:"#000"},borderColor:"#339999"},{type:"inside",show:!0,height:15,start:1,end:35}],series:[{name:"收入",type:"bar",stack:"总量",barMaxWidth:35,barGap:"10%",itemStyle:{normal:{color:"#66CC99",label:{show:!0,textStyle:{color:"#fff"},position:"insideTop",formatter:function(t){return t.value>0?t.value:""}}}},data:t.seriesIncome},{name:"支出",type:"bar",stack:"总量",itemStyle:{normal:{color:"#0099CC",barBorderRadius:0,label:{show:!0,position:"top",formatter:function(t){return t.value>0?t.value:""}}}},data:t.seriesPay},{name:"平均",type:"line",stack:"总量",symbolSize:10,symbol:"circle",itemStyle:{normal:{color:"#FF9966",barBorderRadius:0,label:{show:!0,position:"top",formatter:function(t){return t.value>0?t.value:""}}}},data:t.seriesaverage}]})}}},l=s,c=i("2877"),h=Object(c["a"])(l,o,a,!1,null,"63221885",null);e["default"]=h.exports}}]);