import { Logo } from '@/components/ui/logo/Logo'
import { FooterMenu } from './footer-menu/FooterMenu'
import { Container } from '@/components/ui/Container'
import Link from 'next/link'

export function Footer() {
	return (
		<footer className='bg-[#ECF4FA]'>
			<div className='container mx-auto p-5 gap-x-12 h-full sm:flex justify-between space-y-6 text-[#424242]'>
				<Logo />
				<FooterMenu />
			</div>
			<Container className='flex items-center justify-center gap-5 flex-wrap text-[#424242]'>
				<Link href='' className='hover:text-main transition-[color]'>
					Политика конфиденциальности
				</Link>
				<Link href='' className='hover:text-main transition-[color]'>
					Обработка персональных данных
				</Link>
				<Link href='' className='hover:text-main transition-[color]'>
					Пользовательское соглашение
				</Link>
			</Container>
		</footer>
	)
}
