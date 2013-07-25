
// Defines the scroll path 

$(document).ready(init);

function init() {

	var $path = $.fn.scrollPath("getPath")
    .moveTo(2220, 313, {
        callback: function() {
            $("nav a:nth-child(1)").css({"background": "url(images/menuBar.png) no-repeat center"});
        },  
        name: "flylight"
    })
    .lineTo(3766, 1646, {name: "idea"})
    .lineTo(2220, 1646, {name: "concept"})
    .lineTo(1600, 1700)
    .lineTo(682, 2972, {name: "design"})
    .lineTo(2220, 4298, {name: "gallery"})
    .lineTo(2220, 5624, {name: "project"});    

	$("#wrapper").scrollPath({drawPath: false, wrapAround: false});

    getPos();
    showHideVideo();

	$("nav").find("a").each(function() {
        var target = $(this).attr("href").replace("#", "");

		$(this).click(function(e) {
			e.preventDefault();

			$.fn.scrollPath("scrollTo", target, 3000, "easeInOutSine");

			$("nav").fadeOut(3000, function() {
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

            if(position.left >= 3160 && position.left <= 4440)
            {
                if(position.top >= 1324 && position.top <= 2138)
                {
                    butterfly.attr({src: "images/logosmall.gif"}).css({"transform": "rotateY(180deg)"}).animate({
                        left: '-=1340',
                        top: '-=1340',
                        width:'+=67',
                        height: '+=49'
                    }, 4000, 'easeInOutSine', function() {
                        butterfly.attr({src: "images/logo_home.png"}).css({"transform": "rotateY(0deg)"});
                        $(".light").fadeOut(500);
                        $("nav a:nth-child(1)").css({"background" : "url(images/menuBar.png) no-repeat center"});
                        $("nav a:nth-child(2)").css({"background" : "none"});
                    });
                }
            }
            if(position.left >= 1580 && position.left <= 2860)
            {
                if(position.top >= 1324 && position.top <= 2138)
                {
                    butterfly.attr({src: "images/logosmall.gif"}).css({"transform": "rotateY(180deg)"}).animate({
                        left: '-=555',
                        top: '-=1268',
                        width:'+=67',
                        height: '+=49'
                    }, 3000, 'easeInOutSine', function() {
                        butterfly.attr({src: "images/logo_home.png"}).css({"transform": "rotateY(0deg)"});
                        $("nav a:nth-child(1)").css({"background" : "url(images/menuBar.png) no-repeat center"});
                        $("nav a:nth-child(3)").css({"background" : "none"});
                    });
                }
            }
            if(position.left >= 0 && position.left <= 1280)
            {
                if(position.top >= 2670 && position.top <= 3695)
                {
                    butterfly.attr({src: "images/logosmall.gif"}).animate({
                        left: '+=1855',
                        top: '-=2628',
                        width:'+=67',
                        height: '+=49'
                    }, 3300, 'easeInOutSine', function() {
                        butterfly.attr({src: "images/logo_home.png"});
                        $("nav a:nth-child(1)").css({"background" : "url(images/menuBar.png) no-repeat center"});
                        $("nav a:nth-child(4)").css({"background" : "none"});
                    });

                    backWing(); // Returns the wing from design section to concept section
                }
            }
            if(position.left >= 1580 && position.left <= 2860)
            {
                if(position.top >= 3995 && position.top <= 4810)
                {
                    butterfly.attr({src: "images/logosmall.gif"}).animate({
                        left: '+=185',
                        top: '-=3938',
                        width:'+=67',
                        height: '+=49'
                    }, 3500, 'easeInOutSine', function() {
                        butterfly.attr({src: "images/logo_home.png"});
                        $("nav a:nth-child(1)").css({"background" : "url(images/menuBar.png) no-repeat center"});
                        $("nav a:nth-child(5)").css({"background" : "none"});
                    });
                }
            }
            if(position.left >= 1580 && position.left <= 2860)
            {
                if(position.top >= 5319 && position.top <= 6133)
                {
                    butterfly.attr({src: "images/logosmall.gif"}).css({"transform": "rotateY(0deg)"}).animate({
                        left: '+=185',
                        top: '-=5423',
                        width:'+=67',
                        height: '+=49'
                    }, 3500, 'easeInOutSine', function() {
                        butterfly.attr({src: "images/logo_home.png"});
                        $("nav a:nth-child(1)").css({"background" : "url(images/menuBar.png) no-repeat center"});
                        $("nav a:nth-child(6)").css({"background" : "none"});
                    });
                }
            }
        });
    });
    // End first link

    // Second link
    $("nav a:nth-child(2)").click(function() {
        butterfly.each(function() {

            var position = butterfly.position();
            
            if(position.left >= 1580 && position.left <= 2860)
            {
                if(position.top >= 0 && position.top <= 814)
                {
                    butterfly.attr({src: "images/logosmall.gif"}).animate({
                        left: '+=1320',
                        top: '+=1320',
                        width: '-=67',
                        height: '-=49'
                    }, 3000, 'easeInOutSine', function() {
                        butterfly.fadeTo(10, 0.7).animate({
                            left: '+=20',
                            top: '+=20'
                        }, 40, 'easeOutSine', function() {
                            butterfly.fadeTo(30, 1).attr({src: "images/logo_small.png"});
                            $(".light").fadeIn(500);                              
                            $("nav a:nth-child(2)").css({"background" : "url(images/menuBar.png) no-repeat center"});
                            $("nav a:nth-child(1)").css({"background" : "none"});
                        });
                    });
                }
            }
            if(position.left >= 1580 && position.left <= 2860)
            {
                if(position.top >= 1324 && position.top <= 2138)
                {
                    butterfly.attr({src: "images/logosmall.gif"}).css({"transform": "rotateY(0deg)"}).animate({
                        left: '+=765',
                        top: '+=72'
                    }, 2800, 'easeInOutSine', function() {
                        butterfly.fadeTo(15, 0.5).animate({
                            left: '+=20'
                        }, 10, 'easeOutSine', function() {
                            butterfly.fadeTo(75, 1).attr({src: "images/logo_small.png"});
                            $(".light").fadeIn(500);
                            $("nav a:nth-child(2)").css({"background" : "url(images/menuBar.png) no-repeat center"});
                            $("nav a:nth-child(3)").css({"background" : "none"});
                        });
                    });
                }
            }
            if(position.left >= 0 && position.left <= 1280)
            {
                if(position.top >= 2670 && position.top <= 3695)
                {
                    butterfly.attr({src: "images/logosmall.gif"}).animate({
                        left: '+=3195',
                        top: '-=1288'
                    }, 3400, 'easeInOutSine',function() {
                        butterfly.attr({src: "images/logo_small.png"});
                        $(".light").fadeIn(500);
                        $("nav a:nth-child(2)").css({"background" : "url(images/menuBar.png) no-repeat center"});
                        $("nav a:nth-child(4)").css({"background" : "none"});
                    });

                    backWing(); // Returns the wing from design section to concept section
                }
            }
            if(position.left >= 1580 && position.left <= 2860)
            {
                if(position.top >= 3995 && position.top <= 4810)
                {
                    butterfly.attr({src: "images/logosmall.gif"}).animate({
                        left: '+=1515',
                        top: '-=2598'
                    }, 3200, 'easeInOutSine', function() {
                        butterfly.fadeTo(10, 0.5).animate({
                            left: '+=10'
                        }, 5, 'easeOutSine', function() {
                            butterfly.fadeTo(10, 1).attr({src: "images/logo_small.png"});
                            $(".light").fadeIn(500);
                            $("nav a:nth-child(2)").css({"background" : "url(images/menuBar.png) no-repeat center"});
                            $("nav a:nth-child(5)").css({"background" : "none"});
                        });
                    });   
                }
            }
            if(position.left >= 1580 && position.left <= 2860)
            {
                if(position.top >= 5319 && position.top <= 6133)
                {
                    butterfly.attr({src: "images/logosmall.gif"}).css({"transform": "rotateY(0deg)"}).animate({
                        left: '+=1525',
                        top: '-=4083'
                    }, 3200, 'easeInOutSine', function() {
                        butterfly.attr({src: "images/logo_small.png"});
                        $(".light").fadeIn(500);
                        $("nav a:nth-child(2)").css({"background" : "url(images/menuBar.png) no-repeat center"});
                        $("nav a:nth-child(6)").css({"background" : "none"}); 
                    });
                }
            }
        });
    });
    // End second link
    
    // Third link
    $("nav a:nth-child(3)").click(function() {
        butterfly.each(function() {

            var position = butterfly.position();
            
            if(position.left >= 1580 && position.left <= 2860)
            {
                if(position.top >= 0 && position.top <= 814)
                {
                    butterfly.attr({src: "images/logosmall.gif"}).animate({
                        left: '+=550',
                        top: '+=1258',
                        width: '-=67',
                        height: '-=49'
                    }, 3000, 'easeInOutSine', function() {
                        butterfly.fadeTo(20, 0.3).animate({
                            left: '+=5',
                            top: '+=10'
                        }, 70, 'easeInOutSine', function() {
                            butterfly.fadeTo(100, 1).attr({src: "images/logo_hex.png"});
                            $("nav a:nth-child(3)").css({"background" : "url(images/menuBar.png) no-repeat center"});
                            $("nav a:nth-child(1)").css({"background" : "none"});
                        });
                    });
                }
            }
            if(position.left >= 3160 && position.left <= 4440)
            {
                if(position.top >= 1324 && position.top <= 2138)
                {
                    butterfly.attr({src: "images/logosmall.gif"}).css({"transform": "rotateY(180deg)"}).animate({
                        left: '-=765',
                        top: '-=72'
                    }, 3000, 'easeInSine', function() {
                        butterfly.fadeTo(25, 0.3).animate({
                            left: '-=20'
                        }, 90, 'easeInOutSine', function() {
                            butterfly.fadeTo(75, 1).attr({src: "images/logo_hex.png"}).css({"transform": "rotateY(0deg)"});
                            $(".light").fadeOut(500);
                            $("nav a:nth-child(3)").css({"background" : "url(images/menuBar.png) no-repeat center"});
                            $("nav a:nth-child(2)").css({"background" : "none"});
                        }); 
                    });      
                }
            }
            if(position.left >= 0 && position.left <= 1280)
            {
                if(position.top >= 2670 && position.top <= 3695)
                {
                    butterfly.attr({src: "images/logosmall.gif"}).animate({
                        left: '+=2390',
                        top: '-=1340'
                    }, 3500, 'easeInOutSine', function() {
                        butterfly.fadeTo(10, 0.3).animate({
                            left: '+=20',
                            top: '-=20'
                        }, 50, 'easeInOutSine', function() {
                            butterfly.fadeTo(30, 1).attr({src: "images/logo_hex.png"});
                            $("nav a:nth-child(3)").css({"background" : "url(images/menuBar.png) no-repeat center"});
                            $("nav a:nth-child(4)").css({"background" : "none"});
                        });
                    });

                    backWing(); // Returns the wing from design section to concept section
                }
            }
            if(position.left >= 1580 && position.left <= 2860)
            {
                if(position.top >= 3995 && position.top <= 4810)
                {
                    butterfly.attr({src: "images/logosmall.gif"}).animate({
                        left: '+=720',
                        top: '-=2650'
                    }, 3200, 'easeInOutSine', function() {
                        butterfly.fadeTo(10, 0.3).animate({
                            left: '+=20',
                            top: '-=20'
                        }, 50, 'easeInOutSine', function() {
                            butterfly.fadeTo(30, 1).attr({src: "images/logo_hex.png"});
                            $("nav a:nth-child(3)").css({"background" : "url(images/menuBar.png) no-repeat center"});
                            $("nav a:nth-child(5)").css({"background" : "none"});
                        });
                    });   
                }
            }
            if(position.left >= 1580 && position.left <= 2860)
            {
                if(position.top >= 5319 && position.top <= 6133)
                {
                    butterfly.attr({src: "images/logosmall.gif"}).css({"transform": "rotateY(0deg)"}).animate({
                        left: '+=720',
                        top: '-=4135'
                    }, 3500, 'easeInOutSine', function() {
                        butterfly.fadeTo(10, 0.3).animate({
                            left: '+=20',
                            top: '-=20'
                        }, 100, 'easeInOutSine', function() {
                            butterfly.fadeTo(30, 1).attr({src: "images/logo_hex.png"});
                            $("nav a:nth-child(3)").css({"background" : "url(images/menuBar.png) no-repeat center"});
                            $("nav a:nth-child(6)").css({"background" : "none"});
                        });
                    });
                }
            }
        });
    });
    // End third link

    // Fourth link
    $("nav a:nth-child(4)").click(function() {
        butterfly.each(function() {

            var position = butterfly.position();
            
            if(position.left >= 1580 && position.left <= 2860)
            {
                if(position.top >= 0 && position.top <= 814)
                {
                    butterfly.attr({src: "images/logosmall.gif"}).css({"transform": "rotateY(180deg)"}).animate({
                        left: '-=1845',
                        top: '+=2608',
                        width: '-=67',
                        height: '-=49'
                    }, 3200, 'easeInOutSine', function() {
                        butterfly.fadeTo(10, 0.7).animate({
                            left: '-=10',
                            top: '+=20'
                        }, 80, 'easeOutSine', function() {
                            butterfly.fadeTo(30, 1).attr({src: "images/logo_small.png"}).css({"transform": "rotateY(0deg)"});
                            $("nav a:nth-child(4)").css({"background" : "url(images/menuBar.png) no-repeat center"});
                            $("nav a:nth-child(1)").css({"background" : "none"});
                        });
                    });
                    
                    rotateWing();   // Rotates the butterfly's wing from concept to design
                }
            }
            if(position.left >= 3160 && position.left <= 4440)
            {
                if(position.top >= 1324 && position.top <= 2138)
                {
                    butterfly.attr({src: "images/logosmall.gif"}).css({"transform": "rotateY(180deg)"}).animate({
                        left: '-=3185',
                        top: '+=1278'
                    }, 3200, 'easeInOutSine', function() {
                        butterfly.fadeTo(10, 0.7).animate({
                            left: '-=10',
                            top: '+=10'
                        }, 80, 'easeOutSine', function() {
                            butterfly.fadeTo(30, 1).attr({src: "images/logo_small.png"}).css({"transform": "rotateY(0deg)"});
                            $(".light").fadeOut(500);
                            $("nav a:nth-child(4)").css({"background" : "url(images/menuBar.png) no-repeat center"});
                            $("nav a:nth-child(2)").css({"background" : "none"});
                        });
                    });
                    
                    rotateWing();   // Rotates the butterfly's wing from concept to design
                }
            }
            if(position.left >= 1580 && position.left <= 2860)
            {
                if(position.top >= 1324 && position.top <= 2138)
                {
                    butterfly.attr({src: "images/logosmall.gif"}).css({"transform": "rotateY(180deg)"}).animate({
                        left: '-=2400',
                        top: '+=1350'
                    }, 3200, 'easeInOutSine', function() {
                        butterfly.fadeTo(10, 0.7).animate({
                            left: '-=10',
                            top: '+=10'
                        }, 80, 'easeOutSine', function() {
                            butterfly.fadeTo(30, 1).css({"transform": "rotateY(0deg)"}).attr({src: "images/logo_small.png"});
                            $("nav a:nth-child(4)").css({"background" : "url(images/menuBar.png) no-repeat center"});
                            $("nav a:nth-child(3)").css({"background" : "none"});
                        });
                    }); 

                    rotateWing();   // Rotates the butterfly's wing from concept to design
                }
            }
            if(position.left >= 1580 && position.left <=2860)
            {
                if(position.top >= 3995 && position.top <= 4810)
                {
                    butterfly.attr({src: "images/logosmall.gif"}).css({"transform": "rotateY(180deg)"}).animate({
                        left: '-=1660',
                        top: '-=1300'
                    }, 3200, 'easeInOutSine', function() {
                        butterfly.fadeTo(10, 0.7).animate({
                            left: '-=10',
                            top: '-=10'
                        }, 80, 'easeOutSine', function() {
                            butterfly.fadeTo(30, 1).css({"transform": "rotateY(0deg)"}).attr({src: "images/logo_small.png"});
                            $("nav a:nth-child(4)").css({"background" : "url(images/menuBar.png) no-repeat center"});
                            $("nav a:nth-child(5)").css({"background" : "none"});
                        });
                    });

                    rotateWing();   // Rotates the butterfly's wing from concept to design
                }
            }
            if(position.left >= 1580 && position.left <= 2860)
            {
                if(position.top >= 5319 && position.top <= 6133)
                {
                    butterfly.attr({src: "images/logosmall.gif"}).css({"transform": "rotateY(180deg)"}).animate({
                        left: '-=1660',
                        top: '-=2785'
                    }, 3200, 'easeInOutSine', function() {
                        butterfly.fadeTo(10, 0.7).animate({
                            left: '-=10',
                            top: '-=10'
                        }, 80, 'easeOutSine', function() {
                            butterfly.fadeTo(30, 1).css({"transform": "rotateY(0deg)"}).attr({src: "images/logo_small.png"});
                            $("nav a:nth-child(4)").css({"background" : "url(images/menuBar.png) no-repeat center"});
                            $("nav a:nth-child(6)").css({"background" : "none"});
                        });
                    });
                    
                    rotateWing();   // Rotates the butterfly's wing from concept to design
                }
            }
        });
    });
    // End fourth link

    // Fifth link
    $("nav a:nth-child(5)").click(function() {
        butterfly.each(function() {

            var position = butterfly.position();
            
            if(position.left >= 1580 && position.left <= 2860)
            {
                if(position.top >= 0 && position.top <= 814)
                {
                    butterfly.attr({src: "images/logosmall.gif"}).css({"transform": "rotateY(180deg)"}).animate({
                        left: '-=175',
                        top: '+=3928',
                        width: '-=67',
                        height: '-=49'
                    }, 3400, 'easeInOutSine', function() {
                        butterfly.fadeTo(10, 0.7).animate({
                            left: '-=10',
                            top: '+=10'
                        }, 100, 'easeOutSine', function() {
                            butterfly.fadeTo(30, 1).attr({src: "images/logo_small.png"}).css({"transform": "rotateY(0deg)"});
                            $("nav a:nth-child(5)").css({"background" : "url(images/menuBar.png) no-repeat center"});
                            $("nav a:nth-child(1)").css({"background" : "none"});
                        });
                    });
                }
            }
            if(position.left >= 3160 && position.left <= 4440)
            {
                if(position.top >= 1324 && position.top <= 2138)
                {
                    butterfly.attr({src: "images/logosmall.gif"}).css({"transform": "rotateY(180deg)"}).animate({
                        left: '-=1515',
                        top: '+=2588'
                    }, 3400, 'easeInOutSine', function() {
                        butterfly.fadeTo(10, 0.7).animate({
                            left: '-=10',
                            top: '+=10'
                        }, 100, 'easeOutSine', function() {
                            butterfly.fadeTo(30, 1).attr({src: "images/logo_small.png"}).css({"transform": "rotateY(0deg)"});
                            $(".light").fadeOut(500);
                            $("nav a:nth-child(5)").css({"background" : "url(images/menuBar.png) no-repeat center"});
                            $("nav a:nth-child(2)").css({"background" : "none"});
                        });
                    });
                }
            }
            if(position.left >= 1580 && position.left <= 2860)
            {
                if(position.top >= 1324 && position.top <= 2138)
                {
                    butterfly.attr({src: "images/logosmall.gif"}).css({"transform": "rotateY(180deg)"}).animate({
                        left: '-=730',
                        top: '+=2660'
                    }, 3200, 'easeInOutSine', function() {
                        butterfly.fadeTo(10, 0.7).animate({
                            left: '-=10',
                            top: '+=10'
                        }, 20, 'easeOutSine', function() {
                            butterfly.fadeTo(30, 1).css({"transform": "rotateY(0deg)"}).attr({src: "images/logo_small.png"});
                            $("nav a:nth-child(5)").css({"background" : "url(images/menuBar.png) no-repeat center"});
                            $("nav a:nth-child(3)").css({"background" : "none"});
                        });
                    });
                }
            }
            if(position.left >= 0 && position.left <= 1280)
            {
                if(position.top >= 2670 && position.top <= 3695)
                {
                    butterfly.attr({src: "images/logosmall.gif"}).animate({
                        left: '+=1660',
                        top: '+=1300'
                    }, 3000, 'easeInOutSine', function() {
                        butterfly.fadeTo(10, 0.7).animate({
                            left: '+=10',
                            top: '+=10'
                        }, 20, 'easeOutSine', function() {
                            butterfly.fadeTo(30, 1).attr({src: "images/logo_small.png"});
                            $("nav a:nth-child(5)").css({"background" : "url(images/menuBar.png) no-repeat center"});
                            $("nav a:nth-child(4)").css({"background" : "none"});
                        });
                    });       

                    backWing(); // Returns the wing from design section to concept section
                }
            }
            if(position.left >= 1580 && position.left <= 2860)
            {
                if(position.top >= 5319 && position.top <= 6133)
                {
                    butterfly.attr({src: "images/logosmall.gif"}).css({"transform": "rotateY(0deg)"}).animate({
                        top: '-=1475'
                    }, 3000, 'easeInOutSine', function() {
                        butterfly.fadeTo(10, 0.7).animate({
                            top: '-=10'
                        }, 20, 'easeOutSine',function() {
                            butterfly.fadeTo(30, 1).attr({src: "images/logo_small.png"});
                            $("nav a:nth-child(5)").css({"background" : "url(images/menuBar.png) no-repeat center"});
                            $("nav a:nth-child(6)").css({"background" : "none"});
                        });
                    });
                }
            }
        });
    });
    // End fifth link

    // Sixth link
    $("nav a:nth-child(6)").click(function() {
        butterfly.each(function() {

            var position = butterfly.position();
            
            if(position.left >= 1580 && position.left <= 2860)
            {
                if(position.top >= 0 && position.top <= 814)
                {
                    butterfly.attr({src: "images/logosmall.gif"}).css({"transform": "rotateY(180deg)"}).animate({
                        left: '-=175',
                        top: '+=5413',
                        width: '-=67',
                        height: '-=49'
                    }, 3800, 'easeInOutSine', function() {
                        butterfly.fadeTo(10, 0.7).animate({
                            left: '-=10',
                            top: '+=10'
                        }, 15, 'easeOutSine', function() {
                            butterfly.fadeTo(30, 1).attr({src: "images/logo_small.png"});
                            $("nav a:nth-child(6)").css({"background" : "url(images/menuBar.png) no-repeat center"});
                            $("nav a:nth-child(1)").css({"background" : "none"});
                        });
                    });
                }
            }
            if(position.left >= 3160 && position.left <= 4440)
            {
                if(position.top >= 1324 && position.top <= 2138)
                {
                    butterfly.attr({src: "images/logosmall.gif"}).css({"transform": "rotateY(180deg)"}).animate({
                        left: '-=1515',
                        top: '+=4073'
                    }, 3700, 'easeInOutSine', function() {
                        butterfly.fadeTo(10, 0.7).animate({
                            left: '-=10',
                            top: '+=10'
                        }, 15, 'easeOutSine', function() {
                            butterfly.fadeTo(30, 1).attr({src: "images/logo_small.png"});
                            $(".light").fadeOut(500);
                            $("nav a:nth-child(6)").css({"background" : "url(images/menuBar.png) no-repeat center"});
                            $("nav a:nth-child(2)").css({"background" : "none"});
                        });
                    });
                }
            }
            if(position.left >= 1580 && position.left <= 2860)
            {
                if(position.top >= 1324 && position.top <= 2138)
                {
                    butterfly.attr({src: "images/logosmall.gif"}).css({"transform": "rotateY(180deg)"}).animate({
                        left: '-=730',
                        top: '+=4145'
                    }, 3700, 'easeInOutSine', function() {
                        butterfly.fadeTo(10, 0.7).animate({
                            left: '-=10',
                            top: '+=10'
                        }, 50, 'easeOutSine', function() {
                            butterfly.fadeTo(30, 1).attr({src: "images/logo_small.png"});
                            $("nav a:nth-child(6)").css({"background" : "url(images/menuBar.png) no-repeat center"});
                            $("nav a:nth-child(3)").css({"background" : "none"});
                        });
                    });
                }
            }
            if(position.left >= 0 && position.left <= 1280)
            {
                if(position.top >= 2670 && position.top <= 3695)
                {
                    butterfly.attr({src: "images/logosmall.gif"}).animate({
                        left: '+=1660',
                        top: '+=2785'
                    }, 3400, 'easeInOutSine', function() {
                        butterfly.fadeTo(10, 0.7).animate({
                            left: '+=10',
                            top: '+=10'
                        }, 50, 'easeOutSine', function() {
                            butterfly.fadeTo(30, 1).attr({src: "images/logo_small.png"}).css({"transform": "rotateY(180deg)"});
                            $("nav a:nth-child(6)").css({"background" : "url(images/menuBar.png) no-repeat center"});
                            $("nav a:nth-child(4)").css({"background" : "none"});
                        });
                    });

                    backWing(); // Returns the wing from design section to concept section
                }
            }
            if(position.left >= 1580 && position.left <= 2860)
            {
                if(position.top >= 3995 && position.top <= 4810)
                {
                    butterfly.attr({src: "images/logosmall.gif"}).css({"transform": "rotateY(180deg)"}).animate({
                        top: '+=1475'
                    }, 3000, 'easeInOutSine', function() {
                        butterfly.fadeTo(10, 0.7).animate({
                            top: '+=10'
                        }, 50, 'easeOutSine', function() {
                            butterfly.fadeTo(30, 1).attr({src: "images/logo_small.png"});
                            $("nav a:nth-child(6)").css({"background" : "url(images/menuBar.png) no-repeat center"});
                            $("nav a:nth-child(5)").css({"background" : "none"});
                        });
                    });
                }
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
            
            if(position.left >= 1580)
            {
                $("#closebtn").show('slow');
                video.animate({
                    left: '-=1580'
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
        left: '-=250',
        top: '-=300'
    }, 
    {
        step: function(now, fx) {
            $(this).css('-webkit-transform','rotate('+now+'deg)');
            $(this).css('-moz-transform','rotate('+now+'deg)'); 
            $(this).css('-ms-transform','rotate('+now+'deg)');
            $(this).css('-o-transform','rotate('+now+'deg)');
            $(this).css('transform','rotate('+now+'deg)');
            }, duration: 700
        }, 'linear'); 

        $wing.animate({
        left: '-=1960',
        top: '+=1520'
    }, 
    {
        step: function(now, fx) {
            $(this).css('-webkit-transform','rotate('+(now+244)+'deg)');
            $(this).css('-moz-transform','rotate('+(now+244)+'deg)'); 
            $(this).css('-ms-transform','rotate('+(now+244)+'deg)');
            $(this).css('-o-transform','rotate('+(now+244)+'deg)');
            $(this).css('transform','rotate('+(now+244)+'deg)');
            }, duration: 2800
        }, 'linear');                
}

// Returns the wing from design section to concept section
function backWing() {
    var $wing = $(".wing");

    $wing.animate({
        left: '+=2210',
        top: '-=1219'
    },
    {
        step: function(now, fx) {
            $(this).css('-webkit-transform','rotate('+(now+32.5)+'deg)');
            $(this).css('-moz-transform','rotate('+(now+32.5)+'deg)'); 
            $(this).css('-ms-transform','rotate('+(now+32.5)+'deg)');
            $(this).css('-o-transform','rotate('+(now+32.5)+'deg)');
            $(this).css('transform','rotate('+(now+32.5)+'deg)');
        }, duration: 3800
    }, 'easeInOutSine');
}

