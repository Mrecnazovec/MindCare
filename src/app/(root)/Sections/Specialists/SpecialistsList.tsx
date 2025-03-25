import Link from 'next/link'
import { SpecialistsData } from './SpecialistData'
import { Card } from '@/components/ui/Card'
import { ArrowRight } from 'lucide-react'

export function SpecialistsList() {
	return (
		<div className='grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-6 mb-14'>
			{SpecialistsData.map((item, index) => (
				<Link className='flex items-center justify-center' key={index} href={item.id}>
					<Card src={item.src} alt={`Специалист ${item.name}`} width={300} height={400} percentage={50}>
						<div className='text-white w-full pr-4 text-lg space-y-1'>
							<div>
								<div className='w-full flex items-center justify-between'>
									<p>{item.name}</p>
									<ArrowRight />
								</div>
								<p className='text-[12px] font-medium'>{item.job}</p>
							</div>
							<div className='flex justify-between'>
								<div>
									<p>Опыт:</p>
									<p className='opacity-80 text-[12px]'>{item.experience}</p>
								</div>
								<div>
									<p>Приём</p>
									<p className='opacity-80 text-[12px]'>{item.appoint}</p>
								</div>
							</div>
							<div>
								<p>С чем работает</p>
								<p className='opacity-80 text-[12px]'>{item.detail}</p>
							</div>
						</div>
					</Card>
				</Link>
			))}
		</div>
	)
}
