AnimateCheckbox = document.getElementsByClassName('ControlPanel_Animate')[0];
AnimateCheckbox.addEventListener('change', function ChangeValue(){
	Svg = document.getElementsByClassName('Visualizer_Svg')[0];
	if(AnimateCheckbox.checked){
		Svg.classList.add('Visualizer_Svg_Animated');
	}else{
		Svg.classList.remove('Visualizer_Svg_Animated');
	}
});