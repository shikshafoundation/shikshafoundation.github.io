var playerYouTube1;
function onYouTubeIframeAPIReady() {
   playerYouTube1 = new YT.Player('YouTube1', {
      events: {
      }
   });
}
var features = '';
function searchPage(features)
{
   $('#SiteSearch2-dialog').dialog('open');
   $('#SiteSearch2-dialog').empty();
   searchResults('SiteSearch2', 'SiteSearch2-dialog', 250, 5, false, true, false, false, '_parent', 'No results', ' result(s) found for search term: ', 'seconds');
   $('#SiteSearch2-dialog').dialog('option', 'position', 'center');
   return false;
}
$(document).ready(function()
{
   $("#wb_ResponsiveMenu1 ul li a").click(function(event)
   {
      $("#wb_ResponsiveMenu1 input").prop("checked", false);
   });
   $("a[href*='#Bookmark1']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_Bookmark1').offset().top }, 600, 'linear');
   });
   searchParseURL('SiteSearch2');
   $("#SiteSearch2-dialog").dialog(
   {
      modal: true,
      width: 400,
      height: 300,
      position: { my: 'center', at: 'center', of: window },
      resizable: true,
      draggable: false,
      closeOnEscape: true,
      show: false,
      hide: false,
      autoOpen: false,
      buttons: 
      {
         Close: function() 
         {
            $(this).dialog('close');
         }
      }
   });
   $("a[href*='#LayoutGrid14']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_LayoutGrid14').offset().top }, 600, 'easeInCubic');
   });
   if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {$('#preloader').remove();}
});
$(window).on('load', function()
{
   $('#preloader').remove();
});
