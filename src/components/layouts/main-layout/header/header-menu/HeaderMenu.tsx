'use client'

import * as React from 'react'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from '@/components/ui/NavigationMenu'
import { DASHBOARD_URL, PUBLIC_URL } from '@/config/url.config'
import { Direction, Education, ListItems } from './ListItems'

export function HeaderMenu() {
	const direction: ListItems[] = Direction
	const education: ListItems[] = Education

	return (
		<div className='hidden lg:flex'>
			<NavigationMenu>
				<NavigationMenuList>
					<NavigationMenuItem>
						<Link href={PUBLIC_URL.about()} legacyBehavior passHref>
							<NavigationMenuLink className={cn(navigationMenuTriggerStyle(), 'hover:text-main')}>О нас</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<Link href={PUBLIC_URL.catalog()} legacyBehavior passHref>
							<NavigationMenuLink className={cn(navigationMenuTriggerStyle(), 'hover:text-main')}>Каталог психологов</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>

			<NavigationMenu>
				<NavigationMenuList>
					<NavigationMenuItem>
						<NavigationMenuTrigger>Направления</NavigationMenuTrigger>
						<NavigationMenuContent>
							<ul className='w-[200px]'>
								{direction.map((link, index) => (
									<ListItem key={index} title={link.title} href={link.href}></ListItem>
								))}
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuTrigger>Образование</NavigationMenuTrigger>
						<NavigationMenuContent>
							<ul className='w-[200px]'>
								{education.map((link, index) => (
									<ListItem key={index} title={link.title} href={link.href}></ListItem>
								))}
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<Link href={DASHBOARD_URL.home()} legacyBehavior passHref>
							<NavigationMenuLink className={cn(navigationMenuTriggerStyle(), 'hover:text-main')}>Психологам</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
		</div>
	)
}

const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn('block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors', className)}
					{...props}
				>
					<div className='text-sm font-medium leading-none'>{title}</div>
				</a>
			</NavigationMenuLink>
		</li>
	)
})
ListItem.displayName = 'ListItem'
