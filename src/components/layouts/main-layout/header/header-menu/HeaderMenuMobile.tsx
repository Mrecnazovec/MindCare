import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/Accordion'
import { Button } from '@/components/ui/Button'
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/Drawer'
import { DASHBOARD_URL, PUBLIC_URL } from '@/config/url.config'
import Link from 'next/link'
import { Direction, Education } from './ListItems'
import { Menu } from 'lucide-react'

export function HeaderMenuMobile() {
	return (
		<Drawer>
			<DrawerTrigger className='outline-0 flex lg:hidden'>
				<Menu className='size-4' />
			</DrawerTrigger>
			<DrawerContent>
				<DrawerTitle className='hidden'>Меню</DrawerTitle>
				<DrawerHeader>
					<Link href={PUBLIC_URL.about()}>О нас</Link>
					<Link href={PUBLIC_URL.catalog()}>Каталог психологов</Link>
					<Accordion type='single' collapsible>
						<AccordionItem value='item-1'>
							<AccordionTrigger className='py-0'>Направления</AccordionTrigger>
							<AccordionContent className='flex flex-col gap-3 pt-3'>
								{Direction.map((link, index) => (
									<Link key={index} href={link.href}>
										{link.title}
									</Link>
								))}
							</AccordionContent>
						</AccordionItem>
					</Accordion>
					<Accordion type='single' collapsible>
						<AccordionItem value='item-1'>
							<AccordionTrigger className='py-0'>Образование</AccordionTrigger>
							<AccordionContent className='flex flex-col gap-3 pt-3'>
								{Education.map((link, index) => (
									<Link key={index} href={link.href}>
										{link.title}
									</Link>
								))}
							</AccordionContent>
						</AccordionItem>
					</Accordion>
					<Link href={DASHBOARD_URL.home()}>Психологам</Link>
				</DrawerHeader>
				<DrawerFooter></DrawerFooter>
			</DrawerContent>
		</Drawer>
	)
}
