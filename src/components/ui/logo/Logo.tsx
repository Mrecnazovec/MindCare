import { PUBLIC_URL } from '@/config/url.config'
import Image from 'next/image'
import Link from 'next/link'

export function Logo() {
	return (
		<Link
			href={PUBLIC_URL.home()}
			className='text-main flex items-center justify-center text-4xl font-semibold hover:opacity-75 transition-opacity self-start'
		>
			<Image src='/icons/Logo.png' alt='logo' width={55} height={55} className='mr-1.5' />
			Mind<span className='text-second'>Care</span>
		</Link>
	)
}
