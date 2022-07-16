<script lang="ts">
	export let sliderValue: number = 50;
    export let fillColor: string = 'green';

    export let onInput: (value: number) => void = (value: number) => {}

	let barWidth: number;

	function handleOnChange(event: any) {
		sliderValue = event.target.value;
        onInput(sliderValue)
	}
</script>

<div style="--theme-color: {fillColor}; --fill-value:{sliderValue}%;" class="slider-container" bind:clientWidth={barWidth}>
	<input
		type="range"
		min="0"
		step="0.01"
		max="100"
		value="50"
		on:input={handleOnChange}
		class="slider"
		id="myRange"
	/>
</div>

<style>
	.slider-container {
		width: 100%;
		height: 10px;
		background-color: rgb(231, 230, 230);
		display: flex;
		align-items: center;
		border-radius: 4px;
		outline: none; /* Remove outline */
	}
    .slider-container:after {
border-top-left-radius: 4px;;
border-bottom-left-radius: 4px;;

    content: '\A';
    position: absolute;
    background: var(--theme-color);
    top: 0; bottom: 0;
    left: 0; 
    width: var(--fill-value); /* Specify the width.. */
}

	.slider {
		-webkit-appearance: none; /* Override default CSS styles */
		appearance: none;
		width: 100%; /* Full-width */
		height: 10px; /* Specified height */
		background: transparent; /* Grey background */
		outline: none; /* Remove outline */
		/* -webkit-transition: 0.2s;
		transition: opacity 0.2s; */
		border-radius: 4px;
		z-index: 100;
	}

	/* Mouse-over effects */
	.slider:hover {
		opacity: 1; /* Fully shown on mouse-over */
	}

	/* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */
	.slider::-webkit-slider-thumb {
		-webkit-appearance: none; /* Override default look */
		appearance: none;
		width: 20px; /* Set a specific slider handle width */
		height: 20px; /* Slider handle height */
		background: white; /* Green background */
		cursor: pointer; /* Cursor on hover */
		border-radius: 4px;
		border: 1px solid #b5b5b5;
		z-index: 100;
        /* transform: translateX(-50%); */
	}

	.slider::-moz-range-thumb {
		width: 16px; /* Set a specific slider handle width */
		height: 16px; /* Slider handle height */
		background: white; /* Green background */
		cursor: pointer; /* Cursor on hover */
		border-radius: 4px;
		border: 1px solid #b5b5b5;
        z-index:100;
	}
</style>
