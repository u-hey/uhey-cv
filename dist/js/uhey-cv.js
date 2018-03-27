$(function() {

	function init(obj) {
		var data = function() {
			var o = {
				initIndex: obj && obj.initIndex || 0,
				id: obj && obj.id || "cv",
				len: document.getElementById(arguments[0].id || "cv").children.length - 1,
				eName: /firefox/.test(navigator.userAgent.toLowerCase()) ? "DOMMouseScroll" : "mousewheel"
			}
			o.li = $("#" + o.id).children()
			return o;
		}(obj);

		var flag, index = data.initIndex;
		data.li.each(function(i, ele) {
			$(this).index() != data.initIndex && $(this).css({
				display: "none"
			});
		})

		$("body").bind(data.eName, function(e) {
			if(flag) return;
			flag = !0;
			var delta = e.originalEvent.wheelDelta > 0 ? -1 : 1; // -1 向上滑 ；1 向下滑
			index = index + delta < 0 ? data.len : index + delta > data.len ? 0 : index + delta;
			data.li.addClass("out-up").removeClass("in-down");
			data.li.eq(index).removeClass("out-up").addClass("in-down").css("display", "block")
			$(this).on('animationend', function(e) {
				flag = !1
			});

		})
	}
init({
		initIndex: 0,
		id: "cv"
	});

})