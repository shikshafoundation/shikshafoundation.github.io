/* FancyBox - jQuery Plugin - Simple and fancy lightbox alternative - Examples and documentation at: http://fancybox.net
 * Copyright (c) 2008 - 2023 Janis Skarnelis
 * That said, it is hardly a one-person project. Many people have submitted bugs, code, and offered their advice freely. Their support is greatly appreciated.
 * Version: 1.3.4b (01/26/2023)
 * Dual licensed under the MIT and GPL licenses: http://www.opensource.org/licenses/mit-license.php http://www.gnu.org/licenses/gpl.html 
 */
(function(a){var n,w,u,e,D,m,C,h,z,A,r=0,d={},p=[],q=0,c={},k=[],E=null,v=new Image,F=/\.(jpg|gif|png|bmp|jpeg|webp)(.*)?$/i,I=/[^\.]\.(swf)\s*$/i,G,H=1,y=0,x="",t,f,l=!1,B=a.extend(a("<div/>")[0],{prop:0});_abort=function(){w.hide();v.onerror=v.onload=null;E&&E.abort();n.empty()};_error=function(){!1===d.onError(p,r,d)?(w.hide(),l=!1):(d.titleShow=!1,d.width="auto",d.height="auto",n.html('<p id="fancybox-error">The requested content cannot be loaded.<br />Please try again later.</p>'),_process_inline())};
_start=function(){var b=p[r],g,c,e,f,k,h;_abort();d=a.extend({},a.fn.fancybox.defaults,"undefined"==typeof a(b).data("fancybox")?d:a(b).data("fancybox"));h=d.onStart(p,r,d);if(!1===h)l=!1;else{"object"==typeof h&&(d=a.extend(d,h));e=d.title||(b.nodeName?a(b).attr("title"):b.title)||"";b.nodeName&&!d.orig&&(d.orig=a(b).children("img:first").length?a(b).children("img:first"):a(b));""===e&&d.orig&&d.titleFromAlt&&(e=d.orig.attr("alt"));g=d.href||(b.nodeName?a(b).attr("href"):b.href)||null;if(/^(?:javascript)/i.test(g)||
"#"==g)g=null;d.type?(c=d.type,g||(g=d.content)):d.content?c="html":g&&(c=g.match(F)?"image":g.match(I)?"swf":a(b).hasClass("iframe")?"iframe":0===g.indexOf("#")?"inline":"ajax");if(c)switch("inline"==c&&(b=g.substr(g.indexOf("#")),c=0<a(b).length?"inline":"ajax"),d.type=c,d.href=g,d.title=e,d.autoDimensions&&("html"==d.type||"inline"==d.type||"ajax"==d.type?(d.width="auto",d.height="auto"):d.autoDimensions=!1),d.modal&&(d.overlayShow=!0,d.hideOnOverlayClick=!1,d.hideOnContentClick=!1,d.enableEscapeButton=
!1,d.showCloseButton=!1),d.padding=parseInt(d.padding,10),d.margin=parseInt(d.margin,10),n.css("padding",d.padding+d.margin),a(".fancybox-inline-tmp").unbind("fancybox-cancel").bind("fancybox-change",function(){a(this).replaceWith(m.children())}),c){case "html":n.html(d.content);_process_inline();break;case "inline":if(!0===a(b).parent().is("#fancybox-content")){l=!1;break}a('<div class="fancybox-inline-tmp" />').hide().insertBefore(a(b)).bind("fancybox-cleanup",function(){a(this).replaceWith(m.children())}).bind("fancybox-cancel",
function(){a(this).replaceWith(n.children())});a(b).appendTo(n);_process_inline();break;case "image":l=!1;a.fancybox.showActivity();v=new Image;v.onerror=function(){_error()};v.onload=function(){l=!0;v.onerror=v.onload=null;_process_image()};v.src=g;break;case "swf":d.scrolling="no";f='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="'+d.width+'" height="'+d.height+'"><param name="movie" value="'+g+'"></param>';k="";a.each(d.swf,function(b,a){f+='<param name="'+b+'" value="'+a+
'"></param>';k+=" "+b+'="'+a+'"'});f+='<embed src="'+g+'" type="application/x-shockwave-flash" width="'+d.width+'" height="'+d.height+'"'+k+"></embed></object>";n.html(f);_process_inline();break;case "ajax":l=!1;a.fancybox.showActivity();d.ajax.win=d.ajax.success;E=a.ajax(a.extend({},d.ajax,{url:g,data:d.ajax.data||{},error:function(b,a,c){0<b.status&&_error()},success:function(b,a,c){if(200==("object"==typeof c?c:E).status){if("function"==typeof d.ajax.win){h=d.ajax.win(g,b,a,c);if(!1===h){w.hide();
return}if("string"==typeof h||"object"==typeof h)b=h}n.html(b);_process_inline()}}}));break;case "iframe":_show()}else _error()}};_process_inline=function(){var b=d.width,c=d.height,b=-1<b.toString().indexOf("%")?parseInt((a(window).width()-2*d.margin)*parseFloat(b)/100,10)+"px":"auto"==b?"auto":b+"px",c=-1<c.toString().indexOf("%")?parseInt((a(window).height()-2*d.margin)*parseFloat(c)/100,10)+"px":"auto"==c?"auto":c+"px";n.wrapInner('<div style="width:'+b+";height:"+c+";overflow: "+("auto"==d.scrolling?
"auto":"yes"==d.scrolling?"scroll":"hidden")+';position:relative;"></div>');d.width=n.width();d.height=n.height();_show()};_process_image=function(){d.width=v.width;d.height=v.height;a("<img />").attr({id:"fancybox-img",src:v.src,alt:d.title}).appendTo(n);_show()};_show=function(){var b,g;w.hide();e.is(":visible")&&!1===c.onCleanup(k,q,c)?(a.event.trigger("fancybox-cancel"),l=!1):(l=!0,a(m.add(u)).unbind(),a(window).unbind("resize.fb scroll.fb"),a(document).unbind("keydown.fb"),e.is(":visible")&&
"outside"!==c.titlePosition&&e.css("height",e.height()),k=p,q=r,c=d,c.overlayShow?(u.css({"background-color":c.overlayColor,opacity:c.overlayOpacity,cursor:c.hideOnOverlayClick?"pointer":"auto",height:a(document).height()}),u.is(":visible")||u.show()):u.hide(),f=_get_zoom_to(),_process_title(),e.is(":visible")?(a(C.add(z).add(A)).hide(),b=e.position(),t={top:b.top,left:b.left,width:e.width(),height:e.height()},g=t.width==f.width&&t.height==f.height,m.fadeTo(c.changeFade,.3,function(){var b=function(){m.html(n.contents()).fadeTo(c.changeFade,
1,_finish)};a.event.trigger("fancybox-change");m.empty().removeAttr("filter").css({"border-width":c.padding,width:f.width-2*c.padding,height:d.autoDimensions?"auto":f.height-y-2*c.padding});g?b():(B.prop=0,a(B).animate({prop:1},{duration:c.changeSpeed,easing:c.easingChange,step:_draw,complete:b}))})):(e.removeAttr("style"),m.css("border-width",c.padding),"elastic"==c.transitionIn?(t=_get_zoom_from(),m.html(n.contents()),e.show(),c.opacity&&(f.opacity=0),B.prop=0,a(B).animate({prop:1},{duration:c.speedIn,
easing:c.easingIn,step:_draw,complete:_finish})):("inside"==c.titlePosition&&0<y&&h.show(),m.css({width:f.width-2*c.padding,height:d.autoDimensions?"auto":f.height-y-2*c.padding}).html(n.contents()),e.css(f).fadeIn("none"==c.transitionIn?0:c.speedIn,_finish))))};_format_title=function(b){return b&&b.length?"float"==c.titlePosition?'<table id="fancybox-title-float-wrap" cellpadding="0" cellspacing="0"><tr><td id="fancybox-title-float-left"></td><td id="fancybox-title-float-main">'+b+'</td><td id="fancybox-title-float-right"></td></tr></table>':
'<div id="fancybox-title-'+c.titlePosition+'">'+b+"</div>":!1};_process_title=function(){x=c.title||"";y=0;h.empty().removeAttr("style").removeClass();if(!1!==c.titleShow&&(x=a.isFunction(c.titleFormat)?c.titleFormat(x,k,q,c):_format_title(x))&&""!==x)switch(h.addClass("fancybox-title-"+c.titlePosition).html(x).appendTo("body").show(),c.titlePosition){case "inside":h.css({width:f.width-2*c.padding,marginLeft:c.padding,marginRight:c.padding});y=h.outerHeight(!0);h.appendTo(D);f.height+=y;break;case "over":h.css({marginLeft:c.padding,
width:f.width-2*c.padding,bottom:c.padding}).appendTo(D);break;case "float":h.css("left",-1*parseInt((h.width()-f.width-40)/2,10)).appendTo(e);break;default:h.css({width:f.width-2*c.padding,paddingLeft:c.padding,paddingRight:c.padding}).appendTo(e)}h.hide()};_set_navigation=function(){(c.enableEscapeButton||c.enableKeyboardNav)&&a(document).bind("keydown.fb",function(b){27==b.keyCode&&c.enableEscapeButton?(b.preventDefault(),a.fancybox.close()):37!=b.keyCode&&39!=b.keyCode||!c.enableKeyboardNav||
"INPUT"===b.target.tagName||"TEXTAREA"===b.target.tagName||"SELECT"===b.target.tagName||(b.preventDefault(),a.fancybox[37==b.keyCode?"prev":"next"]())});c.showNavArrows?((c.cyclic&&1<k.length||0!==q)&&z.show(),(c.cyclic&&1<k.length||q!=k.length-1)&&A.show()):(z.hide(),A.hide())};_finish=function(){a.support.opacity||(m.css("filter","none"),e.css("filter","none"));d.autoDimensions&&m.css("height","auto");e.css("height","auto");x&&x.length&&h.show();c.showCloseButton&&
C.show();_set_navigation();c.hideOnContentClick&&m.bind("click",a.fancybox.close);c.hideOnOverlayClick&&u.bind("click",a.fancybox.close);a(window).bind("resize.fb",a.fancybox.resize);c.centerOnScroll&&a(window).bind("scroll.fb",a.fancybox.center);"iframe"==c.type&&a('<iframe id="fancybox-frame" name="fancybox-frame'+(new Date).getTime()+'" frameborder="0" hspace="0" '+("")+' scrolling="'+d.scrolling+'" src="'+c.href+'"></iframe>').appendTo(m);e.show();l=
!1;a.fancybox.center();c.onComplete(k,q,c);_preload_images()};_preload_images=function(){var b,a;k.length-1>q&&(b=k[q+1].href,"undefined"!==typeof b&&b.match(F)&&(a=new Image,a.src=b));0<q&&(b=k[q-1].href,"undefined"!==typeof b&&b.match(F)&&(a=new Image,a.src=b))};_draw=function(b){var a={width:parseInt(t.width+(f.width-t.width)*b,10),height:parseInt(t.height+(f.height-t.height)*b,10),top:parseInt(t.top+(f.top-t.top)*b,10),left:parseInt(t.left+(f.left-t.left)*b,10)};"undefined"!==typeof f.opacity&&
(a.opacity=.5>b?.5:b);e.css(a);m.css({width:a.width-2*c.padding,height:a.height-y*b-2*c.padding})};_get_viewport=function(){return[a(window).width()-2*c.margin,a(window).height()-2*c.margin,a(document).scrollLeft()+c.margin,a(document).scrollTop()+c.margin]};_get_zoom_to=function(){var b=_get_viewport(),a={},e=c.autoScale,f=2*c.padding;-1<c.width.toString().indexOf("%")?a.width=parseInt(b[0]*parseFloat(c.width)/100,10):a.width=c.width+f;-1<c.height.toString().indexOf("%")?a.height=parseInt(b[1]*parseFloat(c.height)/
100,10):a.height=c.height+f;e&&(a.width>b[0]||a.height>b[1])&&("image"==d.type||"swf"==d.type?(e=c.width/c.height,a.width>b[0]&&(a.width=b[0],a.height=parseInt((a.width-f)/e+f,10)),a.height>b[1]&&(a.height=b[1],a.width=parseInt((a.height-f)*e+f,10))):(a.width=Math.min(a.width,b[0]),a.height=Math.min(a.height,b[1])));a.top=parseInt(Math.max(b[3]-20,b[3]+.5*(b[1]-a.height-40)),10);a.left=parseInt(Math.max(b[2]-20,b[2]+.5*(b[0]-a.width-40)),10);return a};_get_obj_pos=function(a){var c=a.offset();c.top+=
parseInt(a.css("paddingTop"),10)||0;c.left+=parseInt(a.css("paddingLeft"),10)||0;c.top+=parseInt(a.css("border-top-width"),10)||0;c.left+=parseInt(a.css("border-left-width"),10)||0;c.width=a.width();c.height=a.height();return c};_get_zoom_from=function(){var b=d.orig?a(d.orig):!1,g={};b&&b.length?(b=_get_obj_pos(b),g={width:b.width+2*c.padding,height:b.height+2*c.padding,top:b.top-c.padding-20,left:b.left-c.padding-20}):(b=_get_viewport(),g={width:2*c.padding,height:2*c.padding,top:parseInt(b[3]+
.5*b[1],10),left:parseInt(b[2]+.5*b[0],10)});return g};_animate_loading=function(){w.is(":visible")?(a("div",w).css("top",-40*H+"px"),H=(H+1)%12):clearInterval(G)};a.fn.fancybox=function(b){if(!a(this).length)return this;a(this).data("fancybox",a.extend({},b,a.metadata?a(this).metadata():{})).unbind("click.fb").bind("click.fb",function(b){b.preventDefault();l||(l=!0,a(this).blur(),p=[],r=0,(b=a(this).attr("rel")||"")&&""!=b&&"nofollow"!==b?(p=a("a[rel="+b+"], area[rel="+b+"]"),r=p.index(this)):p.push(this),
_start())});return this};a.fancybox=function(b,c){var d;if(!l){l=!0;d="undefined"!==typeof c?c:{};p=[];r=parseInt(d.index,10)||0;if(a.isArray(b)){for(var e=0,f=b.length;e<f;e++)"object"==typeof b[e]?a(b[e]).data("fancybox",a.extend({},d,b[e])):b[e]=a({}).data("fancybox",a.extend({content:b[e]},d));p=jQuery.merge(p,b)}else"object"==typeof b?a(b).data("fancybox",a.extend({},d,b)):b=a({}).data("fancybox",a.extend({content:b},d)),p.push(b);if(r>p.length||0>r)r=0;_start()}};a.fancybox.showActivity=function(){clearInterval(G);
w.show();G=setInterval(_animate_loading,66)};a.fancybox.hideActivity=function(){w.hide()};a.fancybox.next=function(){return a.fancybox.pos(q+1)};a.fancybox.prev=function(){return a.fancybox.pos(q-1)};a.fancybox.pos=function(a){l||(a=parseInt(a),p=k,-1<a&&a<k.length?(r=a,_start()):c.cyclic&&1<k.length&&(r=a>=k.length?0:k.length-1,_start()))};a.fancybox.cancel=function(){l||(l=!0,a.event.trigger("fancybox-cancel"),_abort(),d.onCancel(p,r,d),l=!1)};a.fancybox.close=function(){function b(){u.fadeOut("fast");
h.empty().hide();e.hide();a.event.trigger("fancybox-cleanup");m.empty();c.onClosed(k,q,c);k=d=[];q=r=0;c=d={};l=!1}if(!l&&!e.is(":hidden"))if(l=!0,c&&!1===c.onCleanup(k,q,c))l=!1;else if(_abort(),a(C.add(z).add(A)).hide(),a(m.add(u)).unbind(),a(window).unbind("resize.fb scroll.fb"),a(document).unbind("keydown.fb"),m.find("iframe").attr("src","about:blank"),"inside"!==c.titlePosition&&h.empty(),e.stop(),"elastic"==c.transitionOut){t=_get_zoom_from();var g=e.position();f={top:g.top,left:g.left,width:e.width(),
height:e.height()};c.opacity&&(f.opacity=1);h.empty().hide();B.prop=1;a(B).animate({prop:0},{duration:c.speedOut,easing:c.easingOut,step:_draw,complete:b})}else e.fadeOut("none"==c.transitionOut?0:c.speedOut,b)};a.fancybox.resize=function(){u.is(":visible")&&u.css("height",a(document).height());view=_get_viewport();var b=view[0];b>d.width&&(b=d.width);a("#fancybox-wrap").css("width",b+2*c.padding);a("#fancybox-content").css("width",b);a.fancybox.center(!0)};a.fancybox.center=function(a){var d,f;l||
(f=!0===a?1:0,d=_get_viewport(),!f&&(e.width()>d[0]||e.height()>d[1])||e.stop().animate({top:parseInt(Math.max(d[3]-20,d[3]+.5*(d[1]-m.height()-40)-c.padding)),left:parseInt(Math.max(d[2]-20,d[2]+.5*(d[0]-m.width()-40)-c.padding))},"number"==typeof a?a:200))};a.fancybox.init=function(){a("#fancybox-wrap").length||(a("body").append(n=a('<div id="fancybox-tmp"></div>'),w=a('<div id="fancybox-loading"><div></div></div>'),u=a('<div id="fancybox-overlay"></div>'),e=a('<div id="fancybox-wrap"></div>')),
D=a('<div id="fancybox-outer"></div>').append('<div class="fancybox-bg" id="fancybox-bg-n"></div><div class="fancybox-bg" id="fancybox-bg-ne"></div><div class="fancybox-bg" id="fancybox-bg-e"></div><div class="fancybox-bg" id="fancybox-bg-se"></div><div class="fancybox-bg" id="fancybox-bg-s"></div><div class="fancybox-bg" id="fancybox-bg-sw"></div><div class="fancybox-bg" id="fancybox-bg-w"></div><div class="fancybox-bg" id="fancybox-bg-nw"></div>').appendTo(e),D.append(m=a('<div id="fancybox-content"></div>'),
C=a('<a id="fancybox-close"></a>'),h=a('<div id="fancybox-title"></div>'),z=a('<a href="javascript:;" id="fancybox-left"><span class="fancy-ico" id="fancybox-left-ico"></span></a>'),A=a('<a href="javascript:;" id="fancybox-right"><span class="fancy-ico" id="fancybox-right-ico"></span></a>')),C.click(a.fancybox.close),w.click(a.fancybox.cancel),z.click(function(b){b.preventDefault();a.fancybox.prev()}),A.click(function(b){b.preventDefault();a.fancybox.next()}),a.fn.mousewheel&&e.bind("mousewheel.fb",
function(b,c){if(l)b.preventDefault();else if(0==a(b.target).get(0).clientHeight||a(b.target).get(0).scrollHeight===a(b.target).get(0).clientHeight)b.preventDefault(),a.fancybox[0<c?"prev":"next"]()}),a.support.opacity||e.addClass("fancybox-ie"))};a.fn.fancybox.defaults={padding:10,margin:40,opacity:!1,modal:!1,cyclic:!1,scrolling:"auto",width:560,height:340,autoScale:!0,autoDimensions:!0,centerOnScroll:!1,ajax:{},swf:{wmode:"transparent"},hideOnOverlayClick:!0,hideOnContentClick:!1,overlayShow:!0,
overlayOpacity:.7,overlayColor:"#777",titleShow:!0,titlePosition:"float",titleFormat:null,titleFromAlt:!1,transitionIn:"fade",transitionOut:"fade",speedIn:300,speedOut:300,changeSpeed:300,changeFade:"fast",easingIn:"swing",easingOut:"swing",showCloseButton:!0,showNavArrows:!0,enableEscapeButton:!0,enableKeyboardNav:!0,onStart:function(){},onCancel:function(){},onComplete:function(){},onCleanup:function(){},onClosed:function(){},onError:function(){}};a(document).ready(function(){a.fancybox.init()})})(jQuery);