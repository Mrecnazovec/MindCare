import { DASHBOARD_URL, PUBLIC_URL } from '@/config/url.config'
import Link from 'next/link'
import { AboutUs, Direction, Education, ForClient, ForPsychologist, Interesting } from '../../header/header-menu/ListItems'
import Image from 'next/image'

export function FooterMenu() {
	return (
		<ul className='text-md flex justify-between space-y-6 xl:gap-12 lg:gap-6 gap-3 flex-wrap'>
			<li className='flex flex-col gap-2.5'>
				<p className='text-md'>Для клиентов</p>
				{ForClient.map((link, index) => (
					<Link className='text-muted-foreground hover:text-main transition-all' key={index} href={link.href}>
						{link.title}
					</Link>
				))}
			</li>
			<li className='flex flex-col gap-2.5'>
				<p className='text-md'>Для психологов</p>
				{ForPsychologist.map((link, index) => (
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
			<li className='flex flex-col gap-2.5'>
				<p className='text-md'>Интересное</p>
				{Interesting.map((link, index) => (
					<Link className='text-muted-foreground hover:text-main transition-all' key={index} href={link.href}>
						{link.title}
					</Link>
				))}
			</li>
			<li className='flex flex-col gap-2.5'>
				<p className='text-md'>О нас</p>
				{AboutUs.map((link, index) => (
					<Link className='text-muted-foreground hover:text-main transition-all' key={index} href={link.href}>
						{link.title}
					</Link>
				))}
			</li>

			<li>
				<p className='text-md mb-2.5'>Соц. сети</p>
				<div className='flex gap-2 items-center'>
					<Link href='' className='hover:opacity-80 transition-opacity'>
						<div>
							<Image src='/icons/inst.svg' alt='instagram' width={24} height={24} />
						</div>
					</Link>
					<Link href='' className='hover:opacity-80 transition-opacity'>
						<div>
							<Image src='/icons/tg.svg' alt='telegram' width={24} height={24} />
						</div>
					</Link>
					<Link href='' className='hover:opacity-80 transition-opacity'>
						<div>
							<Image src='/icons/email.svg' alt='email' width={24} height={24} />
						</div>
					</Link>
					<Link href='' className='hover:opacity-80 transition-opacity'>
						<div>
							<Image src='/icons/tel.svg' alt='phone' width={24} height={24} />
						</div>
					</Link>
				</div>
			</li>
		</ul>
	)
}
