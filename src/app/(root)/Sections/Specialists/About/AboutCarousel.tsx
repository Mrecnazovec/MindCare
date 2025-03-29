import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/Carousel'
import { type CarouselApi } from '@/components/ui/Carousel'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { AboutData } from './AboutData'
import { cn } from '@/lib/utils'

export function AboutCarousel() {
	const [api, setApi] = useState<CarouselApi>()
	const [current, setCurrent] = useState(0)
	const [count, setCount] = useState(0)

	useEffect(() => {
		if (!api) {
			return
		}

		setCount(api.scrollSnapList().length)
		setCurrent(api.selectedScrollSnap() + 1)

		api.on('select', () => {
			setCurrent(api.selectedScrollSnap() + 1)
		})
	}, [api])

	return (
		<Carousel setApi={setApi} className='w-full'>
			<CarouselContent>
				{AboutData.map((item, index) => (
					<CarouselItem key={index} className='min-h-[450px] flex items-center justify-center'>
						<div
							className={cn(
								`relative bg-gradient-to-br from-main from-30% to-second text-white sm:p-7 p-3 pt-5 rounded-2xl shadow-lg xs:max-w-[800px] w-fit text-center transition-all duration-1000 `,
								`${index + 1 === current ? 'mt-0' : 'mt-10'}`
							)}
						>
							<div className='absolute -top-12 left-1/2 transform -translate-x-1/2 bg-main p-3 rounded-full'>
								<Image src={item.src} alt={item.name} className='w-24 h-24 rounded-full shadow-md object-cover' width={124} height={124} />
							</div>
							<div className='mt-12'>
								<h3 className='text-xl font-extrabold'>{item.name}</h3>
								<p className='text-[16px] font-medium'>{item.job}</p>
								<div className='flex justify-center mt-2 space-x-1'>
									{[...Array(5)].map((_, i) => (
										<span key={i} className={`text-2xl ${i+1 <= item.rating ? 'text-white' : 'text-gray-200 opacity-20'}`}>
											★
										</span>
									))}
								</div>
								<p className='mt-4 text-white/90'>{item.text}</p>
							</div>
							<div
								className={`flex absolute rounded-main w-[94%] left-1/2 transform -translate-x-1/2 bg-linear-to-br from-main to-second opacity-70 h-10 -z-10 transition-all duration-1000 ${
									index + 1 === current ? '-bottom-4' : '-bottom-0'
								}`}
							></div>
							<div
								className={`flex absolute rounded-main w-[90%] left-1/2 transform -translate-x-1/2 bg-linear-to-br from-main to-second opacity-70 h-12 -z-10 transition-all duration-1000 ${
									index + 1 === current ? '-bottom-7' : '-bottom-0'
								}`}
							></div>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<div className='flex justify-center mt-4'>
				{Array.from({ length: count }).map((_, index) => (
					<button
						onClick={() => api?.scrollTo(index)}
						key={index}
						className={`w-3 h-3 transition-all duration-300 cursor-pointer ${
							current === index + 1 ? 'bg-main w-4' : 'bg-gray-400 mr-2 rounded-full'
						} ${current === index + 1 && 'rounded-l-full'} ${current === index + 1 && 'rounded-r-full mr-2'}`}
					></button>
				))}
			</div>
		</Carousel>
	)
}
