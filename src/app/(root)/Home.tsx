'use client'

import { FormSection } from "./sections/form-section/FormSection"
import { Helps } from "./sections/helps/Helps"
import HeroSection from "./sections/Hero"
import { NewsSection } from "./sections/news/NewsSection"
import { Qansw } from "./sections/qansw/Qansw"
import { Specialists } from "./sections/specialists/Specialists"



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
