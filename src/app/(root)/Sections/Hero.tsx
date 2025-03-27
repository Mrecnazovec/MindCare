import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
	return (
		<Container>
			<div className='relative h-fit md:h-[564px] flex items-center justify-center lg:justify-end md:bg-[#F1F7FB] rounded-[20px] p-4 md:p-20 mb-14'>
				<div className='absolute inset-0 lg:flex hidden w-[60%] xl:w-3/4'>
					<div className='absolute  inset-0 bg-gradient-to-l from-[#F1F7FB] via-transparent to-transparent w-3/5'></div>
					<Image src='/images/hero.png' alt='Hero' className='h-full object-cover w-3/5 rounded-[20px] ' width={750} height={570} />
				</div>
				<div className='hidden md:flex absolute -bottom-3 rounded-[20px] w-[99%] left-1.5 bg-[#4DB9AB17] h-10 -z-10'></div>
				<div className='hidden md:flex absolute -bottom-5 rounded-[20px] w-[97.5%] left-4 bg-[#4DB9AB24] h-10 -z-10'></div>

				<div className='relative z-10 max-w-2xl md:text-left text-center'>
					<h1 className='text-2xl md:text-6xl font-bold text-black '>
						<span className='text-main'>Новый ты </span> – без <br className='hidden md:flex' /> страхов и тревог!
					</h1>
					<p className='text-[#717171] text-lg mt-4'>
						Психологическое состояние тоже нуждается в заботе. <br className='hidden md:flex' /> Найди себя. Преодолей страхи. Живи полной жизнью!
					</p>
					<div className='mt-6 flex flex-col justify-center gap-5 items-center  md:flex-row'>
						<Link href=''>
							<Button variant='primary' size='main' className='shadow-button py-6 px-10'>
								Выбрать психолога
							</Button>
						</Link>
						<Link href='' className='text-xl text-main underline'>
							Подберите мне психолога
						</Link>
					</div>
				</div>
			</div>
		</Container>
	)
}
