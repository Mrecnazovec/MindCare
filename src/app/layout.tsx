import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'
import './globals.css'
import { SITE_AUTHOR, SITE_DESCRIPTION, SITE_KEYWORDS, SITE_NAME } from '@/constants/seo-constants'
import { Providers } from './providers'

const notoSans = Noto_Sans({
	variable: '--font-noto-sans',
	subsets: ['latin'],
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
			<body className={`${notoSans.variable} antialiased`}>
				<h1 className='sr-only'>Mind Care</h1>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
