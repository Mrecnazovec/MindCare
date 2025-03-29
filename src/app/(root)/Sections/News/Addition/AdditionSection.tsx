import { Title } from '@/components/ui/Title'
import Image from 'next/image'
import Link from 'next/link'

export function AdditionSection() {
	return (
		<div className='w-full'>
			<Title className='mb-14'>
				<Title.H2>
					На <Title.Span>нашем сайте</Title.Span> также...
				</Title.H2>
				<Title.P>
					Lorem ipsum dolor sit amet consectetur. Malesuada pharetra orci gravida fames eu semper sed amet morbi. Varius pretium in aliquam laoreet
					felis.{' '}
				</Title.P>
			</Title>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-7'>
				<Link href='' className='hover:opacity-90 transition-opacity'>
					<div className='p-12 text-white font-bold text-4xl relative xs:bg-second bg-main rounded-main'>
						<p>Тесты</p>
						<Image src='/icons/additionalSection_tests.svg' alt='test icon' width={150} height={150} className='absolute -top-8 right-7' />
					</div>
				</Link>
				<Link href='' className='hover:opacity-90 transition-opacity'>
					<div className='p-12 text-white font-bold text-4xl relative xs:bg-main bg-second rounded-main'>
						<p>Статьи</p>
						<Image src='/icons/additionalSection_doc.svg' alt='test icon' width={150} height={150} className='absolute -top-0 right-7' />
					</div>
				</Link>
				<Link href='' className='hover:opacity-90 transition-opacity'>
					<div className='p-12 text-white font-bold text-4xl relative bg-main rounded-main'>
						<p>Интервью</p>
						<Image src='/icons/additionalSection_message.svg' alt='test icon' width={150} height={150} className='absolute -top-0 right-7' />
					</div>
				</Link>
				<Link href='' className='hover:opacity-90 transition-opacity'>
					<div className='p-12 text-white font-bold text-4xl relative bg-second rounded-main'>
						<p>Истории</p>
						<Image src='/icons/additionalSection_history.svg' alt='test icon' width={150} height={150} className='absolute -top-0 right-7' />
					</div>
				</Link>
			</div>
		</div>
	)
}
