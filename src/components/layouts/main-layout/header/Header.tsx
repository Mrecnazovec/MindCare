import { HeaderMenu } from './header-menu/HeaderMenu'
import { HeaderMenuMobile } from './header-menu/HeaderMenuMobile'
import { Logo } from '../../../ui/logo/Logo'

export function Header() {
	return (
		<header className='container mx-auto p-5 gap-x-4 h-full flex items-center justify-between bg-white text-submuted'>
			<Logo />
			<HeaderMenu />
			<HeaderMenuMobile />
		</header>
	)
}
