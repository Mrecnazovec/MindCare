import { cn } from '@/lib/utils'
import Image from 'next/image'
import { PropsWithChildren } from 'react'

interface CardProps {
	src: string
	width?: number | 300
	height?: number | 400
	alt: string
	percentage?: number | 100
	className?: string
}

export function Card({ src, alt, height, width, children, percentage, className }: PropsWithChildren<CardProps>) {
	return (
		<div className={cn('relative w-fit rounded-main', className)}>
			<div
				className={`absolute bottom-0 bg-linear-to-t from-main hover:from-second transition-all to-transparent to-${percentage}% w-full h-full rounded-main`}
			></div>
			<Image src={src} alt={alt} width={width} height={height} className={cn(`object-cover w-full h-full rounded-main`)}></Image>
			<div className='absolute bottom-4 left-4'>{children}</div>
		</div>
	)
}
