import { type ComponentProps } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '~/components/header';
import { cn } from '~/utils';

interface PageProps {
	headerProps?: ComponentProps<typeof Header>;
	bodyProps?: React.HTMLProps<HTMLDivElement>;
	before?: JSX.Element;
	after?: JSX.Element;
	className?: string;
	section?: string;
}

function Page({ section, before, after, children, className, headerProps, bodyProps, ...props }: React.PropsWithChildren<PageProps>) {
	return <div {...bodyProps}>
		<Helmet>
			<title>{section ? `${section} - Mario Paraschiv` : 'Mario Paraschiv'}</title>
		</Helmet>
		<Header {...(headerProps ?? {})} />
		{before ? before : ''}
		<div {...props} className={cn('flex flex-col gap-[10px] min-h-[100vh] px-0 py-5 before:pointer-events-none before:fixed before:inset-0 before:-top-64 before:bg-grid before:bg-top before:bg-no-repeat before:opacity-70', className)}>
			{children}
		</div>
		{after ? after : ''}
	</div>;
}

export default Page;
