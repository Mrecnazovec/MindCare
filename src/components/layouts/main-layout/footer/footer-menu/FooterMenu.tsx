import { DASHBOARD_URL, PUBLIC_URL } from '@/config/url.config'
import Link from 'next/link'
import { Direction, Education } from '../../header/header-menu/ListItems'

export function FooterMenu() {
	return (
		<ul className='text-md flex justify-between space-y-6 xl:gap-12 lg:gap-6 gap-3 flex-wrap'>
			<li>
				<Link className='hover:text-main transition-all' href={PUBLIC_URL.about()}>
					О нас
				</Link>
			</li>{' '}
			<li>
				<Link className='hover:text-main transition-all' href={PUBLIC_URL.catalog()}>
					Каталог психологов
				</Link>
			</li>
			<li className='flex flex-col gap-2.5'>
				<p className='text-md'>Направления</p>
				{Direction.map((link, index) => (
					<Link className='text-muted-foreground hover:text-main transition-all' key={index} href={link.href}>
						{link.title}
					</Link>
				))}
			</li>
			<li className='flex flex-col gap-2.5'>
				<p className='text-md'>Образование</p>
				{Education.map((link, index) => (
					<Link className='text-muted-foreground hover:text-main transition-all' key={index} href={link.href}>
						{link.title}
					</Link>
				))}
			</li>
			<li>
				<Link className='hover:text-main transition-all' href={DASHBOARD_URL.home()}>
					Психологам
				</Link>
			</li>
		</ul>
	)
}
