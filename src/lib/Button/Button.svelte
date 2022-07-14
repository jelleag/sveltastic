<script lang="ts">
	import type { SvelteComponentTyped } from 'svelte';

	export let title: string = 'Click';

	export let buttonColor: string = 'green';

	export let leftIcon: SvelteComponentTyped | null = null;
	export let leftIconSize: number = 16;
	export let leftIconColor: string = 'white';

	export let rightIcon: SvelteComponentTyped | null = null;
	export let rightIconSize: number = 16;
	export let rightIconColor: string = 'white';


</script>

<svelte:head>
  <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700" rel="stylesheet">
</svelte:head>

<div style="background-color: {buttonColor}" class="button">
	{#if leftIcon}
		<div class="icon-holder-left">
			<svelte:component this={leftIcon} size={leftIconSize} color={leftIconColor} />
		</div>
	{/if}

	<p style="margin-left: {leftIcon ? '5px' : '0px'}" class="button-title">{title}</p>

	{#if rightIcon}
		<div class="icon-holder-right">
			<svelte:component this={rightIcon} size={rightIconSize} color={rightIconColor} />
		</div>
	{/if}
</div>

<style>
	.button {
		min-width: 65px;
		height: 35px;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		background-color: green;
		border-radius: 4px;
		box-shadow: 0px 3px 7px 0px rgba(9, 2, 2, 0.1);
		padding-left: 18px;
		padding-right: 18px;
		cursor: pointer;
	}


	.button:hover {
		box-shadow: 0px 3px 9px 0px rgba(9, 2, 2, 0.14);
		opacity: 0.9;
	}
	.button:active {
		box-shadow: 0px 3px 11px 0px rgba(9, 2, 2, 0.18);
		opacity: 0.8;
	}
	.button-title {
		font-family: 'Poppins';
		font-size: 12px;
		font-weight: 400;
		color: white;
	}
	.icon-holder-right {
		margin-left: 5px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.icon-holder-left {
		margin-right: 5px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
