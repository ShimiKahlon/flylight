
// Defines the scroll path 

$(document).ready(init);

function init() {

    var leftRight = true;

	$.fn.scrollPath("getPath")

	.moveTo(2220, 313, {
            callback: function() {
                $("nav a:nth-child(1)").css({"background": "url(images/menuBar.png) no-repeat center"});
            },  
            name: "flylight"
        })
	.lineTo(2700, 360)
	.arc(2700, 760, 400, 1.5*Math.PI, 0*Math.PI, false)
	.arc(3766, 1246, 400, 1*Math.PI, 0.5*Math.PI, true, {name: "idea"})
	.lineTo(2220, 1637, {name: "concept"})
    .lineTo(1600, 1700)
    .arc(1600, 2100, 400, 1.5*Math.PI, 1*Math.PI, true)
	.arc(675, 2585, 400, 0*Math.PI, 0.5*Math.PI, false, {name: "design"})
	.lineTo(2220, 4308, {name: "gallery"})
	.lineTo(2220, 5750, {name: "project"});

	$("#wrapper").scrollPath({drawPath: false, wrapAround: false});
	//window.onscroll = getPos;
	//$(window).scroll(getPos());
    console.log("DD");
    
	$("nav").find("a").each(function() {
		var target = $(this).attr("href").replace("#", "");
		$(this).click(function(e) {
			e.preventDefault();

			$.fn.scrollPath("scrollTo", target, 4000, "easeInOutSine");
			
			$("nav").fadeOut(4000, function() {
				$("nav").fadeIn('slow');
			});
		});
	});
}


$(document).ready(function() {

    var showOrHide = true;

    $("nav a:nth-child(1)").click(function() {
        $("#butterfly").each(function() {
            var position = $("#butterfly").position();
            console.log(position);

            if(position.left >= 3160 && position.left <= 4440)
            {
                if(position.top >= 1324 && position.top <= 2138)
                {
                    $("#butterfly").css({"transform": "rotateY(180deg)"}).animate({
                        left: '-=400',
                        top: '-=890',
                        width: '+=48',
                        height: '+=39'
                    }, 2400, 'easeInOutSine', function() {
                        $("#butterfly").animate({
                            left: '-=290',
                            top: '-=400',
                            width: '+=48',
                            height: '+=40'
                        }, 700, 'easeInOutSine', function() {
                            $("#butterfly").animate({
                                left: '-=700',
                                width: '+=49',
                                height: '+=40'
                            }, 1000, 'easeInOutSine', function() {
                                $("#idea").css({"background": "none"});
                                $("nav a:nth-child(1)").css({"background" : "url(images/menuBar.png) no-repeat center"});
                                $("nav a:nth-child(2)").css({"background" : "none"});
                                $("#butterfly").css({"transform": "rotateY(0deg)"});
                            });
                        });
                    });
                }
            }
            if(position.left >= 1580 && position.left <= 2860)
            {
                if(position.top >= 1324 && position.top <= 2138)
                {
                    $("#butterfly").attr({src: "images/logosmall.gif"}).css({"transform": "rotateY(180deg)"}).animate({
                        left: '-=325',
                        top: '-=1245',
                        width: '+=105',
                        height: '+=127'
                    }, 4000, 'easeInOutSine', function() {
                        $("#butterfly").css({"transform": "rotateY(0deg)"});
                        $("nav a:nth-child(1)").css({"background" : "url(images/menuBar.png) no-repeat center"});
                        $("nav a:nth-child(3)").css({"background" : "none"});
                    });
                }
            }
            if(position.left >= 0 && position.left <= 1280)
            {
                if(position.top >= 2670 && position.top <= 3695)
                {
                    $("#butterfly").css({"transform": "rotateY(0deg)"}).animate({
                        left: '+=1850',
                        top: '-=2575',
                        width: '+=74',
                        height: '+=64'
                    }, 4000, 'easeInOutSine', function() {
                        $("nav a:nth-child(1)").css({"background" : "url(images/menuBar.png) no-repeat center"});
                        $("nav a:nth-child(4)").css({"background" : "none"});
                    });
                }
            }
            if(position.left >= 1580 && position.left <= 2860)
            {
                if(position.top >= 3995 && position.top <= 4810)
                {
                    $("#butterfly").css({"transform": "rotateY(180deg)"}).animate({
                        left: '-=110',
                        top: '-=4040',
                        width: '+=106',
                        height: '+=105'
                    }, 4000, 'easeInOutSine', function() {
                        $("#butterfly").css({"transform": "rotateY(0deg)"});
                        $("nav a:nth-child(1)").css({"background" : "url(images/menuBar.png) no-repeat center"});
                        $("nav a:nth-child(5)").css({"background" : "none"});
                    });
                }
            }
            if(position.left >= 1580 && position.left <= 2860)
            {
                if(position.top >= 5319 && position.top <= 6133)
                {
                    $("#butterfly").animate({
                        left: '+=310',
                        top: '-=5330',
                        width: '+=110',
                        height: '+=90'
                    }, 4000, 'easeInOutSine', function() {
                        $("nav a:nth-child(1)").css({"background" : "url(images/menuBar.png) no-repeat center"});
                        $("nav a:nth-child(6)").css({"background" : "none"});
                    });
                }
            }
        });
    });

    $("nav a:nth-child(2)").click(function() {
        $("#butterfly").each(function() {
            var position = $("#butterfly").position();
            console.log(position);
            if(position.left >= 1580 && position.left <= 2860)
            {
                if(position.top >= 0 && position.top <= 814)
                {
                    $("#butterfly").animate({
                        left: '+=700'
                    }, 1000, 'easeInOutSine', function() {
                        $("#butterfly").animate({
                            left: '+=290',
                            top: '+=400',
                            width: '-=72',
                            height: '-=59'
                        }, 800, 'easeInOutSine', function() {
                            $("#butterfly").animate({
                                left: '+=400',
                                top: '+=890',
                                width: '-=73',
                                height: '-=60'
                            }, 2000, 'easeInOutSine', function() {
                                $("#idea").css({"background": "url(images/idea.png)"});
                                $("nav a:nth-child(2)").css({"background" : "url(images/menuBar.png) no-repeat center"});
                                $("nav a:nth-child(1)").css({"background" : "none"});
                            });
                        });
                    });        
                }
            }
            if(position.left >= 1580 && position.left <= 2860)
            {
                if(position.top >= 1324 && position.top <= 2138)
                {
                    $("#butterfly").attr({src: "images/logosmall.gif"}).css({"transform": "rotateY(0deg)"}).animate({
                        left: '+=1080',
                        top: '+=50',
                        width: '-=40',
                        height: '+=8'
                    }, 4000, 'easeInOutSine', function() {
                        $("#idea").css({"background": "url(images/idea.png)"});
                        $("nav a:nth-child(2)").css({"background" : "url(images/menuBar.png) no-repeat center"});
                        $("nav a:nth-child(3)").css({"background" : "none"});
                    });
                }
            }
            if(position.left >= 0 && position.left <= 1280)
            {
                if(position.top >= 2670 && position.top <= 3695)
                {
                    $("#butterfly").animate({
                        left: '+=3240',
                        top: '-=1285',
                        width: '-=41',
                        height: '-=55'
                    }, 4000, 'easeInOutSine',function() {
                        $("nav a:nth-child(2)").css({"background" : "url(images/menuBar.png) no-repeat center"});
                        $("nav a:nth-child(4)").css({"background" : "none"});
                    });
                }
            }
            if(position.left >= 1580 && position.left <= 2860)
            {
                if(position.top >= 3995 && position.top <= 4810)
                {
                    $("#butterfly").animate({
                        left: '+=1280',
                        top: '-=2750',
                        width: '-=39',
                        height: '-=14'
                    }, 4000, 'easeInOutSine', function() {
                        $("nav a:nth-child(2)").css({"background" : "url(images/menuBar.png) no-repeat center"});
                        $("nav a:nth-child(5)").css({"background" : "none"});
                    });   
                }
            }
            if(position.left >= 1580 && position.left <= 2860)
            {
                if(position.top >= 5319 && position.top <= 6133)
                {
                    $("#butterfly").animate({
                        left: '+=1700',
                        top: '-=4040',
                        width: '-=35',
                        height: '-=29'
                    }, 4000, 'easeInOutSine', function() {
                        $("nav a:nth-child(2)").css({"background" : "url(images/menuBar.png) no-repeat center"});
                        $("nav a:nth-child(6)").css({"background" : "none"}); 
                    });
                }
            }
        });
    });
    
    $("nav a:nth-child(3)").click(function() {
        $("#butterfly").each(function() {
            var position = $("#butterfly").position();
            console.log(position);
            if(position.left >= 1580 && position.left <= 2860)
            {
                if(position.top >= 0 && position.top <= 814)
                {
                    $("#butterfly").animate({
                        left: '+=325',
                        top: '+=1245',
                        width: '-=105',
                        height: '-=127'
                    }, 4000, 'easeInOutSine', function() {
                        $("#butterfly").attr({src: "images/flylighthex.png"});
                        $("nav a:nth-child(3)").css({"background" : "url(images/menuBar.png) no-repeat center"});
                        $("nav a:nth-child(1)").css({"background" : "none"});
                    });
                }
            }
            if(position.left >= 3160 && position.left <= 4440)
            {
                if(position.top >= 1324 && position.top <= 2138)
                {
                    $("#butterfly").css({"transform": "rotateY(180deg)"});
                    $("#butterfly").animate({
                        left: '-=1065',
                        top: '-=45',
                        width: '+=40',
                        height: '-=8'
                    }, 4000, 'easeInOutSine', function() {
                        $("#butterfly").attr({src: "images/flylighthex.png"}).css({"transform": "rotateY(0deg)"});
                        $("#idea").css({"background": "none"});
                        $("nav a:nth-child(3)").css({"background" : "url(images/menuBar.png) no-repeat center"});
                        $("nav a:nth-child(2)").css({"background" : "none"});
                    });       
                }
            }
            if(position.left >= 0 && position.left <= 1280)
            {
                if(position.top >= 2670 && position.top <= 3695)
                {
                    $("#butterfly").animate({
                        left: '+=775',
                        top: '-=80',
                        width: '-=16',
                        height: '-=32'
                    }, 800, 'easeInOutSine', function() {
                        $("#butterfly").animate({
                            left: '+=200',
                            top: '-=700',
                            width: '-=15',
                            height: '-=31'
                        }, 1100, 'easeInOutSine', function() {
                            $("#butterfly").animate({
                                left: '+=300',
                                top: '-=400'
                            }, 600, 'easeInOutSine', function() {
                                $("#butterfly").animate({
                                    left: '+=885',
                                    top: '-=155'
                                }, 1400, 'easeInOutSine', function() {
                                    $("nav a:nth-child(3)").css({"background" : "url(images/menuBar.png) no-repeat center"});
                                    $("nav a:nth-child(4)").css({"background" : "none"});
                                    $("#butterfly").attr({src: "images/flylighthex.png"}).css({"transform": "rotateY(180deg)"});
                                })
                            })
                        })
                    })
                }
            }
            if(position.left >= 1580 && position.left <= 2860)
            {
                if(position.top >= 3995 && position.top <= 4810)
                {
                    $("#butterfly").animate({
                        left: '+=230',
                        top: '-=2795',
                        width: '+=1',
                        height: '-=22'
                    }, 4000, 'easeInOutSine', function() {
                        $("#butterfly").attr({src: "images/flylighthex.png"});
                        $("nav a:nth-child(3)").css({"background" : "url(images/menuBar.png) no-repeat center"});
                        $("nav a:nth-child(5)").css({"background" : "none"});
                    });   
                }
            }
            if(position.left >= 1580 && position.left <= 2860)
            {
                if(position.top >= 5319 && position.top <= 6133)
                {
                    $("#butterfly").animate({
                        left: '+=635',
                        top: '-=4085',
                        width: '+=5',
                        height: '-=37'
                    }, 4000, 'easeInOutSine', function() {
                        $("#butterfly").attr({src: "images/flylighthex.png"});
                        $("nav a:nth-child(3)").css({"background" : "url(images/menuBar.png) no-repeat center"});
                        $("nav a:nth-child(6)").css({"background" : "none"});
                    });
                }
            }
        });
    });
    
    $("nav a:nth-child(4)").click(function() {
        $("#butterfly").each(function() {
            var position = $("#butterfly").position();
            console.log(position);
            if(position.left >= 1580 && position.left <= 2860)
            {
                if(position.top >= 0 && position.top <= 814)
                {
                    $("#butterfly").css({"transform": "rotateY(180deg)"}).animate({
                        left: '-=1850',
                        top: '+=2575',
                        width: '-=74',
                        height: '-=64'
                    }, 4000, 'easeInOutSine', function() {
                        $("#butterfly").css({"transform": "rotateY(0deg)"});
                        $("nav a:nth-child(4)").css({"background" : "url(images/menuBar.png) no-repeat center"});
                        $("nav a:nth-child(1)").css({"background" : "none"});
                    });
                    $(".wing").animate({
                        left: '-=20',
                        top: '-=300'
                    }, 500, 'easeInOutSine', function() {
                        $(".wing").animate({
                            left: '-=900',
                            top: '-=50'
                        }, 1000, 'easeInOutSine', function() {
                            $(".wing").animate({
                                left: '-=320',
                                top: '+=320'
                            }, 500, 'easeInOutSine', function() {
                                $(".wing").animate({
                                    left: '-=200',
                                    top: '+=700'
                                }, 1000, 'easeInOutSine', function() {
                                    $(".wing").animate({
                                        left: '-=755',
                                        top: '+=400'
                                    }, 1000, 'easeInOutSine', function() {
                                        $(".wing").css({"transform" : "rotateY(340deg)"});
                                        $(".wing").css({"transform" : "rotateZ(348deg)"});
                                    });
                                });
                            });
                        });
                    });
                }
            }
            if(position.left >= 3160 && position.left <= 4440)
            {
                if(position.top >= 1324 && position.top <= 2138)
                {
                    $("#butterfly").css({"transform": "rotateY(180deg)"}).animate({
                        left: '-=3240',
                        top: '+=1285',
                        width: '+=41',
                        height: '+=55'
                    }, 4000, 'easeInOutSine', function() {
                        $("#butterfly").css({"transform": "rotateY(0deg)"});
                        $("nav a:nth-child(4)").css({"background" : "url(images/menuBar.png) no-repeat center"});
                        $("nav a:nth-child(2)").css({"background" : "none"});
                    });

                    $(".wing").animate({
                        left: '-=20',
                        top: '-=300'
                    }, 500, 'easeInOutSine', function() {
                        $(".wing").animate({
                            left: '-=900',
                            top: '-=50'
                        }, 1000, 'easeInOutSine', function() {
                            $(".wing").animate({
                                left: '-=320',
                                top: '+=320'
                            }, 500, 'easeInOutSine', function() {
                                $(".wing").animate({
                                    left: '-=200',
                                    top: '+=700'
                                }, 1000, 'easeInOutSine', function() {
                                    $(".wing").animate({
                                        left: '-=755',
                                        top: '+=400'
                                    }, 1000, 'easeInOutSine', function() {
                                        $(".wing").css({"transform" : "rotateY(340deg)"});
                                        $(".wing").css({"transform" : "rotateZ(348deg)"});
                                    });
                                });
                            });
                        });
                    });
                }
            }
            if(position.left >= 1580 && position.left <= 2860)
            {
                if(position.top >= 1324 && position.top <= 2138)
                {
                    $("#butterfly").attr({src: "images/logosmall.gif"}).css({"transform": "rotateY(180deg)"});
                        $("#butterfly").animate({
                            left: '-=900',
                            top: '+=150'
                        }, 1400, 'easeInOutSine', function() {
                            $("#butterfly").animate({
                                left: '-=300',
                                top: '+=400'
                            }, 600, 'easeInOutSine', function() {
                                $("#butterfly").animate({
                                    left: '-=200',
                                    top: '+=700',
                                    width: '+=15',
                                    height: '+=31'
                                }, 1000, 'easeInOutSine', function() {
                                    $("#butterfly").animate({
                                        left: '-=775',
                                        top: '+=80',
                                        width: '+=16',
                                        height: '+=32'
                                }, 500, 'easeInOutSine', function() {
                                    $("nav a:nth-child(4)").css({"background" : "url(images/menuBar.png) no-repeat center"});
                                    $("nav a:nth-child(3)").css({"background" : "none"});
                                    $("#butterfly").css({"transform": "rotateY(0deg)"});
                                });    
                            });
                        });
                    });    
                    $(".wing").animate({
                        left: '-=20',
                        top: '-=300'
                    }, 500, 'easeInOutSine', function() {
                        $(".wing").animate({
                            left: '-=900',
                            top: '-=50'
                        }, 1000, 'easeInOutSine', function() {
                            $(".wing").animate({
                                left: '-=320',
                                top: '+=320'
                            }, 500, 'easeInOutSine', function() {
                                $(".wing").animate({
                                    left: '-=200',
                                    top: '+=700'
                                }, 1000, 'easeInOutSine', function() {
                                    $(".wing").animate({
                                        left: '-=755',
                                        top: '+=400'
                                    }, 1000, 'easeInOutSine', function() {
                                        $(".wing").css({"transform" : "rotateY(340deg)"});
                                        $(".wing").css({"transform" : "rotateZ(348deg)"});
                                    });
                                });
                            });
                        });
                    });   
                }
            }
            if(position.left >= 1580 && position.left <=2860)
            {
                if(position.top >= 3995 && position.top <= 4810)
                {
                    $("#butterfly").css({"transform": "rotateY(180deg)"}).animate({
                        left: '-=1960',
                        top: '-=1465',
                        width: '+=32',
                        height: '+=41'
                    }, 4000, 'easeInOutSine', function() {
                        $("nav a:nth-child(4)").css({"background" : "url(images/menuBar.png) no-repeat center"});
                        $("nav a:nth-child(5)").css({"background" : "none"});
                        $("#butterfly").css({"transform": "rotateY(0deg)"});
                    });
                    $(".wing").animate({
                        left: '-=20',
                        top: '-=300'
                    }, 500, 'easeInOutSine', function() {
                        $(".wing").animate({
                            left: '-=900',
                            top: '-=50'
                        }, 1000, 'easeInOutSine', function() {
                            $(".wing").animate({
                                left: '-=320',
                                top: '+=320'
                            }, 500, 'easeInOutSine', function() {
                                $(".wing").animate({
                                    left: '-=200',
                                    top: '+=700'
                                }, 1000, 'easeInOutSine', function() {
                                    $(".wing").animate({
                                        left: '-=755',
                                        top: '+=400'
                                    }, 1000, 'easeInOutSine', function() {
                                        $(".wing").css({"transform" : "rotateY(340deg)"});
                                        $(".wing").css({"transform" : "rotateZ(348deg)"});
                                    });
                                });
                            });
                        });
                    });
                }
            }
            if(position.left >= 1580 && position.left <= 2860)
            {
                if(position.top >= 5319 && position.top <= 6133)
                {
                    $("#butterfly").css({"transform": "rotateY(180deg)"}).animate({
                        left: '-=1540',
                        top: '-=2755',
                        width: '+=36',
                        height: '+=26'
                    }, 4000, 'easeInOutSine', function() {
                        $("#butterfly").css({"transform": "rotateY(0deg)"});
                        $("nav a:nth-child(4)").css({"background" : "url(images/menuBar.png) no-repeat center"});
                        $("nav a:nth-child(6)").css({"background" : "none"});
                    });
                    $(".wing").animate({
                        left: '-=20',
                        top: '-=300'
                    }, 500, 'easeInOutSine', function() {
                        $(".wing").animate({
                            left: '-=900',
                            top: '-=50'
                        }, 1000, 'easeInOutSine', function() {
                            $(".wing").animate({
                                left: '-=320',
                                top: '+=320'
                            }, 500, 'easeInOutSine', function() {
                                $(".wing").animate({
                                    left: '-=200',
                                    top: '+=700'
                                }, 1000, 'easeInOutSine', function() {
                                    $(".wing").animate({
                                        left: '-=755',
                                        top: '+=400'
                                    }, 1000, 'easeInOutSine', function() {
                                        $(".wing").css({"transform" : "rotateY(340deg)"});
                                        $(".wing").css({"transform" : "rotateZ(348deg)"});
                                    });
                                });
                            });
                        });
                    });
                }
            }
        });
    });

    $("nav a:nth-child(5)").click(function() {
        $("#butterfly").each(function() {
            var position = $("#butterfly").position();
            console.log(position);
            if(position.left >= 1580 && position.left <= 2860)
            {
                if(position.top >= 0 && position.top <= 814)
                {
                    $("#butterfly").animate({
                        left: '+=110',
                        top: '+=4040',
                        width: '-=106',
                        height: '-=105'
                    }, 4000, 'easeInOutSine', function() {
                        $("nav a:nth-child(5)").css({"background" : "url(images/menuBar.png) no-repeat center"});
                        $("nav a:nth-child(1)").css({"background" : "none"});
                    });
                }
            }
            if(position.left >= 3160 && position.left <= 4440)
            {
                if(position.top >= 1324 && position.top <= 2138)
                {
                    $("#butterfly").css({"transform": "rotateY(180deg)"}).animate({
                        left: '-=1280',
                        top: '+=2750',
                        width: '+=39',
                        height: '+=14'
                    }, 4000, 'easeInOutSine', function() {
                        $("#butterfly").css({"transform": "rotateY(0deg)"});
                        $("nav a:nth-child(5)").css({"background" : "url(images/menuBar.png) no-repeat center"});
                        $("nav a:nth-child(2)").css({"background" : "none"});
                    });
                }
            }
            if(position.left >= 1580 && position.left <= 2860)
            {
                if(position.top >= 1324 && position.top <= 2138)
                {
                    $("#butterfly").attr({src: "images/logosmall.gif"}).css({"transform": "rotateY(180deg)"}).animate({
                        left: '-=230',
                        top: '+=2795',
                        width: '-=1',
                        height: '+=22'
                    }, 4000, 'easeInOutSine', function() {
                        $("#butterfly").css({"transform": "rotateY(0deg)"});
                        $("nav a:nth-child(5)").css({"background" : "url(images/menuBar.png) no-repeat center"});
                        $("nav a:nth-child(3)").css({"background" : "none"});
                    })
                }
            }
            if(position.left >= 0 && position.left <= 1280)
            {
                if(position.top >= 2670 && position.top <= 3695)
                {
                    $("#butterfly").animate({
                        left: '+=1960',
                        top: '+=1465',
                        width: '-=32',
                        height: '-=41'
                    }, 4000, 'easeInOutSine', function() {
                        $("nav a:nth-child(5)").css({"background" : "url(images/menuBar.png) no-repeat center"});
                        $("nav a:nth-child(4)").css({"background" : "none"});
                    });       
                }
            }
            if(position.left >= 1580 && position.left <= 2860)
            {
                if(position.top >= 5319 && position.top <= 6133)
                {
                    $("#butterfly").animate({
                        left: '+=420',
                        top: '-=1290',
                        width: '+=4',
                        height: '-=15'
                    }, 4000, 'easeInOutSine',function() {
                        $("nav a:nth-child(5)").css({"background" : "url(images/menuBar.png) no-repeat center"});
                        $("nav a:nth-child(6)").css({"background" : "none"});
                    });
                }
            }
        });
    });

    $("nav a:nth-child(6)").click(function() {
        $("#butterfly").each(function() {
            var position = $("#butterfly").position();
            console.log(position);
            if(position.left >= 1580 && position.left <= 2860)
            {
                if(position.top >= 0 && position.top <= 814)
                {
                    $("#butterfly").css({"transform": "rotateY(180deg)"}).animate({
                        left: '-=310',
                        top: '+=5330',
                        width: '-=110',
                        height: '-=90'
                    }, 4000, 'easeInOutSine', function() {
                        $("#butterfly").css({"transform": "rotateY(0deg)"});
                        $("nav a:nth-child(6)").css({"background" : "url(images/menuBar.png) no-repeat center"});
                        $("nav a:nth-child(1)").css({"background" : "none"});
                    });
                }
            }
            if(position.left >= 3160 && position.left <= 4440)
            {
                if(position.top >= 1324 && position.top <= 2138)
                {
                    $("#butterfly").css({"transform": "rotateY(180deg)"}).animate({
                        left: '-=1700',
                        top: '+=4040',
                        width: '+=35',
                        height: '+=29'
                    }, 4000, 'easeInOutSine', function() {
                        $("#butterfly").css({"transform": "rotateY(0deg)"});
                        $("nav a:nth-child(6)").css({"background" : "url(images/menuBar.png) no-repeat center"});
                        $("nav a:nth-child(2)").css({"background" : "none"});
                    });
                }
            }
            if(position.left >= 1580 && position.left <= 2860)
            {
                if(position.top >= 1324 && position.top <= 2138)
                {
                    $("#butterfly").attr({src: "images/logosmall.gif"}).css({"transform": "rotateY(180deg)"}).animate({
                        left: '-=635',
                        top: '+=4085',
                        width: '-=5',
                        height: '+=37'
                    }, 4000, 'easeInOutSine', function() {
                        $("#butterfly").css({"transform": "rotateY(0deg)"});
                        $("nav a:nth-child(6)").css({"background" : "url(images/menuBar.png) no-repeat center"});
                        $("nav a:nth-child(3)").css({"background" : "none"});
                    });
                }
            }
            if(position.left >= 0 && position.left <= 1280)
            {
                if(position.top >= 2670 && position.top <= 3695)
                {
                    $("#butterfly").animate({
                        left: '+=1540',
                        top: '+=2755',
                        width: '-=36',
                        height: '-=26'
                    }, 4000, 'easeInOutSine', function() {
                        $("nav a:nth-child(6)").css({"background" : "url(images/menuBar.png) no-repeat center"});
                        $("nav a:nth-child(4)").css({"background" : "none"});
                    })
                }
            }
            if(position.left >= 1580 && position.left <= 2860)
            {
                if(position.top >= 3995 && position.top <= 4810)
                {
                    $("#butterfly").css({"transform": "rotateY(180deg)"}).animate({
                        left: '-=420',
                        top: '+=1290',
                        width: '-=4',
                        height: '+=15'
                    }, 4000, 'easeInOutSine', function() {
                        $("nav a:nth-child(6)").css({"background" : "url(images/menuBar.png) no-repeat center"});
                        $("nav a:nth-child(5)").css({"background" : "none"});
                        $("#butterfly").css({"transform": "rotateY(0deg)"});
                    });
                }
            }
        });
    });
    
    // Show and hide video section
    $("#playbtn").click(function() {
        $("#closebtn").show('slow');
        $("#video").animate({
            left: '-=1580'
        }, 2000, 'easeInOutSine');
    });
    $("#closebtn").click(function() {
        $(this).hide('slow');
        $("#video").animate({
            left: '+=1580'
        }, 2000, 'easeInOutSine');
    });
});


function getPos() {

    var position = $("#butterfly").position();
    console.log(position);
            
            if(position.left >= 1580 && position.left <= 2860)
            {
                if(position.top >= 0 && position.top <= 814)
                {
                    $("#butterfly").animate({
                        left: '+=700'
                    }, 1000, 'easeInOutSine', function() {
                        $("#butterfly").animate({
                            left: '+=290',
                            top: '+=400',
                            width: '-=72',
                            height: '-=59'
                        }, 800, 'easeInOutSine', function() {
                            $("#butterfly").animate({
                                left: '+=400',
                                top: '+=890',
                                width: '-=73',
                                height: '-=60'
                            }, 2000, 'easeInOutSine', function() {
                                $("#idea").css({"background": "url(images/idea.png)"});
                                $("nav a:nth-child(2)").css({"background" : "url(images/menuBar.png) no-repeat center"});
                                $("nav a:nth-child(1)").css({"background" : "none"});
                            });
                        });
                    });        
                }
            }
}
