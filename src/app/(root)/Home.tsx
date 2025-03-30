'use client'

import HeroSection from '@/app/(root)/sections/Hero'
import { Helps } from '@/app/(root)/sections/helps/Helps'
import { Specialists } from '@/app/(root)/sections/specialists/Specialists'
import { NewsSection } from '@/app/(root)/sections/news/NewsSection'
import { Qansw } from '@/app/(root)/sections/qansw/Qansw'
import { FormSection } from '@/app/(root)/sections/form-section/FormSection'

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
