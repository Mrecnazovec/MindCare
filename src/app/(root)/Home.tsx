'use client'

import { Helps } from './Sections/Helps/Helps'
import HeroSection from './Sections/Hero'
import { Specialists } from './Sections/Specialists/Specialists'

export function Home() {
	return (
		<div>
			<HeroSection />
			<Helps />
			<Specialists />
		</div>
	)
}
