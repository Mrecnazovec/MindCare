import { Button } from '@/components/ui/Button'
import { TestSlider } from './TestSlider'
import Link from 'next/link'

export function TestSection() {
	return (
		<div className='bg-linear-to-r from-main to-second rounded-[20px] w-full sm:p-12 p-6 text-white flex lg:flex-row flex-col justify-between gap-6 mb-7'>
			<div className='lg:max-w-[436px]'>
				<h3 className='text-4xl mb-1 font-extrabold tracking-wider leading-14'>Тест на подбор психолога</h3>
				<p className='text-xl mb-6 lg:mb-14 leading-8'>
					Lorem ipsum dolor sit amet consectetur. Malesuada pharetra orci gravida fames eu semper sed amet morbi. <br /> Varius pretium in aliquam
					laoreet felis.{' '}
				</p>
				<Link href=''>
					<Button variant='white' size='main' className='sm:w-fit w-full'>
						Выбрать психолога
					</Button>
				</Link>
			</div>
			<TestSlider />
		</div>
	)
}
