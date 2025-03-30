import { SpecialistsData } from '@/data/SpecialistData'
import { CatalogItem } from './CatalogItem'
import { useSearchParams } from 'next/navigation'

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

interface CatalogListProps {
	data: Specialist[]
}

export function CatalogList({ data }: CatalogListProps) {
	const perPage = 2
	const searchParams = useSearchParams()
	const paramsPage = Number(searchParams.get('page')) || 1

	const startIndex = (paramsPage - 1) * perPage
	const endIndex = startIndex + perPage
	const paginatedData = data.slice(startIndex, endIndex)

	return (
		<div className='lg:col-span-3'>
			{paginatedData.map((item, index) => (
				<CatalogItem key={index} data={item} />
			))}
		</div>
	)
}
