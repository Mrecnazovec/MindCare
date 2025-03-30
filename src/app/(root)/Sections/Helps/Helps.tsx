import { Title } from '@/components/ui/Title'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { HelpsCarousel } from './HelpsCarousel'

export function Helps() {
	return (
		<Container>
			<div className='flex flex-col items-center justify-center gap-8 mb-14'>
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
		</Container>
	)
}
