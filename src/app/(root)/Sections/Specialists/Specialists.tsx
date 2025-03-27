import { Container } from '@/components/ui/Container'
import { Title } from '@/components/ui/Title'
import { Button } from '@/components/ui/Button'
import { SpecialistsList } from './SpecialistsList'
import { TestSection } from './Test/TestSection'
import { Choose } from './Choose/Choose'

export function Specialists() {
	return (
		<div className='bg-linear-to-b from-[#EFF6FB] to-transparent pt-14'>
			<Container className='flex flex-col items-center justify-center'>
				<Title className='mb-14'>
					<Title.H2>Наши специалисты</Title.H2>
					<Title.P>
						Lorem ipsum dolor sit amet consectetur. Malesuada pharetra orci gravida fames eu semper sed amet morbi. Varius pretium in aliquam laoreet
						felis.
					</Title.P>
				</Title>
				<SpecialistsList />
				<Button variant='primary' size='main' className='mb-32'>
					Посмотреть все
				</Button>
				<TestSection />
				<Choose />
			</Container>
		</div>
	)
}
