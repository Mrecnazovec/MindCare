import { Card } from '@/components/ui/Card'
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/Carousel'
import { useEffect, useState } from 'react'
import { NewsData } from './NewsData'

export function NewsCarousel() {
	const [api, setApi] = useState<CarouselApi>()
	const [current4, setCurrent4] = useState(0)
	const [current3, setCurrent3] = useState(0)
	const [current2, setCurrent2] = useState(0)
	const [count, setCount] = useState(0)
	const [count2, setCount2] = useState(0)

	useEffect(() => {
		if (!api) {
			return
		}

		setCount(api.scrollSnapList().length + 2)
		const updateCurrent4 = () => {
			const newCurrent4 = api.selectedScrollSnap() + 1
			setCurrent4(Math.min(newCurrent4, api.scrollSnapList().length - 1))
		}

		updateCurrent4()

		setCount(api.scrollSnapList().length + 2)
		const updateCurrent3 = () => {
			const newCurrent3 = api.selectedScrollSnap() + 1
			setCurrent3(Math.min(newCurrent3, api.scrollSnapList().length))
		}

		updateCurrent3()

		setCount2(api.scrollSnapList().length)
		setCurrent2(api.selectedScrollSnap())

		api.on('select', () => {
			setCurrent2(api.selectedScrollSnap())
		})

		api.on('select', updateCurrent4)
		api.on('select', updateCurrent3)
	}, [api])

	return (
		<Carousel setApi={setApi}>
			<CarouselContent>
				{NewsData.map((item, index) => (
					<CarouselItem key={index} className='lg:basis-1/4 md:basis-1/3 xs:basis-1/2 flex items-center justify-center'>
						<Card src={item.src} alt='Что если...' width={300} height={380} percentage={50}>
							<div className='line-clamp-1 text-white text-lg font-medium'>{item.title}</div>
						</Card>
					</CarouselItem>
				))}
			</CarouselContent>

			{/* <CarouselPrevious />
<CarouselNext /> */}
			<div className='hidden lg:flex justify-center mt-8'>
				{Array.from({ length: count }).map((_, index) => (
					<button
						onClick={() => api?.scrollTo(index)}
						key={index}
						className={`w-3 h-3 transition-all duration-300 cursor-pointer ${
							current4 === index || current4 - 1 === index || current4 + 1 === index || current4 + 2 === index
								? 'bg-main w-4'
								: 'bg-gray-400 mr-2 rounded-full'
						} ${current4 - 1 === index && 'rounded-l-full'} ${current4 + 2 === index && 'rounded-r-full mr-2'}`}
					></button>
				))}
			</div>
			<div className='flex max-md:hidden lg:hidden justify-center mt-8'>
				{Array.from({ length: count }).map((_, index) => (
					<button
						onClick={() => api?.scrollTo(index)}
						key={index}
						className={`w-3 h-3 transition-all duration-300 cursor-pointer ${
							current3 === index || current3 - 1 === index || current3 + 1 === index ? 'bg-main w-4' : 'bg-gray-400 mr-2 rounded-full'
						} ${current3 - 1 === index && 'rounded-l-full'} ${current3 + 1 === index && 'rounded-r-full mr-2'}`}
					></button>
				))}
			</div>
			<div className='flex md:hidden justify-center mt-8'>
				{Array.from({ length: count2 }).map((_, index) => (
					<button
						onClick={() => api?.scrollTo(index)}
						key={index}
						className={`w-3 h-3 transition-all duration-300 cursor-pointer ${current2 === index ? 'bg-main w-4' : 'bg-gray-400 mr-2 rounded-full'} ${
							current2 === index && 'rounded-l-full'
						} ${current2 === index && 'rounded-r-full mr-2'}`}
					></button>
				))}
			</div>
		</Carousel>
	)
}
