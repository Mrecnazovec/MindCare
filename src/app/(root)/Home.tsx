'use client'

import { FormSection } from './Sections/form-section/FormSection'
import { Helps } from './Sections/Helps/Helps'
import HeroSection from './Sections/Hero'
import { NewsSection } from './Sections/News/NewsSection'
import { Qansw } from './Sections/Qansw/Qansw'
import { Specialists } from './Sections/Specialists/Specialists'

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
