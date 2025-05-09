'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { AboutData } from './AboutData'

export function AboutCarousel() {
	const [activeIndex, setActiveIndex] = useState(0)

	const handleSwitch = (index: number) => {
		setActiveIndex(index)
	}

	const handleNext = () => {
		setActiveIndex((prev) => (prev + 1) % AboutData.length)
	}

	const handlePrev = () => {
		setActiveIndex((prev) => (prev - 1 + AboutData.length) % AboutData.length)
	}

	const handleSwipe = (offsetX: number) => {
		if (offsetX > 100) {
			handlePrev()
		} else if (offsetX < -100) {
			handleNext()
		}
	}

	return (
		<div className='relative w-full max-w-5xl mx-auto h-[650px] sm:h-[450px] flex items-center justify-center overflow-hidden'>
			{AboutData.map((item, index) => {
				const isActive = index === activeIndex
				const offset = index - activeIndex

				return (
					<motion.div
						key={index}
						className='absolute w-[100%] lg:w-[750px] sm:p-4 rounded-2xl'
						style={{
							zIndex: AboutData.length - Math.abs(offset),
						}}
						drag={isActive ? 'x' : false}
						dragConstraints={{ left: 0, right: 0 }}
						onDragEnd={(_, info) => handleSwipe(info.offset.x)}
						animate={{
							scale: isActive ? 1 : 0.9,
							opacity: isActive ? 1 : 0.5,
							x: 0,
							y: Math.abs(offset) * 5,
						}}
						transition={{
							type: 'spring',
							stiffness: 300,
							damping: 30,
						}}
					>
						<div className='relative bg-gradient-to-br from-main from-30% to-second text-white p-6 pt-10 rounded-2xl shadow-xl text-center'>
							<div className='absolute -top-14 left-1/2 transform -translate-x-1/2 bg-main p-3 rounded-full'>
								<Image src={item.src} alt={item.name} className='w-24 h-24 rounded-full object-cover shadow-md' width={96} height={96} />
							</div>
							<h3 className='mt-12 text-xl font-bold'>{item.name}</h3>
							<p className='text-sm'>{item.job}</p>
							<div className='flex justify-center mt-2 space-x-1'>
								{[...Array(5)].map((_, i) => (
									<span key={i} className={`text-2xl ${i + 1 <= item.rating ? 'text-white' : 'text-white/30'}`}>
										★
									</span>
								))}
							</div>
							<p className='mt-4 text-white/90'>{item.text}</p>
						</div>
					</motion.div>
				)
			})}

			{/* Навигация */}
			<div className='absolute bottom-1 flex gap-3'>
				{AboutData.map((item, index) => (
					<button
						key={index}
						onClick={() => handleSwitch(index)}
						className={`bg-main text-white transition-all duration-300 w-3 h-3 rounded-full cursor-pointer ${
							index !== activeIndex ? 'bg-main/50' : 'w-5'
						} `}
					></button>
				))}
			</div>
		</div>
	)
}
