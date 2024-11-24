/*
å‹•ç”»ãƒ¢ãƒ¼ãƒ€ãƒ«å‡¦ç†
*/
$(function () {
	$('.js-modal-video').modalVideo();
});



/*
è¦ç´ ãƒ•ã‚§ãƒ¼ãƒ‰ã‚¤ãƒ³å‡¦ç†

offsetã§è¦ç´ ãŒè¡¨ç¤ºå®Ÿè¡Œä½ç½®ã‚’æŒ‡å®šã§ãã¾ã™ã€‚
1ã§è¦ç´ ãŒç”»é¢ã«å…¥ã£ãŸçž¬é–“ã«å³æ™‚ã€‚0.5ã§è¡¨ç¤ºã—ãŸè¦ç´ ãŒç”»é¢ã®åŠåˆ†ã¾ã§æ¥ãŸã‚‰â€¦ã¨0.1åˆ»ã¿ã§èª¿æ•´ã€‚
*/
function fadeAnime() {
	$('.fadeUpTrigger').each(function(){
		$(this).css('opacity',0)
		let offset = 0.7;
		let elemPos = $(this).offset().top;
		let scroll = $(window).scrollTop();
		let windowHeight = $(window).height()*offset;
		if (scroll >= elemPos - windowHeight&&!$(this).hasClass('fadeUp')) {
			$(this).addClass('fadeUp');
			$(this).removeClass('fadeUpTrigger');
			//console.log('FadeIn')
		}
	});
}

(function(){
	let to;
	window.addEventListener('scroll', function(){
		if(to) return;
		to = setTimeout(function(){
			to = 0;
			//console.log('ã‚¹ã‚¯ãƒ­ãƒ¼ãƒ«å‡¦ç†')
			fadeAnime();
		}, 300);
	});
})();



/*
ãƒšãƒ¼ã‚¸èª­ã¿è¾¼ã¿å¾Œå‡¦ç†
*/
window.onload = function () {


	/*
	åˆæœŸåŒ–
	*/
	fadeAnime();
	$('#loading').addClass('remove');
	$('#loading.remove').on('webkitTransitionEnd MozTransitionEnd mozTransitionEnd msTransitionEnd oTransitionEnd transitionEnd transitionend', function() {
		$(this).off('webkitTransitionEnd MozTransitionEnd mozTransitionEnd msTransitionEnd oTransitionEnd transitionEnd transitionend');
		$(this).remove();
		//console.log('æ¼”å‡ºçµ‚äº†');
	});


	/*
	ãƒšãƒ¼ã‚¸å°‚ç”¨å‡¦ç†
	*/
	switch(true) {
		case document.getElementById("form") != null :
			//console.log('ãƒšãƒ¼ã‚¸åˆ¥å‡¦ç†ï¼šãƒ•ã‚©ãƒ¼ãƒ ãƒšãƒ¼ã‚¸å°‚ç”¨å‡¦ç†')
			break;
		default :
			//console.log('ãƒšãƒ¼ã‚¸åˆ¥å‡¦ç†ï¼šæ±Žç”¨')
	}


	/*
	ãƒ•ã‚©ãƒ¼ãƒ 
	*/
	//å¿…é ˆãƒã‚§ãƒƒã‚¯
	(function(){
		let checkarray = {};
		function fnc_formcheck(){
			$('.form_input div').each(function(i,e){
				if($(this).find('h2').text().indexOf('*') !== -1) {
					//console.log('å¿…é ˆè¦ç´ å‡¦ç†',$(this).find('h2').text())
					let ckey = $(this).find('h2').text(); //ã‚­ãƒ¼ã‚’å–å¾—
					checkarray[ckey] = $(this).find('.val').val(); //ã‚­ãƒ¼ã‚’æŒ‡å®šã—å…¥åŠ›ã•ã‚ŒãŸå€¤ã‚’ã‚»ãƒƒãƒˆ
					//å€¤ã®è©•ä¾¡
					const isCompulsory = (currentValue) => currentValue !== "";
					let compBool = [];
					let i = 0;
					for(let key in checkarray){
						//console.log('ãƒã‚§ãƒƒã‚¯',checkarray[key],isCompulsory(checkarray[key]))
						compBool[i] = isCompulsory(checkarray[key]);
						i++;
					}
					//å…¥åŠ›çµæžœã®è©•ä¾¡
					const isTrue = (bool) => bool == true;
					if(compBool.every(isTrue)){
						$('.form_input button').removeClass('disabled');
					} else {
						$('.form_input button').addClass('disabled');
					}
				} else {
					//console.log('å¯¾è±¡å¤–å‡¦ç†',$(this).find('h2').text())
				}
				//console.log('é…åˆ—ãƒã‚§ãƒƒã‚¯',checkarray)
			})
		}
		//å‚ç…§
		$(document).on('input', 'input,textarea', function(e) {
			fnc_formcheck();
		});
		//Enterèª¤é€ä¿¡é˜²æ­¢
		$('input').on('keydown', function(e) {
			//console.log('èª¤é€ä¿¡é˜²æ­¢èµ·å‹•')
			if ((e.which && e.which === 13) || (e.keyCode && e.keyCode === 13)) {
				return false;
			} else {
				return true;
			}
		});
	})();


	/*
	æ±Žç”¨ï¼šãƒ‘ãƒ¼ãƒ†ã‚£ã‚¯ãƒ«å‡¦ç†
	*/
	particlesJS('particles-js', {
		"particles": {
			"number": {
				"value": 40,
				"density": {
					"enable": true,
					"value_area": 800
				}
			},
			"color": {
				"value": ["#ffa050"]
			},
			"shape": {
				"type": "circle",
				"stroke": {
					"width": 0,
					"color": "#ffae3c"
				},
				"polygon": {
					"nb_sides": 5
				}
			},
			"opacity": {
				"value": 1,
				"random": true,
				"anim": {
					"enable": true,
					"speed": 1,
					"opacity_min": 0.1,
					"sync": false
				}
			},
			"size": {
				"value": 4,
				"random": true,
				"anim": {
					"enable": true,
					"speed": 2,
					"size_min": 0,
					"sync": false
				}
			},
			"line_linked": {
				"enable": false,
				"distance": 200,
				"color": "#ffffff",
				"opacity": 0.4649894976510016,
				"width": 16.675485433001437
			},
			"move": {
				"enable": true,
				"speed": 15,
				"direction": "top",
				"random": true,
				"straight": false,
				"out_mode": "out",
				"bounce": false,
				"attract": {
					"enable": false,
					"rotateX": 600,
					"rotateY": 1200
				}
			}
		},
		"interactivity": {
			"detect_on": "canvas",
			"events": {
				"onhover": {
					"enable": false,
					"mode": "grab"
				},
				"onclick": {
					"enable": false,
					"mode": "push"
				},
				"resize": true
			},
			"modes": {
				"grab": {
					"distance": 400,
					"line_linked": {
						"opacity": 1
					}
				},
				"bubble": {
					"distance": 400,
					"size": 40,
					"duration": 2,
					"opacity": 8,
					"speed": 3
				},
				"repulse": {
					"distance": 200,
					"duration": 0.4
				},
				"push": {
					"particles_nb": 4
				},
				"remove": {
					"particles_nb": 2
				}
			}
		},
		"retina_detect": true
	});


};