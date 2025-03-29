'use client'

import { AboutSection } from './Sections/Specialists/About/AboutSection'
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
