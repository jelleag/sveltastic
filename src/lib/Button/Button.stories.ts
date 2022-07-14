import Button from './Button.svelte';

import {Home} from 'tabler-icons-svelte'

export default {
	title: 'Components/Button',
	component: Button,
    argTypes: {
    
      },
};

const Template = (args: any) => ({
	Component: Button,
	props: args,
	on: {
		click: args.onClick
	}
});


export const Primary = Template.bind({});

//@ts-ignore
Primary.args = {
	title: 'Button with long title',
    leftIcon:Home,
    leftIconSize:19,
};

