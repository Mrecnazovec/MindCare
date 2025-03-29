import { Button } from '@/components/ui/Button'
import Image from 'next/image'
import Link from 'next/link'

export function AboutSection() {
	return (
		<div className='flex justify-between gap-10'>
			<div className='relative w-1/2 h-fit max-md:hidden'>
				<Image src='/images/about-square.png' alt='picture' width={520} height={520} />
				<div className='absolute bottom-0 left-0 '>
					<div className='relative bg-[#66BBF8] text-white p-6 rounded-[15px] xl:size-[240px] lg:size-[210px] sm:size-[150px] flex flex-col justify-center items-center text-center shadow-lg'>
						<span className='absolute text-8xl font-extrabold text-white/20 top-0 select-none'>20%</span>
						<span className='text-6xl font-extrabold'>20%</span>
						<p className='mt-2 text-lg'>психологов попадают в нашу базу</p>
					</div>
				</div>
			</div>
			<div className='space-y-2 w-1/2 max-md:w-full'>
				<h2 className='font-semibold text-4xl'>О нас</h2>
				<p className='text-xl text-muted-foreground'>
					Lorem ipsum dolor sit amet consectetur. Malesuada pharetra orci gravida fames eu semper sed amet morbi. Varius pretium in aliquam laoreet
					felis.
				</p>
				<p className='text-xl text-muted-foreground mb-10'>
					Lorem ipsum dolor sit amet consectetur. Malesuada pharetra orci gravida fames eu semper sed amet morbi. Varius pretium in aliquam laoreet
					felis.{' '}
				</p>
				<Link href=''>
					<Button size='main' variant='primary'>
						Посмотреть все
					</Button>
				</Link>
			</div>
		</div>
	)
}
