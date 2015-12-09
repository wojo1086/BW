/*!
 * jQuery Black and White
 *
 * @version 1.0
 * @requires jQuery v1.7.1+
 * 
 */
;(function ($) {
	var list = new Array();
	$(document).ready(function(){
		$('body').find('*').each(function(){
			list.push(new getDOM($(this)));	
		});
	});

	var methods = {

		bright: function(el)
		{
			var index = 0;
			for(var i=0; i < list.length; i++)
			{

				if (list[i].name.context == el.context)
				{
					index = i;

				}
			}

			for(var i=index; i < list.length; i++)
			{
				if(jQuery.contains(list[index].name.context,list[i].name.context))
				{
					for (var property in list[i].color)
					{
						if (list[i].color.hasOwnProperty(property)) {
							list[i].name.css(property, list[i].color[property]);

						}
					}
				}
			}	
		},

		dull: function(el)
		{
			el.find('*').each(function(){
			var me = $(this);
			var bgcolor = me.css([
				"background-color", 
				"color",
				"border-top-color",
				"border-right-color",
				"border-bottom-color",
				"border-left-color"]);
				
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
					me.css(prop, 'rgba('+con+','+con+','+con+','+tim[3]+')');
				});
			});
		}
	};

	$.fn.bw = function (options) {
			return this.each(function () {
				
				methods[options].call(this, $(this));
			});
	};

	function convert(r, g, b)
	{
		var x = Math.ceil((0.299*r) + (0.587*g) + (0.114*b));
		return x;
	}

	function getDOM(element)
	{
		this.name = element;
		this.color = element.css([
			"background-color", 
			"color",
			"border-top-color",
			"border-right-color",
			"border-bottom-color",
			"border-left-color"]);
	}
})(jQuery);