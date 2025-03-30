import { PUBLIC_URL } from '@/config/url.config'

export interface ListItems {
	title: string
	href: string
}

export const Direction = [
	{
		title: 'Психотерапевт',
		href: '',
	},
	{
		title: 'Семейный психолог',
		href: '',
	},
	{
		title: 'Подростковый психолог',
		href: '',
	},
]

export const Education = [
	{
		title: 'Книги',
		href: '',
	},
	{
		title: 'Словарь',
		href: '',
	},
	{
		title: 'Методики',
		href: '',
	},
]

export const ForClient = [
	{
		title: 'Направления',
		href: '',
	},
	{
		title: 'Каталог психологов',
		href: PUBLIC_URL.catalog(),
	},
	{
		title: 'Сертификат на консультацию',
		href: '',
	},
]

export const ForPsychologist = [
	{
		title: 'Супервизия',
		href: '',
	},
	{
		title: 'Как зарегистрироваться?',
		href: '',
	},
	{
		title: 'Тарифы',
		href: '',
	},
]

export const Interesting = [
	{
		title: 'Статьи',
		href: '',
	},
	{
		title: 'Кейсы',
		href: '',
	},
	{
		title: 'Интервью',
		href: '',
	},
	{
		title: 'Психологические тесты',
		href: '',
	},
]

export const AboutUs = [
	{
		title: 'Команда',
		href: '',
	},
	{
		title: 'Контакты',
		href: '',
	},
	{
		title: 'Частые вопросы',
		href: '',
	},
]
