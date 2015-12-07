/*!
 * jQuery Black and White
 *
 * @version 1.0
 * @requires jQuery v1.7.1+
 * 
 */
;(function ($) {
	var canNum = 0;
	$.fn.bw = function () {
		$(this).find('*').each(function(){
			var bgcolor = $(this).css([
				"background-color", 
				"color",
				"border-top-color",
				"border-right-color",
				"border-bottom-color",
				"border-left-color"]);
			var element = $(this);

			$.each(bgcolor, function(prop, value) {
				var check = value.split("(");
				if(check[0] == "rgb")
				{
					var splitVal = value.split(")");
					value = splitVal[0] + ",1" + splitVal[1];
				}
					var tim = value.split(",");
					tim[0] = tim[0].split("(").pop();
					tim[3] = tim[3].split(")").splice(0,1);
					var con = convert(tim[0], tim[1], tim[2]);
					element.css(prop, 'rgba('+con+','+con+','+con+','+tim[3]+')');
			})
		});
	};

	function convert(r, g, b)
	{
		var x = Math.ceil((0.299*r) + (0.587*g) + (0.114*b));
		return x;
	}
})(jQuery);