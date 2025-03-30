import { Catalog } from './Catalog'
import { Suspense } from 'react'

export default function CatalogPage() {
	return (
		<Suspense>
			<Catalog />
		</Suspense>
	)
}
