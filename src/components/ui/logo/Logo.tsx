import { PUBLIC_URL } from '@/config/url.config'
import Image from 'next/image'
import Link from 'next/link'

export function Logo() {
	return (
		<Link href={PUBLIC_URL.home()} className='text-main flex gap-1.5 items-center justify-center text-2xl hover:opacity-75 transition-opacity self-start'>
			<Image src='/images/logo.png' alt='logo' width={80} height={80} />
			MindCare
		</Link>
	)
}
