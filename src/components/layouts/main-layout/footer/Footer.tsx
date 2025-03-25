import { Logo } from '@/components/ui/logo/Logo'
import { FooterMenu } from './footer-menu/FooterMenu'

export function Footer() {
	return (
		<footer className='bg-[#ECF4FA]'>
			<div className='container mx-auto p-5 gap-x-12 h-full sm:flex justify-between space-y-6 text-[#424242]'>
				<Logo />
				<FooterMenu />
			</div>
		</footer>
	)
}
