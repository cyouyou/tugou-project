(function($, doc) {
	$.init();
	$.ready(function() {
		var cityPicker = new $.PopPicker({
			layer: 2
		});
		cityPicker.setData(cityData);
		var showCityPickerButton = doc.getElementById('showCityPicker');
		var cityResult = doc.getElementById('cityResult');
		showCityPickerButton.addEventListener('tap', function(event) {
			cityPicker.show(function(items) {
				showCityPickerButton.innerHTML = items[1].text;
				//返回 false 可以阻止选择框的关闭
				//return false;
			});
		}, false);
	});
})(mui, document);