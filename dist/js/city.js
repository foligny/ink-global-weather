define(["require","model","weather-source-api"],function(e){function r(e){this.defaults=[],t.call(this,e)}var t=e("model"),n=e("weather-source-api");return r.prototype=new t,r.prototype.constructor=r,r.prototype.Load=function(e){var t=this;return n.Fetch(t,function(t){e(t)}),this},r.prototype.afterLoad=function(){for(var e in this.main)this[e]=this.main[e];this.temp=Math.round(this.temp*10)/10,this.temp_min=Math.round(this.temp_min*10)/10,this.temp_max=Math.round(this.temp_max*10)/10,this.weatherDescription="";for(var t=0;t<this.weather.length;t++)t>0&&(this.weatherDescription+=", "),this.weatherDescription+=this.weather[t].description},r});