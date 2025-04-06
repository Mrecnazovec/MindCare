import { cn } from '@/lib/utils'
import Image from 'next/image'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Checkbox } from '@/components/ui/Checkbox'
import { Label } from '@/components/ui/form-elements/Label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/RadioGroup'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/Select'
import { FilterTheme } from './CatalogFilterData'

export function CatalogFilter() {
	const router = useRouter()
	const pathname = usePathname()
	const searchParams = useSearchParams()

	const paramsType = searchParams.get('type')
	const paramsRole = searchParams.get('role')
	const paramsIsYoung = searchParams.get('isYoung')
	const paramsGender = searchParams.get('gender')
	const paramsTheme = searchParams.get('theme')
	const paramsApproach = searchParams.get('approach')
	const paramsFormat = searchParams.get('format')
	const paramsCountry = searchParams.get('country')

	const [type, setType] = useState<string>(paramsType || 'Индивидуальная')
	const [role, setRole] = useState<string>(paramsRole || 'Супервизор')
	const [isYoung, setIsYoung] = useState<boolean>(paramsIsYoung === 'true')
	const [gender, setGender] = useState<string>(paramsGender || 'Женщина')
	const [theme, setTheme] = useState<string>(paramsTheme || '')
	const [approach, setApproach] = useState<string>(paramsApproach || '')
	const [format, setFormat] = useState<string>(paramsFormat || 'Онлайн')
	const [country, setCountry] = useState<string>(paramsCountry || '')

	useEffect(() => {
		const queryParams = new URLSearchParams(window.location.search)
		queryParams.set('type', type)
		queryParams.set('role', role)
		queryParams.set('isYoung', String(isYoung))
		queryParams.set('gender', gender)
		queryParams.set('theme', theme)
		queryParams.set('approach', approach)
		queryParams.set('format', format)
		queryParams.set('country', country)
		router.push(`${pathname}?${queryParams.toString()}`, { scroll: false })
	}, [type, role, isYoung, gender, theme, approach, format, country])

	return (
		<div className='lg:col-span-2 col-span-1 p-5 rounded-main bg-white shadow space-y-3 h-fit lg:sticky top-10'>
			<div className='flex items-center gap-2 text-lg text-main font-semibold mb-3'>
				<Image src='/icons/filter.svg' alt='Фильтр' width={24} height={24} />
				Фильтр
			</div>
			<div className='xl:grid grid-cols-3 gap-1 bg-[#F2F6FA] p-1 rounded-[10px]  relative'>
				<button
					onClick={() => setType('Индивидуальная')}
					className={cn(
						'py-1 text-center col-span-2 max-xl:w-full bg-transparent text-muted-foreground cursor-pointer transition-all rounded-[10px]',
						`${type === 'Индивидуальная' && 'bg-main text-white shadow'}`
					)}
				>
					Индивидуальная
				</button>
				<button
					onClick={() => setType('Парная')}
					className={cn(
						'py-1 text-center col-span-1 max-xl:w-full bg-transparent text-muted-foreground cursor-pointer transition-all rounded-[10px]',
						`${type === 'Парная' && 'bg-main text-white shadow'}`
					)}
				>
					Парная
				</button>
			</div>
			<div className='xl:grid grid-cols-3 gap-1 bg-[#F2F6FA] p-1 rounded-[10px]  relative mb-5'>
				<button
					onClick={() => setRole('Супервизор')}
					className={cn(
						'py-1 text-center col-span-2 max-xl:w-full bg-transparent text-muted-foreground cursor-pointer transition-all rounded-[10px]',
						`${role === 'Супервизор' && 'bg-main text-white shadow'}`
					)}
				>
					Супервизор
				</button>
				<button
					onClick={() => setRole('Психолог')}
					className={cn(
						'py-1 text-center col-span-1 max-xl:w-full bg-transparent text-muted-foreground cursor-pointer transition-all rounded-[10px]',
						`${role === 'Психолог' && 'bg-main text-white shadow'}`
					)}
				>
					Психолог
				</button>
			</div>
			<div className='flex items-center space-x-2 mb-5'>
				<Checkbox checked={isYoung} onCheckedChange={() => setIsYoung(!isYoung)} id='isYoung' />
				<Label className='text-muted-foreground' htmlFor='isYoung'>
					Сессия для подростка (от 12 до 18 лет)
				</Label>
			</div>
			<div>
				<p className='text-muted-foreground mb-2'>Пол:</p>
				<RadioGroup onValueChange={(value) => setGender(value)} className='flex gap-4 max-xl:flex-col' defaultValue={gender}>
					<div className='flex items-center space-x-2 text-muted-foreground'>
						<RadioGroupItem value='Женщина' id='woman' />
						<Label htmlFor='woman'>Женщина</Label>
					</div>
					<div className='flex items-center space-x-2 text-muted-foreground'>
						<RadioGroupItem value='Мужчина' id='man' />
						<Label htmlFor='man'>Мужчина</Label>
					</div>
				</RadioGroup>
			</div>
			<div>
				<p className='text-muted-foreground mb-2'>О чём хотите поговорить?</p>
				<Select defaultValue={theme} onValueChange={(value) => setTheme(value)}>
					<SelectTrigger className='w-full'>
						<SelectValue placeholder='Выберите темы' />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectLabel>Темы для разговора</SelectLabel>
							{FilterTheme.map((item, index) => (
								<SelectItem key={index} value={item}>
									{item}
								</SelectItem>
							))}
						</SelectGroup>
					</SelectContent>
				</Select>
			</div>
			<div>
				<p className='text-muted-foreground mb-2'>Психологический подход</p>
				<Select defaultValue={approach} onValueChange={(value) => setApproach(value)}>
					<SelectTrigger className='w-full'>
						<SelectValue placeholder='Неважен' />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectLabel>Подходы</SelectLabel>
							<SelectItem value='empty'>Неважен</SelectItem>
							<SelectItem value='гештальт-подход'>Гештальт-подход</SelectItem>
							<SelectItem value='психоаналитическая терапия'>Психоаналитическая терапия</SelectItem>
							<SelectItem value='личностно-центрированная терапия'>Личностно-центрированная терапия</SelectItem>
							<SelectItem value='системная семейная терапия'>Системная семейная терапия</SelectItem>
							<SelectItem value='арт-терапия'>Арт-терапия</SelectItem>
							<SelectItem value='эриксоновский гипноз'>Эриксоновский гипноз</SelectItem>
							<SelectItem value='интегративный подход'>Интегративный подход</SelectItem>
							<SelectItem value='КПТ - когнитивно-поведенческая терапия'>КПТ - когнитивно-поведенческая терапия</SelectItem>
							<SelectItem value='экзистенциальная психотерапия'>Экзистенциальная психотерапия</SelectItem>
							<SelectItem value='транзактный анализ'>Транзактный анализ</SelectItem>
							<SelectItem value='психорама'>Психорама</SelectItem>
							<SelectItem value='позитивная психотерапия'>Позитивная психотерапия</SelectItem>
							<SelectItem value='кризисное консультирование'>Кризисное консультирование</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>
			</div>
			<div className='xl:grid grid-cols-3 gap-1 bg-[#F2F6FA] p-1 rounded-[10px]  relative mb-5'>
				<button
					onClick={() => setFormat('Онлайн')}
					className={cn(
						'py-1 text-center col-span-2 max-xl:w-full bg-transparent text-muted-foreground cursor-pointer transition-all rounded-[10px]',
						`${format === 'Онлайн' && 'bg-main text-white shadow'}`
					)}
				>
					Онлайн
				</button>
				<button
					onClick={() => setFormat('Оффлайн')}
					className={cn(
						'py-1 text-center col-span-1 max-xl:w-full bg-transparent text-muted-foreground cursor-pointer transition-all rounded-[10px]',
						`${format === 'Оффлайн' && 'bg-main text-white shadow'}`
					)}
				>
					Оффлайн
				</button>
			</div>

			<div>
				<p className='text-muted-foreground mb-2'>Страна</p>
				<Select defaultValue={country} onValueChange={(value) => setCountry(value)}>
					<SelectTrigger className='w-full'>
						<SelectValue placeholder='Выберите страну' />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectLabel>Страны</SelectLabel>
							<SelectItem value='Узбекистан'>Узбекистан</SelectItem>
							<SelectItem value='Россия'>Россия</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>
			</div>
		</div>
	)
}
