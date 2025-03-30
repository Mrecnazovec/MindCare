import { Button } from '@/components/ui/Button'
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/Carousel'
import { Label } from '@/components/ui/form-elements/Label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/RadioGroup'
import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form-elements/Form'
import { TestData } from './TestData'

interface ITestSlider {
	q1: string
	q2: string
	q3: string
	q4: string
	q5: string
	q6: string
	q7: string
	q8: string
	q9: string
	q10: string
}

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

	const form = useForm<ITestSlider>({
		mode: 'onChange',
		defaultValues: {
			q1: '',
			q2: '',
			q3: '',
			q4: '',
			q5: '',
			q6: '',
			q7: '',
			q8: '',
			q9: '',
			q10: '',
		},
	})

	const { control, handleSubmit, setValue } = form

	const onSubmit: SubmitHandler<ITestSlider> = (data) => {
		console.log(data)
	}

	return (
		<div className='bg-white text-[#242424] xl:p-10 p-5 rounded-main xl:max-w-[600px] lg:max-w-[450px]'>
			<Form {...form}>
				<form onSubmit={handleSubmit(onSubmit)}>
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
									<FormField
										control={control}
										name={`q${index + 1}` as keyof ITestSlider}
										render={({ field }) => (
											<FormItem>
												<FormControl>
													<RadioGroup
														value={field.value}
														onValueChange={(value) => setValue(`q${index + 1}` as keyof ITestSlider, value)}
														defaultValue={item.answers[0]}
													>
														{item.answers.map((answer, cur) => (
															<div key={cur} className='flex items-center space-x-4 font-medium'>
																<RadioGroupItem value={answer} id={`q${index + 1}a${cur}`} />
																<Label className='text-xl text-muted-foreground' htmlFor={`q${index + 1}a${cur}`}>
																	{answer}
																</Label>
															</div>
														))}
													</RadioGroup>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
								</CarouselItem>
							))}
						</CarouselContent>

						<div className='flex items-center justify-between flex-wrap sm:flex-row flex-col gap-1'>
							<div className='text-main text-xl font-medium'>
								{current} из {count}
							</div>
							<div className='flex gap-3 sm:flex-row flex-col sm:w-fit w-full'>
								<Button
									type='button'
									className='sm:w-fit w-full'
									variant='primary'
									size='main'
									disabled={current === 1}
									onClick={() => api?.scrollPrev()}
								>
									Назад
								</Button>

								{current === count ? (
									<Button className='sm:w-fit w-full' variant='primary' size='main' type='submit'>
										Завершить
									</Button>
								) : (
									<Button className='sm:w-fit w-full' variant='primary' size='main' type='button' onClick={() => api?.scrollNext()}>
										Далее
									</Button>
								)}
							</div>
						</div>
					</Carousel>
				</form>
			</Form>
		</div>
	)
}
