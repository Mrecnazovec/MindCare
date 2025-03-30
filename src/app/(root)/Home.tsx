'use client'

import { Helps } from './sections/helps/Helps'
import HeroSection from './sections/Hero'
import { Specialists } from './sections/specialists/Specialists'
import { NewsSection } from './sections/news/NewsSection'
import { Qansw } from './sections/qansw/Qansw'
import { FormSection } from './sections/form-section/FormSection'

export function Home() {
	return (
		<div>
			<HeroSection />
			<Helps />
			<Specialists />
			<NewsSection />
			<Qansw />
			<FormSection />
		</div>
	)
}
