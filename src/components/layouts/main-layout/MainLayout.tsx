import { PropsWithChildren } from 'react'
import { Header } from './header/Header'
import { Footer } from './footer/Footer'

export function MainLayout({ children }: PropsWithChildren<unknown>) {
	return (
		<div className='flex flex-col h-full'>
			<div className='flex-1'>
				<Header />
				<main className='container mx-auto p-5'>{children}</main>
				<Footer />
			</div>
		</div>
	)
}
