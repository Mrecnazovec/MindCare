'use client'

import { Helps } from './Sections/Helps/Helps'
import HeroSection from './Sections/Hero'
import { Specialists } from './Sections/Specialists/Specialists'
import { NewsSection } from './Sections/News/NewsSection'
import { Qansw } from './Sections/Qansw/Qansw'

export function Home() {
	return (
		<div>
			<HeroSection />
			<Helps />
			<Specialists />
			<NewsSection />
			<Qansw />
		</div>
	)
}
