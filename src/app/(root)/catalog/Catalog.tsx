'use client'

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/Breadcrumb'
import { Container } from '@/components/ui/Container'
import { Title } from '@/components/ui/Title'
import { CatalogFilter } from './catalog-elements/CatalogFilter'
import { CatalogList } from './catalog-elements/catalog-list/CatalogList'
import { Suspense, useEffect, useState } from 'react'
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/Pagination'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { SpecialistsData } from '@/data/SpecialistData'

export function Catalog() {
	const data = SpecialistsData

	const router = useRouter()
	const pathname = usePathname()
	const searchParams = useSearchParams()

	const paramsPage = Number(searchParams.get('page'))

	const [page, setPage] = useState(paramsPage || 1)
	const totalPages = data.length / 2

	useEffect(() => {
		const queryParams = new URLSearchParams(window.location.search)
		queryParams.set('page', String(page))
		router.push(`${pathname}?${queryParams.toString()}`, { scroll: false })
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}, [page])

	useEffect(() => {
		if (page <= 0) setPage(1)
		if (page >= totalPages) setPage(totalPages)
	}, [page])

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
				<div className='grid lg:grid-cols-5 grid-cols-1 gap-10'>
					<Suspense>
						<CatalogFilter />
					</Suspense>
					<CatalogList data={data} />
				</div>
				{totalPages > 0 && (
					<Pagination className='mt-8'>
						<PaginationContent>
							<PaginationItem>
								<PaginationPrevious className='bg-transparent border-0 shadow-none' href='' onClick={() => setPage(page - 1)} />
							</PaginationItem>
							{Array.from({ length: totalPages }, (_, i) => (
								<PaginationItem key={i}>
									<PaginationLink href='' onClick={() => setPage(i + 1)} isActive={i + 1 === page}>
										{i + 1}
									</PaginationLink>
								</PaginationItem>
							))}
							<PaginationItem>
								<PaginationNext className='bg-transparent border-0 shadow-none' href='' onClick={() => setPage(page + 1)} />
							</PaginationItem>
						</PaginationContent>
					</Pagination>
				)}
			</Container>
		</div>
	)
}
