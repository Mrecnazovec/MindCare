import { Button } from '@/components/ui/Button'
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/Carousel'
import { Label } from '@/components/ui/form-elements/Label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/RadioGroup'
import { useEffect, useState } from 'react'
import { TestData } from './TestData'

export function TestSlider() {
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
		<div className='bg-white text-[#242424] xl:p-10 p-5 rounded-main xl:max-w-[600px] lg:max-w-[450px]'>
			<Carousel
				setApi={setApi}
				opts={{
					watchDrag: false,
				}}
			>
				<CarouselContent className='sm:mb-24 mb-10'>
					{TestData.map((item, index) => (
						<CarouselItem key={index}>
							<h4 className='sm:text-3xl text-2xl font-extrabold tracking-wide mb-7'>{item.question}</h4>
							<RadioGroup defaultValue={item.answers[0]}>
								{item.answers.map((answer, cur) => (
									<div key={cur} className='flex items-center space-x-4 font-medium'>
										<RadioGroupItem value={answer} id={`q${index + 1}a${cur}`} />
										<Label className='text-xl text-muted-foreground' htmlFor={`q${index + 1}a${cur}`}>
											{answer}
										</Label>
									</div>
								))}
							</RadioGroup>
						</CarouselItem>
					))}
				</CarouselContent>
				<div className='flex items-center justify-between flex-wrap sm:flex-row flex-col gap-1'>
					<div className='text-main text-xl font-medium'>
						{current} из {count}
					</div>
					<div className='flex gap-3 sm:flex-row flex-col sm:w-fit w-full'>
						<Button className='sm:w-fit w-full' variant='primary' size='main' disabled={current === 1} onClick={() => api?.scrollPrev()}>
							Назад
						</Button>
						<Button
							className='sm:w-fit w-full'
							variant='primary'
							size='main'
							onClick={current !== count ? () => api?.scrollNext() : () => alert('Конец')}
						>
							{current !== count ? 'Далее' : 'Завершить'}
						</Button>
					</div>
				</div>
			</Carousel>
		</div>
	)
}
