import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { SITE_AUTHOR, SITE_DESCRIPTION, SITE_KEYWORDS, SITE_NAME } from '@/constants/seo-constants'
import { Providers } from './providers'
import NextTopLoader from 'nextjs-toploader'

const poppons = Poppins({
	variable: '--font-poppins',
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
	title: {
		absolute: SITE_NAME,
		template: `%s | ${SITE_NAME}`,
	},
	description: SITE_DESCRIPTION,
	keywords: SITE_KEYWORDS,
	authors: SITE_AUTHOR,
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${poppons.variable} antialiased`}>
				<NextTopLoader showSpinner={false} />
				<h1 className='sr-only'>Mind Care</h1>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
