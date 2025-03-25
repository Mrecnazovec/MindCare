import Image from 'next/image'
import { PropsWithChildren } from 'react'

interface CardProps {
	src: string
	width?: number | 300
	height?: number | 400
	alt: string
	percentage?: number | 100
}

export function Card({ src, alt, height, width, children, percentage }: PropsWithChildren<CardProps>) {
	return (
		<div className='relative w-fit rounded-[20px]'>
			<div
				className={`absolute bottom-0 bg-linear-to-t from-main hover:from-second transition-all to-transparent to-${percentage}% w-full h-full rounded-[20px]`}
			></div>
			<Image src={src} alt={alt} width={width} height={height}></Image>
			<div className='absolute bottom-4 left-4'>{children}</div>
		</div>
	)
}
