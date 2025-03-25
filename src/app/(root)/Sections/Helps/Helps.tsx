import { Card } from '@/components/ui/Card'
import { Title } from '@/components/ui/Title'
import { HelpsCarousel } from './HelpsCarousel'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export function Helps() {
	return (
		<div className='flex flex-col items-center justify-center gap-8'>
			<Title className='mb-6'>
				<Title.H2>
					С чем <Title.Span>помогают</Title.Span> наши психологи
				</Title.H2>
				<Title.P>
					Lorem ipsum dolor sit amet consectetur. Malesuada pharetra orci gravida fames eu semper sed amet morbi. Varius pretium in aliquam laoreet
					felis.{' '}
				</Title.P>
			</Title>
			<HelpsCarousel />
			<Link href=''>
				<Button size='main' variant='primary'>
					Посмотреть все
				</Button>
			</Link>
		</div>
	)
}
