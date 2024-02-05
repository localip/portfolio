import type { SVGProps } from 'react';

function HTML(props: SVGProps<SVGSVGElement>) {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24' {...props}>
			<path fill='currentColor' d='m12 17.56l4.07-1.13l.55-6.1H9.38L9.2 8.3h7.6l.2-1.99H7l.56 6.01h6.89l-.23 2.58l-2.22.6l-2.22-.6l-.14-1.66h-2l.29 3.19zM4.07 3h15.86L18.5 19.2L12 21l-6.5-1.8z' />
		</svg>
	);
}

export default HTML;