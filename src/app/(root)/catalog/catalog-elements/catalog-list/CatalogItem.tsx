import { Button } from '@/components/ui/Button'
import { SpecialistsData } from '@/data/SpecialistData'
import { Heart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

interface Specialist {
	name: string
	secondName: string
	job: string
	src: string
	aboutSelf: string
	approach: string[]
	format: string
	country: string
	about: {
		experience: string
		certificate: string
		courses: string
	}
	type: string[]
	rating: number
	id: string
}

interface CatalogItemProps {
	data: Specialist
}

export function CatalogItem({ data }: CatalogItemProps) {
	const [favorite, setFavorite] = useState<boolean>(true)

	return (
		<div className='w-full bg-white p-7 rounded-main grid sm:grid-cols-5 gap-7 shadow xs:static relative mb-6'>
			<div className='sm:col-span-2'>
				<Image src={data.src} alt={data.name} width={273} height={303} className='rounded-main mb-4 w-full object-cover' />
				<Button size='main' variant='primary' className='w-full mb-5 xl:text-xl text-sm'>
					Выбрать психолога
				</Button>
				<div className='flex gap-3'>
					<Image src='/icons/location.svg' alt='location' width={33} height={34} />
					<div className='text-sm'>
						<p className='font-semibold text-submuted'>Приём:</p>
						<p className='text-submuted opacity-80'>
							{data.country} / {data.format}
						</p>
					</div>
				</div>
			</div>
			<div className='sm:col-span-3 xs:relative'>
				<Button
					onClick={() => setFavorite(!favorite)}
					variant='ghost'
					size='icon'
					className='absolute xs:right-0 right-10 xs:top-0 top-10 size-10 hover:bg-transparent'
				>
					<svg
						width='41'
						height='40'
						viewBox='0 0 41 40'
						fill='none'
						className={`size-10 transition-all ${favorite ? 'fill-main' : 'fill-[#EEF2F5]'}`}
						xmlns='http://www.w3.org/2000/svg'
					>
						<path d='M3.79395 15.2283C3.79395 23.3333 10.4939 27.6517 15.3973 31.5183C17.1273 32.8817 18.7939 34.1667 20.4606 34.1667C22.1273 34.1667 23.7939 32.8833 25.5239 31.5167C30.4289 27.6533 37.1273 23.3333 37.1273 15.23C37.1273 7.12665 27.9606 1.37498 20.4606 9.16832C12.9606 1.37498 3.79395 7.12332 3.79395 15.2283Z' />
					</svg>
				</Button>
				<h2 className='font-bold text-xl mb-4 text-submuted'>
					{data.name} {data.secondName}
				</h2>
				<div className='flex items-center gap-4 flex-wrap mb-5'>
					<div className='bg-[#4DB9AB1F] text-[#4DB9AB] py-1 px-3 w-fit rounded-full'>{data.type}</div>
					<div className='flex items-center gap-1'>
						<Image src='/icons/star.svg' alt='star' width={20} height={20} />
						<p>
							Рейтинг: <span className='font-semibold'>{data.rating}/5</span>
						</p>
					</div>
				</div>
				<div className='mb-7'>
					<p className='text-submuted mb-2.5'>О психотерапевте</p>
					<div className='flex gap-5 text-submuted font-semibold flex-wrap'>
						<div className='flex gap-4 items-center'>
							<Image src='/icons/clockAbout.svg' alt='clock' width={33} height={33} />
							{data.about?.experience} лет опыта работы
						</div>
						<div className='flex gap-4 items-center'>
							<Image src='/icons/certificateAbout.svg' alt='clock' width={33} height={33} />
							{data.about?.certificate}
						</div>
						<div className='flex gap-4 items-center'>
							<Image src='/icons/coursesAbout.svg' alt='clock' width={33} height={33} />
							{data.about?.courses}
						</div>
					</div>
				</div>
				<div className='mb-6'>
					<p className='text-submuted mb-2.5'>Психологический подход</p>
					<div className='flex flex-wrap items-center gap-4'>
						{data.approach?.map((item, index) => (
							<div className='bg-[#F1F1F1] text-[#717171] py-1 px-3 w-fit rounded-full' key={index}>
								{item}
							</div>
						))}
					</div>
				</div>
				<div className='p-4 bg-[#F1F7FB] rounded-main'>
					<h3 className='font-semibold text-sm mb-2 text-submuted'>О себе</h3>
					<p className='font-normal text-submuted opacity-80 mb-1'>
						Lorem ipsum dolor sit amet consectetur. Lobortis maecenas porta porttitor nulla tortor aliquam. Amet vivamus erat eu leo mauris nec
						ultricies elit interdum. Placerat vestibulum et lacinia suscipit.{' '}
					</p>
					<Link href='' className='block text-end text-[#4DB9AB] hover:opacity-80 transition-opacity'>
						Подробнее
					</Link>
				</div>
			</div>
		</div>
	)
}
