HideCheckbox = document.getElementsByClassName('ControlPanel_Hide')[0];
HideCheckbox.addEventListener('change', function ChangeValue(){
	Svg = document.getElementsByClassName('Visualizer_Svg')[0];
	if(HideCheckbox.checked){
		Svg.classList.add('Visualizer_Svg_Hidden');
	}else{
		Svg.classList.remove('Visualizer_Svg_Hidden');
	}
});