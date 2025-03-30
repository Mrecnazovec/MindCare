'use client'

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/Breadcrumb'
import { Container } from '@/components/ui/Container'
import { Title } from '@/components/ui/Title'
import { CatalogFilter } from './catalog-elements/CatalogFilter'
import { CatalogList } from './catalog-elements/CatalogList'

export function Catalog() {
	return (
		<div className='bg-[#F1F7FB]'>
			<Container>
				<Breadcrumb className='mb-4'>
					<BreadcrumbList>
						<BreadcrumbItem>
							<BreadcrumbLink href='/'>Главная</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator>/</BreadcrumbSeparator>
						<BreadcrumbItem>
							<BreadcrumbPage>Каталог психологов</BreadcrumbPage>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>
				<Title className='mb-8'>
					<Title.H2>
						Выберите <Title.Span>специалиста</Title.Span>
					</Title.H2>
				</Title>
				<div className='grid md:grid-cols-5 grid-cols-1 gap-10'>
					<CatalogFilter />
					<CatalogList />
				</div>
			</Container>
		</div>
	)
}
