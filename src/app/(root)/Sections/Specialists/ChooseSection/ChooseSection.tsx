import { Title } from '@/components/ui/Title'
import Image from 'next/image'

export function ChooseSection() {
	return (
		<div className='rounded-[20px] w-full sm:p-12 p-6 bg-[#ECF4FA]'>
			<Title className='mb-4'>
				<Title.H2>
					Как мы <Title.Span>отбираем</Title.Span> психолога?
				</Title.H2>
				<Title.P>Только 20% психологов попадает в нашу базу!</Title.P>
			</Title>
			<h3 className='font-extrabold text-xl text-center sm:mb-12 mb-6'>Мы проверяем:</h3>

			<div className='grid lg:grid-cols-3 text-center gap-7'>
				<div className='rounded-[20px] bg-white p-7 flex flex-col items-center justify-center gap-2'>
					<Image src='/icons/mdi_certificate.svg' alt='certificate' width={65} height={65} />
					<h4 className='font-bold text-2xl'>Образование</h4>
					<p className='text-muted-foreground text-center text-sm '>
						Изучаем путь специалиста в образовании (курсы, направление в вузе). Обязательно документов подтверждение
					</p>
				</div>
				<div className='rounded-[20px] bg-white p-7 flex flex-col items-center justify-center gap-2'>
					<Image src='/icons/clock.svg' alt='clock' width={65} height={65} />
					<h4 className='font-bold text-2xl'>Опыт работы</h4>
					<p className='text-muted-foreground text-center text-sm '>Узнаем сколько клиентов, сколько часов проработанной консультации и супервизии</p>
				</div>
				<div className='rounded-[20px] bg-white p-7 flex flex-col items-center justify-center gap-2'>
					<Image src='/icons/pencil.svg' alt='pencil' width={65} height={65} />
					<h4 className='font-bold text-2xl'>Вводный сеанс</h4>
					<p className='text-muted-foreground text-center text-sm '>
						Наши специалисты - психологи с опытом более 7 лет проводят собеседование, чтобы понять квалификацию специалиста
					</p>
				</div>
			</div>
		</div>
	)
}
