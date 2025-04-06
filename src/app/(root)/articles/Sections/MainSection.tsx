import { Card } from '@/components/ui/Card'
import Link from 'next/link'

export function MainSection() {
	return (
		<div className='flex gap-6 max-lg:flex-col mb-10'>
			<Link href='' className='lg:w-full'>
				<Card src='/images/articles-0.png' alt='Гармония в отношениях' height={370} width={678} percentage={30} className='w-full'>
					<div className='text-white'>
						<h2 className='font-bold sm:text-2xl'>Гармония в отношениях. Как ее достичь?</h2>
						<p className='text-sm line-clamp-1'>Lorem ipsum dolor sit amet consectetur. Lobortis maecenas Lorem ipsum dolor sit </p>
					</div>
				</Card>
				<div className='flex items-center gap-2.5 text-muted-foreground mt-2.5 flex-wrap'>
					<p>12.03.2025</p>
					<p>Психотерапия</p>
					<p>Саморазвитие</p>
				</div>
			</Link>
			<Link href='' className='lg:w-full'>
				<Card src='/images/articles-0.png' alt='Гармония в отношениях' height={370} width={678} percentage={30} className='w-full'>
					<div className='text-white'>
						<h2 className='font-bold sm:text-2xl'>Гармония в отношениях. Как ее достичь?</h2>
						<p className='text-sm line-clamp-1'>Lorem ipsum dolor sit amet consectetur. Lobortis maecenas Lorem ipsum dolor sit </p>
					</div>
				</Card>
				<div className='flex items-center gap-2.5 text-muted-foreground mt-2.5 flex-wrap'>
					<p>12.03.2025</p>
					<p>Психотерапия</p>
					<p>Саморазвитие</p>
				</div>
			</Link>
		</div>
	)
}
