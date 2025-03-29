import { Container } from '@/components/ui/Container'
import { Title } from '@/components/ui/Title'
import { AboutCarousel } from './AboutCarousel'

export function AboutSection() {
	return (
		<Container className='flex flex-col items-center justify-center mb-20 sm:p-12 pt-6'>
			<Title>
				<Title.H2>
					Что говорят <Title.Span>о нас</Title.Span>
				</Title.H2>
				<Title.P>
					Lorem ipsum dolor sit amet consectetur. Malesuada pharetra orci gravida fames eu semper sed amet morbi. Varius pretium in aliquam laoreet
					felis.{' '}
				</Title.P>
			</Title>
			<AboutCarousel />
		</Container>
	)
}
