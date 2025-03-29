import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/Accordion'
import { Container } from '@/components/ui/Container'
import { Title } from '@/components/ui/Title'
import Image from 'next/image'
import { QanswData } from './QanswData'

export function Qansw() {
	return (
		<Container className='mb-14'>
			<Title className='mb-14'>
				<Title.H2>
					Часто задаваемые <Title.Span>вопросы</Title.Span>
				</Title.H2>
				<Title.P>
					Lorem ipsum dolor sit amet consectetur. Malesuada pharetra orci gravida fames eu semper sed amet morbi. Varius pretium in aliquam laoreet
					felis.{' '}
				</Title.P>
			</Title>

			<div className='flex justify-between gap-10'>
				<Accordion type='single' collapsible className='xl:w-3/4 lg:w-1/2 max-lg:w-full space-y-3' defaultValue='item-1'>
					{QanswData.map((item, index) => (
						<AccordionItem
							key={index}
							value={`item-${index + 1}`}
							className='[&[data-state=open]]:bg-[#F1F7FB] rounded-main px-7 transition-all shadow-none border-[3px] border-[#EAF3F9] last:border-[3px]'
						>
							<AccordionTrigger className='hover:no-underline xs:text-xl text-sm font-semibold cursor-pointer'>{item.trigger}</AccordionTrigger>
							<AccordionContent className='xs:ml-2 xs:text-lg text-sm text-muted-foreground'>{item.content}</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
				<Image
					src='/images/Qanswer.png'
					alt='Картинка'
					width={535}
					height={535}
					className='xl:w-1/3 lg:w-1/2 lg:flex hidden max-w-[535px] max-h-[535px]'
				/>
			</div>
		</Container>
	)
}
