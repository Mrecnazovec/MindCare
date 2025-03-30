'use client'

import { FormSection } from "./Sections/form-section/FormSection"
import { Helps } from "./Sections/Helps/Helps"
import HeroSection from "./Sections/Hero"
import { NewsSection } from "./Sections/news/NewsSection"
import { Qansw } from "./Sections/qansw/Qansw"
import { Specialists } from "./Sections/specialists/Specialists"





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
