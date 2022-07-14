import Slider from './Slider.svelte';

import {Home} from 'tabler-icons-svelte'

export default {
	title: 'Components/Slider',
	component: Slider,
    argTypes: {
    
      },
};

const Template = (args: any) => ({
	Component: Slider,
	props: args,
	on: {
		click: args.onClick
	}
});


export const Primary = Template.bind({});

//@ts-ignore
Primary.args = {
sliderValue:50,
fillColor:'yellow'
};

