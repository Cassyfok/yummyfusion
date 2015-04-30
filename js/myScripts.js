

$('#myTab a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})

$(document).ready(function(){
	// call the accordion function on the div with an id of accordion
	$( "#accordion" ).accordion();
});

$(function() {
    $( "#dialog1" ).dialog({
      autoOpen: false,
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        effect: "explode",
        duration: 400
      }
    });
 
    $( "#opener1" ).click(function() {
      $( "#dialog1" ).dialog( "open" );
    });
  });
  
$(function() {
    $( "#dialog2" ).dialog({
      autoOpen: false,
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        effect: "explode",
        duration: 400
      }
    });
 
    $( "#opener2" ).click(function() {
      $( "#dialog2" ).dialog( "open" );
    });
  });

$(function() {
    $( "#dialog3" ).dialog({
      autoOpen: false,
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        effect: "explode",
        duration: 400
      }
    });
 
    $( "#opener3" ).click(function() {
      $( "#dialog3" ).dialog( "open" );
    });
  });
  
  
 $(function() {
     $( "#dialog4" ).dialog({
       autoOpen: false,
       show: {
         effect: "blind",
         duration: 1000
       },
       hide: {
         effect: "explode",
         duration: 400
       }
     });
  
     $( "#opener4" ).click(function() {
       $( "#dialog4" ).dialog( "open" );
     });
  });
  
 $(function() {
     $( "#dialog5" ).dialog({
       autoOpen: false,
       show: {
         effect: "blind",
         duration: 1000
       },
       hide: {
         effect: "explode",
         duration: 400
       }
     });
  
     $( "#opener5" ).click(function() {
       $( "#dialog5" ).dialog( "open" );
     });
  });
  
 $(function() {
    $( "#dialog6" ).dialog({
      autoOpen: false,
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        effect: "explode",
        duration: 800
      }
    });
 
    $( "#opener6" ).click(function() {
      $( "#dialog6" ).dialog( "open" );
    });
  });
  
  
 $(function() {
     $( "#dialog7" ).dialog({
       autoOpen: false,
       show: {
         effect: "blind",
         duration: 1000
       },
       hide: {
         effect: "explode",
         duration: 800
       }
     });
  
     $( "#opener7" ).click(function() {
       $( "#dialog7" ).dialog( "open" );
     });
  });
  
 $(function() {
     $( "#dialog8" ).dialog({
       autoOpen: false,
       show: {
         effect: "blind",
         duration: 1000
       },
       hide: {
         effect: "explode",
         duration: 800
       }
     });
  
     $( "#opener8" ).click(function() {
       $( "#dialog8" ).dialog( "open" );
     });
  }); 
  
 $(function() {
     $( "#dialog9" ).dialog({
       autoOpen: false,
       show: {
         effect: "blind",
         duration: 1000
       },
       hide: {
         effect: "explode",
         duration: 400
       }
     });
  
     $( "#opener9" ).click(function() {
       $( "#dialog9" ).dialog( "open" );
     });
  });  
  
  $(function() {
        $( "#dialog10" ).dialog({
          autoOpen: false,
          show: {
            effect: "blind",
            duration: 1000
          },
          hide: {
            effect: "explode",
            duration: 400
          }
        });
     
        $( "#opener10" ).click(function() {
          $( "#dialog10" ).dialog( "open" );
        });
  });  
  
 $(function() {
        $( "#dialog11" ).dialog({
          autoOpen: false,
          show: {
            effect: "blind",
            duration: 1000
          },
          hide: {
            effect: "explode",
            duration: 400
          }
        });
     
        $( "#opener11" ).click(function() {
          $( "#dialog11" ).dialog( "open" );
        });
  });   
   
$(function() {
        $( "#dialog12" ).dialog({
          autoOpen: false,
          show: {
            effect: "blind",
            duration: 1000
          },
          hide: {
            effect: "explode",
            duration: 400
          }
        });
     
        $( "#opener12" ).click(function() {
          $( "#dialog12" ).dialog( "open" );
        });
  });     
  
$(function() {
        $( "#dialog13" ).dialog({
          autoOpen: false,
          show: {
            effect: "blind",
            duration: 1000
          },
          hide: {
            effect: "explode",
            duration: 800
          }
        });
     
        $( "#opener13" ).click(function() {
          $( "#dialog13" ).dialog( "open" );
        });
  });      
  
  
 $(function() {
     $( document ).tooltip({
       items: "img, [data-geo], [title]",
       content: function() {
         var element = $( this );
         if ( element.is( "[data-geo]" ) ) {
           var text = element.text();
           return "<img class='map' alt='" + text +
             "' src='http://maps.google.com/maps/api/staticmap?" +
             "zoom=11&size=500x500&maptype=terrain&sensor=false&center=" +
             text + "'>";
         }
         if ( element.is( "[title]" ) ) {
           return element.attr( "title" );
         }
         if ( element.is( "img" ) ) {
           return element.attr( "alt" );
         }
       }
     });
  });
  
  
 var _gaq = _gaq || [];
      _gaq.push(['_setAccount', 'UA-146052-10']);
      _gaq.push(['_trackPageview']);
      (function() {
        var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
      })();
      
$(document).ready(function(){
    // Set the interval to be 5 seconds
    var t = setInterval(function(){
        $(".carousel ul").animate({marginLeft:-500},800,function(){
            $(this).find("li:last").after($(this).find("li:first"));
            $(this).css({marginLeft:0});
        })
    },5000);
}); 


function initialize() {
  var mapOptions = {
    zoom: 8,
    center: new google.maps.LatLng(53.36206,-6.50224),
    mapTypeId: google.maps.MapTypeId.HYBRID
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  var marker = new google.maps.Marker({
    position: map.getCenter(53.36206,-6.50224),
    map: map,
    animation:google.maps.Animation.BOUNCE,
    title: 'We Are Here!'
    
  });
  

  google.maps.event.addListener(map, 'center_changed', function() {
    // 2 seconds after the center of the map has changed, pan back to the
    // marker.
    window.setTimeout(function() {
      map.panTo(marker.getPosition());
    }, 2000);
  });

  google.maps.event.addListener(marker, 'click', function() {
    map.setZoom(40);
    map.setCenter(marker.getPosition());
  });
}

google.maps.event.addDomListener(window, 'load', initialize);