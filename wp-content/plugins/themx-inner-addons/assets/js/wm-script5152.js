(function ($) {
	"use strict";


    function WMCircleProgressActive($scope, $) {
		// 6 pieChart RoundCircle
			var rounderContainer = $('.piechart');
			if (rounderContainer.length) {
				rounderContainer.each(function () {
					var Self = $(this);
					var value = Self.data('value');
					var size = Self.parent().width();
					var color = Self.data('fg-color');

					Self.find('span').each(function () {
						var expertCount = $(this);
						expertCount.appear(function () {
							expertCount.countTo({
								from: 1,
								to: value*100,
								speed: 3000
							});
						});

					});
					Self.appear(function () {					
						Self.circleProgress({
							value: value,
							size: 140,
							thickness: 15,
							emptyFill: '#e5e5ff',
							animation: {
								duration: 3000
							},
							fill: {
								color: color
							}
						});
					});
				});
			};
	}


    // progress bar
    if ($(".progress-bar").length) {
        var $progress_bar = $('.progress-bar');
        $progress_bar.appear();
        $(document.body).on('appear', '.progress-bar', function() {
            var current_item = $(this);
            if (!current_item.hasClass('appeared')) {
                var percent = current_item.data('percent');
                current_item.css('width', percent + '%').addClass('appeared').parent().append('<span>' + percent + '%' + '</span>');
            }
            
        });
    };
    



  
    $(window).on('elementor/frontend/init', function () {
		elementorFrontend.hooks.addAction('frontend/element_ready/themex-addons-skills.default', WMCircleProgressActive);
	});  
  

})(jQuery);