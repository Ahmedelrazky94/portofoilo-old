/*!
 DMXzone Preloader
 Version: 1.0.0
 (c) 2018 DMXzone.com
 @build 2018-01-30 17:30:56
 */
document.documentElement.classList.add("dmxCloak"),document.addEventListener("DOMContentLoaded",function(){window.requestAnimationFrame(function(){document.documentElement.classList.remove("dmxCloak")})}),dmx.Component("preloader",{constructor:function(e,t){this.docLoaded=!1,this.imgLoaded=!1,this.dataLoaded=!1,this.loaded=!1,dmx.BaseComponent.call(this,e,t)},attributes:{preview:{type:Boolean,default:!1},color:{type:String,default:"#333"},bgcolor:{type:String,default:"#fff"},size:{type:Number,default:60},spinner:{type:String,default:null}},methods:{show:function(){this.show()},hide:function(){this.hide()}},event:{},spinners:{rotatingPlane:0,doubleBounce:2,wave:5,wanderingCubes:2,pulse:0,chasingDots:2,threeBounce:3,circle:12,cubeGrid:9,fadingCircle:12,foldingCube:4},render:function(e){if(this.$node.classList.add("dmxPreloader"),this.$node.style.setProperty("--color",this.props.color),this.$node.style.setProperty("--bgcolor",this.props.bgcolor),this.$node.style.setProperty("--size",this.props.size+"px"),this.props.spinner&&this.spinners.hasOwnProperty(this.props.spinner)){for(var t='<div class="dmxPreloader-spinner dmxPreloader-'+this.props.spinner+'">',o=0;o<this.spinners[this.props.spinner];o++)t+="<div></div>";t+="</div>",this.$node.innerHTML=t}this.show(),window.addEventListener("load",function(){dmx.requestUpdate()})},update:function(e){this.loaded||this.props.preview||(JSON.stringify(e)!=JSON.stringify(this.props)&&(this.$node.style.setProperty("--color",this.props.color),this.$node.style.setProperty("--bgcolor",this.props.bgcolor),this.$node.style.setProperty("--size",this.props.size+"px")),this.checkDocLoaded(),this.checkImgLoaded(),this.checkDataLoaded(),this.docLoaded&&this.imgLoaded&&this.dataLoaded&&requestAnimationFrame(function(){this.loaded||(this.checkDocLoaded(),this.checkImgLoaded(),this.checkDataLoaded(),this.docLoaded&&this.imgLoaded&&this.dataLoaded&&(this.hide(),this.loaded=!0))}.bind(this)))},show:function(){this.$node.style.removeProperty("opacity"),this.$node.style.removeProperty("z-index"),document.body.style.setProperty("overflow","hidden")},hide:function(){this.$node.style.setProperty("opacity",0),this.$node.style.setProperty("z-index",-1),document.body.style.removeProperty("overflow")},checkDocLoaded:function(){this.docLoaded="complete"===document.readyState},checkImgLoaded:function(){this.imgLoaded=dmx.array(document.getElementsByTagName("IMG")).every(function(e){if(!e.hasAttribute("src")&&e.hasAttribute("dmx-bind:src")&&(e.isLoaded=!1),e.isLoaded===!0)return!0;if(e.completed&&0!==e.naturalHeight)return!0;if(!e.isListening){var t=new Image;t.addEventListener("load",function(){e.isLoaded=!0,dmx.requestUpdate()}),t.addEventListener("error",function(){e.isLoaded=!0,dmx.requestUpdate()}),t.src=e.src,e.isListening=!0}return e.isLoaded},this)},checkDataLoaded:function(){this.dataLoaded=this.getDatasets().every(function(e){return null!=e.data})},getDatasets:function(){var e=[];return dmx.app.children.forEach(function t(o){"serverconnect"!=o.data.$type||o.props.noload||e.push(o.data),o.children.forEach(t)}),e}});

