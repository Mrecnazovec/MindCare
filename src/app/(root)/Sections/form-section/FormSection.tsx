import { Container } from '@/components/ui/Container'
import Image from 'next/image'
import Link from 'next/link'
import { ClaimForm } from './ClaimForm'

export function FormSection() {
	return (
		<Container className='grid lg:grid-cols-2 gap-10 mb-20'>
			<div>
				<h2 className='text-3xl font-semibold mb-3 text-[#242424]'>Остались вопросы?</h2>
				<p className='text-lg mb-7 font-normal text-muted-foreground'>Если у Вас остались вопросы, напишите нам и мы свяжемся с Вами</p>
				<div className='space-y-6'>
					<Link href='' className='flex items-center gap-4 hover:opacity-90 transition-opacity w-fit'>
						<div className='rounded-full size-11 bg-[#45A3EB30] flex items-center justify-center'>
							<Image src='/icons/inst.svg' alt='instagram' width={24} height={24} />
						</div>
						<p className='text-lg text-muted-foreground font-medium'>@mindcare</p>
					</Link>
					<Link href='' className='flex items-center gap-4 hover:opacity-90 transition-opacity w-fit'>
						<div className='rounded-full size-11 bg-[#45A3EB30] flex items-center justify-center'>
							<Image src='/icons/tg.svg' alt='instagram' width={24} height={24} />
						</div>
						<p className='text-lg text-muted-foreground font-medium'>@mindcare24-7</p>
					</Link>
					<Link href='' className='flex items-center gap-4 hover:opacity-90 transition-opacity w-fit'>
						<div className='rounded-full size-11 bg-[#45A3EB30] flex items-center justify-center'>
							<Image src='/icons/email.svg' alt='instagram' width={24} height={24} />
						</div>
						<p className='text-lg text-muted-foreground font-medium'>mindcare@mail.ru</p>
					</Link>
					<Link href='' className='flex items-center gap-4 hover:opacity-90 transition-opacity w-fit'>
						<div className='rounded-full size-11 bg-[#45A3EB30] flex items-center justify-center'>
							<Image src='/icons/tel.svg' alt='instagram' width={24} height={24} />
						</div>
						<p className='text-lg text-muted-foreground font-medium'>+998 90 123 45 67</p>
					</Link>
				</div>
			</div>
			<ClaimForm />
		</Container>
	)
}
