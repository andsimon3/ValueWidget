ValueInput = document.getElementsByClassName('ControlPanel_Value')[0];
function PercentToLength(percent, length){
	if(percent>=100){percent=100}
	if(percent<=0){percent=0}
	if(isNaN(percent)){percent=0}
	percent = (100-percent)/100
	return length*percent;
}
ValueInput.addEventListener('change', function ChangeValue(){
	SvgCircle = document.getElementsByClassName('Visualizer_LoadStroke')[0];
	SvgCircle.setAttribute('stroke-dashoffset', PercentToLength(ValueInput.value, 283));
});