
// Defines the scroll path 

$(document).ready(init);

function init() {

    var midSize = $("#wrapper").width()/2;
    console.log(midSize);

	var $path = $.fn.scrollPath("getPath")
    .moveTo(midSize, 313, {
        callback: function() {
            $("nav a:nth-child(1)").css({"background": "url(images/menuBar.png) no-repeat center"});
        },  
        name: "flylight"
    })
    .lineTo(midSize, 1200, {name: "idea"})
    .lineTo(midSize, 2085, {name: "concept"})
    .lineTo(midSize, 2975, {name: "design"})
    .lineTo(midSize, 3860, {name: "gallery"})
    .lineTo(midSize, 4745, {name: "project"});    

	$("#wrapper").scrollPath({drawPath: false, wrapAround: false});

    getPos();
    showHideVideo();

	$("nav").find("a").each(function() {
        var target = $(this).attr("href").replace("#", "");

		$(this).click(function(e) {
			e.preventDefault();

			$.fn.scrollPath("scrollTo", target, 2000, "easeInOutSine");

			$("nav").fadeOut(2000, function() {
				$("nav").fadeIn('slow');
			});
		});
	});
}


// Butterfly's path
function getPos() {
       
    var showOrHide = true;
    var butterfly = $("#butterfly");

    // First link
    $("nav a:nth-child(1)").click(function() {
        butterfly.each(function() {

            var position = butterfly.position();
            console.log(position);
            if(position.top >= 884 && position.top <= 1683)
            {
                butterfly.attr({src: "images/logosmall.gif"}).animate({
                    left: '+=150',
                    top: '-=890',
                    width: '+=67',
                    height: '+=49'
                }, 3000, 'easeInOutSine', function() {
                    butterfly.attr({src: "images/logo_home.png"}).css({"transform": "rotateY(0deg)"});
                    $(".light").fadeOut(500);
                    $("nav a:nth-child(1)").css({"background" : "url(images/menuBar.png) no-repeat center"});
                    $("nav a:nth-child(2)").css({"background" : "none"});
                });
            }
            
            
                if(position.top >= 1767 && position.top <= 2566)
                {
                    butterfly.attr({src: "images/logosmall.gif"}).css({"transform": "rotateY(180deg)"}).animate({
                        left: '-=295',
                        top: '-=1645',
                        width: '+=67',
                        height: '+=49'
                    }, 2500, 'easeInOutSine', function() {
                        butterfly.attr({src: "images/logo_home.png"}).css({"transform": "rotateY(0deg)"});
                        $("nav a:nth-child(1)").css({"background" : "url(images/menuBar.png) no-repeat center"});
                        $("nav a:nth-child(3)").css({"background" : "none"});
                    });
                }
            
                if(position.top >= 2670 && position.top <= 3695)
                {
                    butterfly.attr({src: "images/logosmall.gif"}).animate({
                        left: '+=255',
                        top: '-=2595',
                        width:'+=67',
                        height: '+=49'
                    }, 2500, 'easeInOutSine', function() {
                        butterfly.attr({src: "images/logo_home.png"});
                        $("nav a:nth-child(1)").css({"background" : "url(images/menuBar.png) no-repeat center"});
                        $("nav a:nth-child(4)").css({"background" : "none"});
                    });

                    backWing(); // Returns the wing from design section to concept section
                }
            
                if(position.top >= 3533 && position.top <= 4333)
                {
                    butterfly.attr({src: "images/logosmall.gif"}).animate({
                        left: '+=95',
                        top: '-=3495',
                        width:'+=67',
                        height: '+=49'
                    }, 2500, 'easeInOutSine', function() {
                        butterfly.attr({src: "images/logo_home.png"});
                        $("nav a:nth-child(1)").css({"background" : "url(images/menuBar.png) no-repeat center"});
                        $("nav a:nth-child(5)").css({"background" : "none"});
                    });
                }
            
                if(position.top >= 4416 && position.top <= 5216)
                {
                    butterfly.attr({src: "images/logosmall.gif"}).animate({
                        left: '+=95',
                        top: '-=4595',
                        width:'+=67',
                        height: '+=49'
                    }, 2500, 'easeInOutSine', function() {
                        butterfly.css({"transform": "rotateY(0deg)"}).attr({src: "images/logo_home.png"});
                        $("nav a:nth-child(1)").css({"background" : "url(images/menuBar.png) no-repeat center"});
                        $("nav a:nth-child(6)").css({"background" : "none"});
                    });
                }
            
        });
    });
    // End first link

    // Second link
    $("nav a:nth-child(2)").click(function() {
        butterfly.each(function() {

            var position = butterfly.position();
            console.log(position);
            
                if(position.top >= 0 && position.top <= 814)
                {
                    butterfly.css({"transform": "rotateY(180deg)"}).attr({src: "images/logosmall.gif"}).animate({
                        left: '-=150',
                        top: '+=890',
                        width: '-=67',
                        height: '-=49'
                    }, 2500, 'easeInOutSine', function() {
                        butterfly.css({"transform": "rotateY(0deg)"}).attr({src: "images/logo_small.png"});
                        $(".light").fadeIn(500);                              
                        $("nav a:nth-child(2)").css({"background" : "url(images/menuBar.png) no-repeat center"});
                        $("nav a:nth-child(1)").css({"background" : "none"});
                    });
                }
            
                if(position.top >= 1767 && position.top <= 2566)
                {
                    butterfly.attr({src: "images/logosmall.gif"}).css({"transform": "rotateY(180deg)"}).animate({
                        left: '-=445',
                        top: '-=755'
                    }, 2800, 'easeInOutSine', function() {
                        butterfly.css({"transform": "rotateY(0deg)"}).attr({src: "images/logo_small.png"});
                        $(".light").fadeIn(500);
                        $("nav a:nth-child(2)").css({"background" : "url(images/menuBar.png) no-repeat center"});
                        $("nav a:nth-child(3)").css({"background" : "none"});
                    });
                }
            
                if(position.top >= 2670 && position.top <= 3695)
                {
                    butterfly.attr({src: "images/logosmall.gif"}).animate({
                        left: '+=105',
                        top: '-=1705'
                    }, 2500, 'easeInOutSine',function() {
                        butterfly.attr({src: "images/logo_small.png"});
                        $(".light").fadeIn(500);
                        $("nav a:nth-child(2)").css({"background" : "url(images/menuBar.png) no-repeat center"});
                        $("nav a:nth-child(4)").css({"background" : "none"});
                    });

                    backWing(); // Returns the wing from design section to concept section
                }
        
                if(position.top >= 3533 && position.top <= 4333)
                {
                    butterfly.attr({src: "images/logosmall.gif"}).animate({
                        left: '-=55',
                        top: '-=2605'
                    }, 2500, 'easeInOutSine', function() {
                        butterfly.attr({src: "images/logo_small.png"});
                        $(".light").fadeIn(500);
                        $("nav a:nth-child(2)").css({"background" : "url(images/menuBar.png) no-repeat center"});
                        $("nav a:nth-child(5)").css({"background" : "none"});
                    });   
                }
            
                if(position.top >= 4416 && position.top <= 5216)
                {
                    butterfly.attr({src: "images/logosmall.gif"}).css({"transform": "rotateY(0deg)"}).animate({
                        left: '-=55',
                        top: '-=3705'
                    }, 2500, 'easeInOutSine', function() {
                        butterfly.attr({src: "images/logo_small.png"});
                        $(".light").fadeIn(500);
                        $("nav a:nth-child(2)").css({"background" : "url(images/menuBar.png) no-repeat center"});
                        $("nav a:nth-child(6)").css({"background" : "none"}); 
                    });
                }
            
        });
    });
    // End second link
    
    // Third link
    $("nav a:nth-child(3)").click(function() {
        butterfly.each(function() {

            var position = butterfly.position();
            console.log(position);
            
                if(position.top >= 0 && position.top <= 814)
                {
                    butterfly.attr({src: "images/logosmall.gif"}).animate({
                        left: '+=295',
                        top: '+=1645',
                        width: '-=67',
                        height: '-=49'
                    }, 2500, 'easeInOutSine', function() {
                        butterfly.attr({src: "images/logo_hex.png"});
                        $("nav a:nth-child(3)").css({"background" : "url(images/menuBar.png) no-repeat center"});
                        $("nav a:nth-child(1)").css({"background" : "none"});
                    });
                }
            
                if(position.top >= 884 && position.top <= 1683)
                {
                    butterfly.attr({src: "images/logosmall.gif"}).animate({
                        left: '+=445',
                        top: '+=755'
                    }, 2500, 'easeInSine', function() {
                        butterfly.attr({src: "images/logo_hex.png"}).css({"transform": "rotateY(0deg)"});
                        $(".light").fadeOut(500);
                        $("nav a:nth-child(3)").css({"background" : "url(images/menuBar.png) no-repeat center"});
                        $("nav a:nth-child(2)").css({"background" : "none"}); 
                    });      
                }
            
                if(position.top >= 2670 && position.top <= 3695)
                {
                    butterfly.attr({src: "images/logosmall.gif"}).animate({
                        left: '+=550',
                        top: '-=950'
                    }, 3500, 'easeInOutSine', function() {
                        butterfly.attr({src: "images/logo_hex.png"});
                        $("nav a:nth-child(3)").css({"background" : "url(images/menuBar.png) no-repeat center"});
                        $("nav a:nth-child(4)").css({"background" : "none"});
                    });

                    backWing(); // Returns the wing from design section to concept section
                }
            
                if(position.top >= 3533 && position.top <= 4333)
                {
                    butterfly.attr({src: "images/logosmall.gif"}).animate({
                        left: '+=390',
                        top: '-=1850'
                    }, 2500, 'easeInOutSine', function() {
                        butterfly.attr({src: "images/logo_hex.png"});
                        $("nav a:nth-child(3)").css({"background" : "url(images/menuBar.png) no-repeat center"});
                        $("nav a:nth-child(5)").css({"background" : "none"});
                    });   
                }
            
                if(position.top >= 4416 && position.top <= 5216)
                {
                    butterfly.attr({src: "images/logosmall.gif"}).css({"transform": "rotateY(0deg)"}).animate({
                        left: '+=390',
                        top: '-=2950'
                    }, 3000, 'easeInOutSine', function() {
                        butterfly.attr({src: "images/logo_hex.png"});
                        $("nav a:nth-child(3)").css({"background" : "url(images/menuBar.png) no-repeat center"});
                        $("nav a:nth-child(6)").css({"background" : "none"});
                    });
                }
            
        });
    });
    // End third link

    // Fourth link
    $("nav a:nth-child(4)").click(function() {
        butterfly.each(function() {

            var position = butterfly.position();
            console.log(position);
            
                if(position.top >= 0 && position.top <= 814)
                {
                    butterfly.attr({src: "images/logosmall.gif"}).css({"transform": "rotateY(180deg)"}).animate({
                        left: '-=255',
                        top: '+=2595',
                        width: '-=67',
                        height: '-=49'
                    }, 2500, 'easeInOutSine', function() {
                        butterfly.attr({src: "images/logo_small.png"}).css({"transform": "rotateY(0deg)"});
                        $("nav a:nth-child(4)").css({"background" : "url(images/menuBar.png) no-repeat center"});
                        $("nav a:nth-child(1)").css({"background" : "none"});
                    });
                    
                    rotateWing();   // Rotates the butterfly's wing from concept to design
                }
            
                if(position.top >= 884 && position.top <= 1683)
                {
                    butterfly.attr({src: "images/logosmall.gif"}).css({"transform": "rotateY(180deg)"}).animate({
                        left: '-=105',
                        top: '+=1705'
                    }, 2500, 'easeInOutSine', function() {
                        butterfly.attr({src: "images/logo_small.png"}).css({"transform": "rotateY(0deg)"});
                        $(".light").fadeOut(500);
                        $("nav a:nth-child(4)").css({"background" : "url(images/menuBar.png) no-repeat center"});
                        $("nav a:nth-child(2)").css({"background" : "none"});
                    });
                    
                    rotateWing();   // Rotates the butterfly's wing from concept to design
                }
            
                if(position.top >= 1767 && position.top <= 2566)
                {
                    butterfly.attr({src: "images/logosmall.gif"}).css({"transform": "rotateY(180deg)"}).animate({
                        left: '-=550',
                        top: '+=950'
                    }, 2000, 'easeInOutSine', function() {
                        butterfly.css({"transform": "rotateY(0deg)"}).attr({src: "images/logo_small.png"});
                        $("nav a:nth-child(4)").css({"background" : "url(images/menuBar.png) no-repeat center"});
                        $("nav a:nth-child(3)").css({"background" : "none"});
                    }); 

                    rotateWing();   // Rotates the butterfly's wing from concept to design
                }
            
                if(position.top >= 3533 && position.top <= 4333)
                {
                    butterfly.attr({src: "images/logosmall.gif"}).css({"transform": "rotateY(180deg)"}).animate({
                        left: '-=160',
                         top: '-=900'
                    }, 3200, 'easeInOutSine', function() {
                        butterfly.css({"transform": "rotateY(0deg)"}).attr({src: "images/logo_small.png"});
                        $("nav a:nth-child(4)").css({"background" : "url(images/menuBar.png) no-repeat center"});
                        $("nav a:nth-child(5)").css({"background" : "none"});
                    });

                    rotateWing();   // Rotates the butterfly's wing from concept to design
                }
            
                if(position.top >= 4416 && position.top <= 5216)
                {
                    butterfly.attr({src: "images/logosmall.gif"}).css({"transform": "rotateY(180deg)"}).animate({
                        left: '-=160',
                        top: '-=2000'
                    }, 2500, 'easeInOutSine', function() {
                        butterfly.css({"transform": "rotateY(0deg)"}).attr({src: "images/logo_small.png"});
                        $("nav a:nth-child(4)").css({"background" : "url(images/menuBar.png) no-repeat center"});
                        $("nav a:nth-child(6)").css({"background" : "none"});
                    });
                    
                    rotateWing();   // Rotates the butterfly's wing from concept to design
                }
            
        });
    });
    // End fourth link

    // Fifth link
    $("nav a:nth-child(5)").click(function() {
        butterfly.each(function() {

            var position = butterfly.position();
            console.log(position);
        
                if(position.top >= 0 && position.top <= 814)
                {
                    butterfly.attr({src: "images/logosmall.gif"}).css({"transform": "rotateY(180deg)"}).animate({
                        left: '-=95',
                        top: '+=3495',
                        width: '-=67',
                        height: '-=49'
                    }, 2500, 'easeInOutSine', function() {
                        butterfly.attr({src: "images/logo_small.png"}).css({"transform": "rotateY(0deg)"});
                        $("nav a:nth-child(5)").css({"background" : "url(images/menuBar.png) no-repeat center"});
                        $("nav a:nth-child(1)").css({"background" : "none"});
                    });
                }
            
                if(position.top >= 884 && position.top <= 1683)
                {
                    butterfly.attr({src: "images/logosmall.gif"}).css({"transform": "rotateY(180deg)"}).animate({
                        left: '+=55',
                        top: '+=2605'
                    }, 2500, 'easeInOutSine', function() {
                        butterfly.attr({src: "images/logo_small.png"}).css({"transform": "rotateY(0deg)"});
                        $(".light").fadeOut(500);
                        $("nav a:nth-child(5)").css({"background" : "url(images/menuBar.png) no-repeat center"});
                        $("nav a:nth-child(2)").css({"background" : "none"});
                    });
                }
            
                if(position.top >= 1767 && position.top <= 2566)
                {
                    butterfly.attr({src: "images/logosmall.gif"}).css({"transform": "rotateY(180deg)"}).animate({
                        left: '-=390',
                        top: '+=1850'
                    }, 2500, 'easeInOutSine', function() {
                        butterfly.css({"transform": "rotateY(0deg)"}).attr({src: "images/logo_small.png"});
                        $("nav a:nth-child(5)").css({"background" : "url(images/menuBar.png) no-repeat center"});
                        $("nav a:nth-child(3)").css({"background" : "none"});
                    });
                }
        
                if(position.top >= 2650 && position.top <= 3450)
                {
                    butterfly.attr({src: "images/logosmall.gif"}).animate({
                        left: '+=160',
                        top: '+=900'
                    }, 2000, 'easeInOutSine', function() {
                        butterfly.attr({src: "images/logo_small.png"});
                        $("nav a:nth-child(5)").css({"background" : "url(images/menuBar.png) no-repeat center"});
                        $("nav a:nth-child(4)").css({"background" : "none"});
                    });       

                    backWing(); // Returns the wing from design section to concept section
                }
            
                if(position.top >= 4416 && position.top <= 5216)
                {
                    butterfly.attr({src: "images/logosmall.gif"}).css({"transform": "rotateY(0deg)"}).animate({
                        top: '-=1100'
                    }, 2500, 'easeInOutSine',function() {
                        butterfly.fadeTo(30, 1).attr({src: "images/logo_small.png"});
                        $("nav a:nth-child(5)").css({"background" : "url(images/menuBar.png) no-repeat center"});
                        $("nav a:nth-child(6)").css({"background" : "none"});
                    });
                }
            
        });
    });
    // End fifth link

    // Sixth link
    $("nav a:nth-child(6)").click(function() {
        butterfly.each(function() {

            var position = butterfly.position();
            console.log(position);
            
                if(position.top >= 0 && position.top <= 814)
                {
                    butterfly.attr({src: "images/logosmall.gif"}).css({"transform": "rotateY(180deg)"}).animate({
                        left: '-=95',
                        top: '+=4595',
                        width: '-=67',
                        height: '-=49'
                    }, 2500, 'easeInOutSine', function() {
                        butterfly.attr({src: "images/logo_small.png"});
                        $("nav a:nth-child(6)").css({"background" : "url(images/menuBar.png) no-repeat center"});
                        $("nav a:nth-child(1)").css({"background" : "none"});
                    });
                }
            
                if(position.top >= 884 && position.top <= 1683)
                {
                    butterfly.attr({src: "images/logosmall.gif"}).css({"transform": "rotateY(180deg)"}).animate({
                        left: '+=55',
                        top: '+=3705'
                    }, 2500, 'easeInOutSine', function() {
                        butterfly.attr({src: "images/logo_small.png"});
                        $(".light").fadeOut(500);
                        $("nav a:nth-child(6)").css({"background" : "url(images/menuBar.png) no-repeat center"});
                        $("nav a:nth-child(2)").css({"background" : "none"});
                    });
                }
        
                if(position.top >= 1767 && position.top <= 2566)
                {
                    butterfly.attr({src: "images/logosmall.gif"}).css({"transform": "rotateY(180deg)"}).animate({
                        left: '-=390',
                        top: '+=2950'
                    }, 2500, 'easeInOutSine', function() {
                        butterfly.attr({src: "images/logo_small.png"});
                        $("nav a:nth-child(6)").css({"background" : "url(images/menuBar.png) no-repeat center"});
                        $("nav a:nth-child(3)").css({"background" : "none"});
                    });
                }
        
                if(position.top >= 2650 && position.top <= 3450)
                {
                    butterfly.attr({src: "images/logosmall.gif"}).animate({
                        left: '+=160',
                        top: '+=2000'
                    }, 2500, 'easeInOutSine', function() {
                        butterfly.attr({src: "images/logo_small.png"}).css({"transform": "rotateY(180deg)"});
                        $("nav a:nth-child(6)").css({"background" : "url(images/menuBar.png) no-repeat center"});
                        $("nav a:nth-child(4)").css({"background" : "none"});
                    });

                    backWing(); // Returns the wing from design section to concept section
                }
            
                if(position.top >= 3533 && position.top <= 4333)
                {
                    butterfly.attr({src: "images/logosmall.gif"}).css({"transform": "rotateY(180deg)"}).animate({
                        top: '+=1100'
                    }, 2500, 'easeInOutSine', function() {
                        butterfly.attr({src: "images/logo_small.png"});
                        $("nav a:nth-child(6)").css({"background" : "url(images/menuBar.png) no-repeat center"});
                        $("nav a:nth-child(5)").css({"background" : "none"});
                    });
                }
            
        });
    });
    // End sixth link
}

// Shows and hides the video section
function showHideVideo() {

    var video = $("#video");

    // Display the video section and autoplay the video when click the play button
    $("#playbtn").click(function() {
        video.each(function() {

            var position = video.position();
            
            if(position.left >= 800)
            {
                $("#closebtn").show('slow');
                video.animate({
                    left: '-=825'
                }, 1800, 'easeInOutSine', function() {
                    $('iframe#vimeo-player').attr('src','http://player.vimeo.com/video/70869094?title=0&amp;byline=0&amp;portrait=0&autoplay=1');
                });
            }
        });
    });

    // Hide the video section and stops the video when click the exit button
    $("#closebtn").click(function() { 
        $(this).hide('slow');
        $("#video").animate({
            left: '+=1580'
        }, 1800, 'easeInOutSine', function() {
            $('iframe#vimeo-player').attr('src','');
        });
    });    
}


// Rotates the butterfly's wing from concept to design
function rotateWing() {

    var $wing = $(".wing")

    $wing.animate({
        left: '-=400',
        top: '+=900',
        width: '+=44',
        height: '+=58'
    }, 
    {
        step: function(now, fx) {
            $(this).css('-webkit-transform','rotate('+(now+8)+'deg)');
            $(this).css('-moz-transform','rotate('+(now+8)+'deg)'); 
            $(this).css('-ms-transform','rotate('+(now+8)+'deg)');
            $(this).css('-o-transform','rotate('+(now+8)+'deg)');
            $(this).css('transform','rotate('+(now+8)+'deg)');
            }, duration: 2300
        }, 'linear');                
}

// Returns the wing from design section to concept section
function backWing() {
    var $wing = $(".wing");

    $wing.animate({
        left: '+=400',
        top: '-=900',
        width: '-=44',
        height: '-=58'
    },
    {
        step: function(now, fx) {
            $(this).css('-webkit-transform','rotate('+(now+260)+'deg)');
            $(this).css('-moz-transform','rotate('+(now+260)+'deg)'); 
            $(this).css('-ms-transform','rotate('+(now+260)+'deg)');
            $(this).css('-o-transform','rotate('+(now+260)+'deg)');
            $(this).css('transform','rotate('+(now+260)+'deg)');
        }, duration: 2300
    }, 'easeInOutSine');
}

