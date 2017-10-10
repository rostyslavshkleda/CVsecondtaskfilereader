window.onload = function() {
		var fileInput = document.getElementById('input');
		var fileDisplayArea = document.getElementById('display');

		fileInput.addEventListener('change', function(e) {
			var file = input.files[0];
			var reader = new FileReader();

				reader.onload = function(e) {
					display.innerText = reader.result;
				}

				reader.readAsText(file);	
			
		});
}
