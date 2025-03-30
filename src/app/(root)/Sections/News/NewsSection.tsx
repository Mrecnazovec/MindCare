import { Container } from '@/components/ui/Container'
import { Title } from '@/components/ui/Title'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { NewsCarousel } from './NewsCarousel'
import { AboutSection } from './about/AboutSection'
import { AdditionSection } from './addition/AdditionSection'

export function NewsSection() {
	return (
		<div className='bg-linear-to-b from-[#E6F5F3] to-transparent py-14'>
			<Container className='flex items-center justify-center flex-col gap-12'>
				<Title>
					<Title.H2>Новости</Title.H2>
					<Title.P>
						Lorem ipsum dolor sit amet consectetur. Malesuada pharetra orci gravida fames eu semper sed amet morbi. Varius pretium in aliquam laoreet
						felis.{' '}
					</Title.P>
				</Title>
				<NewsCarousel />
				<Link href='' className='mb-20'>
					<Button size='main' variant='primary'>
						Посмотреть все
					</Button>
				</Link>
				<AboutSection />
				<AdditionSection />
			</Container>
		</div>
	)
}
