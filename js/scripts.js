$(document).ready(function(){
	var mobileinnerScreenHt,mobileinnerScreenWd;
	//mobileinnerScreenHt = $('.mobileInnerScreen').height();	

	var myCalc = function(){
		mobileinnerScreenHt = $('.mobileInnerScreen.active').innerHeight();
		mobileinnerScreenWd = $('.mobileInnerScreen.active').innerWidth();
		$('.mobileInnerScreen > img').css({'height':mobileinnerScreenHt,'width':mobileinnerScreenWd});
	}
	myCalc();
	window.onresize = function(event)
    {
        myCalc();
    }    
    loadNextSection(-99,1);
    function loadNextSection(previousIndex, currentIndex) {    	
    	switch(currentIndex)
    	{
    		case 1:
    			$('.mobileContainer').addClass('removeMoveDown').removeClass('moveDown');
    			$('.homepageDesc.description').fadeIn();
				$('.mobileHomeScreen').addClass('active').removeClass('inactive');				
				$('.downloadBtn').show();
				$('#nextBtn').hide();
				$('#prevBtn').hide();
				setTimeout(function(){
					$('.popcorn, .piggie').show().animate({'opacity':'1'}).addClass('active');
				},100);
				if($(window).width()>=768) {	
					$('#nextBtn').show();
					$('#prevBtn').hide();				
				}
				
    		break;
    		case 2:
    			$('.encouragmentDesc.description').fadeIn();
				$('.mobileEncouragementScreen').addClass('active').removeClass('inactive');
				$('#nextBtn').hide();
				$('#prevBtn').hide();
				if($(window).width()>=768) {
					setTimeout(function(){	
						$('.rightvector, .leftvector').show().animate({'opacity':'1'}).addClass('active');
					},100);
					$('#nextBtn').show();
					$('#prevBtn').hide();				
				}
    		break;
    		case 3:
    			$('.earnfunDesc.description').fadeIn();
				$('.mobileEarningScreen').addClass('active').removeClass('inactive');
				$('#nextBtn').hide();
				$('#prevBtn').hide();
				if($(window).width()>=768) {
					setTimeout(function(){
						$('.earningLeftVector,.earningRightVector').show().animate({'opacity':'1'}).addClass('active');
					},100);
					$('#nextBtn').show();
					$('#prevBtn').hide();					
				}
    		break;
    		case 4:
    			$('.trackingDesc.description').fadeIn();
				$('.mobileReportScreen').addClass('active').removeClass('inactive');
				$('#nextBtn').hide();
				$('#prevBtn').hide();
				if($(window).width()>=768) {
					setTimeout(function(){	
						$('.trackingVector').show().animate({'opacity':'1'}).addClass('active');
					},100);
					$('#nextBtn').show();
					$('#prevBtn').hide();				
				}
    		break;
    		case 5:
    			$('.familyDesc.description').fadeIn();
				$('.mobileParentScreen').addClass('active').removeClass('inactive');
				$('#nextBtn').hide();
				$('#prevBtn').hide();
				if($(window).width()>=768) {	
					setTimeout(function(){
						$('.tree').show().animate({'opacity':'1'}).addClass('active');
					},100);
					$('.mobileScreen').css({'position':'relative','z-index':'9999'});
					$('#nextBtn').show();
					$('#prevBtn').hide();				
				}
    		break;
    		case 6:
    			$('.mobileContainer').removeClass('moveDown removeMoveDown removeFooterMobile').addClass('footerMobile');
				$('.mobileFooterScreen').addClass('active').removeClass('inactive');
				$('.downloadBtn').hide();
				$('.description').hide('fast');
				$('#nextBtn').hide();
				$('#prevBtn').show();
				if($(window).width()>=768) {
					$('.mobileFooterScreen').addClass('active').removeClass('inactive');					
				}				
    		break;
    	}
    		switch(previousIndex)
			{
				case 1:
					setTimeout(function(){
						$('.mobileHomeScreen').removeClass('active').addClass('inactive');
					},300);
					$('.popcorn, .piggie').hide().removeClass('active');
					$('.homepageDesc.description').hide();
				break;
				case 2:
					setTimeout(function(){
						$('.mobileEncouragementScreen').removeClass('active').addClass('inactive');
					},300);
					$('.rightvector, .leftvector').hide().removeClass('active');
					$('.encouragmentDesc.description').hide();
				break;
				case 3:
					setTimeout(function(){
						$('.mobileEarningScreen').removeClass('active').addClass('inactive');
					},300);
					$('.earningLeftVector,.earningRightVector').hide().removeClass('active');
					$('.earnfunDesc.description').hide();
				break;
				case 4:
					setTimeout(function(){
						$('.mobileReportScreen').removeClass('active').addClass('inactive');
					},300);
					$('.trackingVector').hide().removeClass('active');
					$('.trackingDesc.description').hide();
				break;
				case 5:
					setTimeout(function(){
						$('.mobileParentScreen').removeClass('active').addClass('inactive');
					},300);
					$('.tree').hide().removeClass('active');
					$('.familyDesc.description').hide();
				break;
				case 6:
					setTimeout(function(){
						$('.mobileFooterScreen').addClass('inactive').removeClass('active');
					},300);
				break;
			}
    	}	
	$('#fullpagecarousel').fullpage({
        'navigation': true,
        sectionsColor: ['#15c0b8', '#f16a70', '#15c0b8', '#f16a70','#15c0b8','#f16a70'],
        'css3': true,

    
        'onLeave': function(index, nextIndex, direction){        			        			   				
					//if(window.orientation != undefined && (window.orientation == 0 || window.orientation == 180))
					if($(window).height() > $(window).width() && $(window).innerWidth() < 768)
					{	
						if(index == 1)
							$('.downloadBtn').hide();
					}
					if($(window).width() < 768){
						if (index == 1 && direction == 'down'){
								$('.mobileContainer').addClass('moveDown').removeClass('removeMoveDown');
							}
							else if(index == 2 && direction == 'up'){							
								$('.mobileContainer').removeClass('moveDown').addClass('removeMoveDown');
							}
							if(index == 6 && direction == 'up'){
								$('.mobileContainer').addClass('moveDown').removeClass('footerMobile removeMoveDown');
							}
							else if(index == 5 && direction == 'down'){
								$('.mobileContainer').removeClass('moveDown removeMoveDown removeFooterMobile').addClass('footerMobile');
						}
					}
					if($(window).width() >= 768){
						if (index == 6 && direction == 'up'){
							$('.mobileContainer').addClass('removeFooterMobile').removeClass('footerMobile');
							$('.downloadBtn').show();
						}
					}

					if (index == 5 && direction == 'down'){
						$('.downloadBtn').hide();
						$('.mobileScreen').css({'position':'static','z-index':'9'});
					}
					else if(index == 5 && direction == 'up'){
						$('.mobileScreen').css({'position':'static','z-index':'9'});
					}
					loadNextSection(index,nextIndex);
				},
    });
/*next and orevious button*/
	$('#nextBtn').click(function(){
	    $.fn.fullpage.moveSectionDown();
	});
	$('#prevBtn').click(function(){
	    $.fn.fullpage.moveTo(1);
	});

/*swipe*/
 $(".mobileContainer,.rightContent").swipe({
swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
            if ($('.section').hasClass('active')) {
                if (direction == 'down') {
                    $.fn.fullpage.moveSectionUp();
                } else if (direction == 'up') {
                    $.fn.fullpage.moveSectionDown();
                }

            }

        },
        threshold: 0
    });
});
