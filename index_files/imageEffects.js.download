if (!Modernizr.csstransitions) {
	
	var needImgEffectsFallback = true,
		imgEffectTransition = 500, 
		imgFadeEffects = ".cover-fade,.bottom-quarter-fade,.top-quarter-fade,.left-quarter-fade,.right-quarter-fade", 
		imgSlideUpEffect = ".cover-slide-up,.quarter-slide-up", 
		imgSlideDownEffect = ".cover-slide-down,.quarter-slide-down", 
		imgSlideLeftEffect = ".cover-slide-left,.quarter-slide-left", 
		imgSlideRightEffect = ".cover-slide-right,.quarter-slide-right";
	
	var mouseOverImageEffects = function($elem,isDemo){

		// fade
		if ($elem.find("figure").is(imgFadeEffects)) {
			$elem.find("figcaption").stop(true,true).animate({
				"opacity": 1
			}, imgEffectTransition);
		}
		
		// slide-up
		if ($elem.find("figure").is(imgSlideUpEffect)) {
			$elem.find("figcaption").stop(true,true).animate({
				"opacity": 1,
				"bottom": 0
			}, imgEffectTransition);
		}
		
		// slide-down
		if ($elem.find("figure").is(imgSlideDownEffect)) {
			$elem.find("figcaption").stop(true,true).animate({
				"opacity": 1,
				"top": 0
			}, imgEffectTransition);
		}
		
		// slide-left / slide-right
		if ($elem.find("figure").is(imgSlideLeftEffect + "," + imgSlideRightEffect)) {
			$elem.find("figcaption").stop(true,true).animate({
				"opacity": 1,
				"left": 0
			}, imgEffectTransition);
		}
		
		// push-up
		if ($elem.find("figure").is(".cover-push-up")) {
			$elem.find("div.img").animate({
				"opacity": 0,
				"bottom": "100%"
			}, {
				duration: imgEffectTransition,
				queue: false
			});
			
			$elem.find("figcaption").animate({
				"opacity": 1,
				"bottom": 0
			}, {
				duration: imgEffectTransition,
				queue: false
			});
		}
		
		// push-down
		if ($elem.find("figure").is(".cover-push-down")) {
			$elem.find("div.img").animate({
				"opacity": 0,
				"top": "100%"
			}, {
				duration: imgEffectTransition,
				queue: false
			});
			
			$elem.find("figcaption").animate({
				"opacity": 1,
				"top": 0
			}, {
				duration: imgEffectTransition,
				queue: false
			});
		}
		
		// push-left
		if ($elem.find("figure").is(".cover-push-left")) {
			$elem.find("div.img").animate({
				"opacity": 0,
				"left": "-100%"
			}, {
				duration: imgEffectTransition,
				queue: false
			});
			
			$elem.find("figcaption").animate({
				"opacity": 1,
				"left": 0
			}, {
				duration: imgEffectTransition,
				queue: false
			});
		}
		
		// push-right
		if ($elem.find("figure").is(".cover-push-right")) {
			$elem.find("div.img").animate({
				"opacity": 0,
				"left": "100%"
			}, {
				duration: imgEffectTransition,
				queue: false
			});
			
			$elem.find("figcaption").animate({
				"opacity": 1,
				"left": 0
			}, {
				duration: imgEffectTransition,
				queue: false
			});
		}
		
		// fall-left, fall-right
		if ($elem.find("figure").is(".quarter-fall-left,.quarter-fall-right")) {
		
			var $elmCaption = $elem.find("figcaption");
			
			$({deg: 20}).animate(
				{deg: 0}, 
				{
					duration: imgEffectTransition,
					step: function(now){
						$elmCaption.css({
							"webkit-transform": 'rotate(' + now + 'deg)',
							"-moz-transform": 'rotate(' + now + 'deg)',
							"-ms-transform": 'rotate(' + now + 'deg)',
							"-o-transform": 'rotate(' + now + 'deg)',
							"transform": 'rotate(' + now + 'deg)'
						});
					},
					queue: false
				}
			);
			
			$elmCaption.animate({
				"opacity": 1,
				"left": 0
			}, {
				duration: imgEffectTransition,
				queue: false
			});
		}
	};
	
	var mouseOutImageEffects = function($elem,isDemo){
	
		// fade
		if ($elem.find("figure").is(imgFadeEffects)) {
			$elem.find("figcaption").stop(true,true).animate({
				"opacity": isDemo ? 0.3 : 0
			}, imgEffectTransition);
		}
		
		// slide-up
		if ($elem.find("figure").is(imgSlideUpEffect)) {
			$elem.find("figcaption").stop(true,true).animate({
				"opacity": isDemo ? 0.3 : 0,
				"bottom": isDemo ? "-40%" : "-100%"
			}, imgEffectTransition);
		}
		
		// slide-down
		if ($elem.find("figure").is(imgSlideDownEffect)) {
			$elem.find("figcaption").stop(true,true).animate({
				"opacity": isDemo ? 0.3 : 0,
				"top": isDemo ? "-40%" : "-100%"
			}, imgEffectTransition);
		}
		
		// slide-left
		if ($elem.find("figure").is(imgSlideLeftEffect)) {
			$elem.find("figcaption").stop(true,true).animate({
				"opacity": isDemo ? 0.3 : 0,
				"left": isDemo ? "90%" : "100%"
			}, imgEffectTransition);
		}
		
		// slide-right
		if ($elem.find("figure").is(imgSlideRightEffect)) {
			$elem.find("figcaption").stop(true,true).animate({
				"opacity": isDemo ? 0.3 : 0,
				"left": isDemo ? "-90%": "-100%"
			}, imgEffectTransition);
		}
		
		// push-up
		if ($elem.find("figure").is(".cover-push-up")) {
			$elem.find("div.img").animate({
				"opacity": 1,
				"bottom": isDemo ? "10%" : 0
			}, {
				duration: imgEffectTransition,
				queue: false
			});
			
			$elem.find("figcaption").animate({
				"opacity": isDemo ? 0.3 : 0,
				"bottom": isDemo ? "-90%" : "-100%"
			}, {
				duration: imgEffectTransition,
				queue: false
			});
		}
		
		// push-down
		if ($elem.find("figure").is(".cover-push-down")) {
			$elem.find("div.img").animate({
				"opacity": 1,
				"top": isDemo ? "10%" : 0
			}, {
				duration: imgEffectTransition,
				queue: false
			});
			
			$elem.find("figcaption").animate({
				"opacity": isDemo ? 0.3 : 0,
				"top": isDemo ? "-90%" : "-100%"
			}, {
				duration: imgEffectTransition,
				queue: false
			});
		}
		
		// push-left
		if ($elem.find("figure").is(".cover-push-left")) {
			$elem.find("div.img").animate({
				"opacity": 1,
				"left": isDemo ? "-10%" : 0
			}, {
				duration: imgEffectTransition,
				queue: false
			});
			
			$elem.find("figcaption").animate({
				"opacity": isDemo ? 0.3 : 0,
				"left": isDemo ? "90%" : "100%"
			}, {
				duration: imgEffectTransition,
				queue: false
			});
		}
		
		
		// push-right
		if ($elem.find("figure").is(".cover-push-right")) {
			$elem.find("div.img").animate({
				"opacity": 1,
				"left": isDemo ? "10%" : 0
			}, {
				duration: imgEffectTransition,
				queue: false
			});
			
			$elem.find("figcaption").animate({
				"opacity": isDemo ? 0.3 : 0,
				"left": isDemo ? "-90%" : "-100%"
			}, {
				duration: imgEffectTransition,
				queue: false
			});
		}
		
		// fall-left
		if ($elem.find("figure").is(".quarter-fall-left")) {
		
			var $elmCaption = $elem.find("figcaption");
			
			$({deg: 0}).animate(
				{deg: 20}, 
				{
					duration: imgEffectTransition,
					step: function(now){
						$elmCaption.css({
							"webkit-transform": 'rotate(' + now + 'deg)',
							"-moz-transform": 'rotate(' + now + 'deg)',
							"-ms-transform": 'rotate(' + now + 'deg)',
							"-o-transform": 'rotate(' + now + 'deg)',
							"transform": 'rotate(' + now + 'deg)'
						});
					},
					queue: false
				}
			);
			
			$elmCaption.animate({
				"opacity": isDemo ? 0.3 : 0,
				"left": isDemo ? "-90%" : "-100%"
			}, {
				duration: imgEffectTransition,
				queue: false
			});
		}
		
		// fall-right
		if ($elem.find("figure").is(".quarter-fall-right")) {
		
			var $elmCaption = $elem.find("figcaption");
			
			$({deg: 0}).animate(
				{deg: 20}, 
				{
					duration: imgEffectTransition,
					step: function(now){
						$elmCaption.css({
							"webkit-transform": 'rotate(' + now + 'deg)',
							"-moz-transform": 'rotate(' + now + 'deg)',
							"-ms-transform": 'rotate(' + now + 'deg)',
							"-o-transform": 'rotate(' + now + 'deg)',
							"transform": 'rotate(' + now + 'deg)'
						});
					},
					queue: false
				}
			);
			
			$elmCaption.animate({
				"opacity": isDemo ? 0.3 : 0,
				"left": isDemo ? "90%" : "100%"
			}, {
				duration: imgEffectTransition,
				queue: false
			});
		}
	};
	
	$(function(){
		$(".image-element").hover(function(){
			mouseOverImageEffects($(this));
		}, function(){
			mouseOutImageEffects($(this));
		});
	});
}