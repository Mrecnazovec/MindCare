'use client'

import { AboutSection } from './Sections/About/AboutSection'
import { Helps } from './Sections/Helps/Helps'
import HeroSection from './Sections/Hero'
import { Specialists } from './Sections/Specialists/Specialists'

export function Home() {
	return (
		<div>
			<HeroSection />
			<Helps />
			<Specialists />
			<AboutSection />
		</div>
	)
}
