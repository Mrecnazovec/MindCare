'client side'

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/Breadcrumb'
import { Container } from '@/components/ui/Container'
import { Title } from '@/components/ui/Title'
import { MainSection } from './Sections/MainSection'

export function Articles() {
	return (
		<Container>
			<Breadcrumb className='mb-4'>
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink href='/'>Главная</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator>/</BreadcrumbSeparator>
					<BreadcrumbItem>
						<BreadcrumbPage>Статьи</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>
			<Title className='mb-10'>
				<Title.H2>Статьи</Title.H2>
				<Title.P>
					Lorem ipsum dolor sit amet consectetur. Malesuada pharetra orci gravida fames eu semper sed amet morbi. Varius pretium in aliquam laoreet
					felis.{' '}
				</Title.P>
			</Title>
			<MainSection />
			
		</Container>
	)
}
