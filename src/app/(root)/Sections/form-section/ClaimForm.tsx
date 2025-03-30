import { Button } from '@/components/ui/Button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form-elements/Form'
import { Input } from '@/components/ui/form-elements/Input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/Select'
import { Textarea } from '@/components/ui/Textarea'
import { validPhone } from '@/shared/regex'
import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import axios from 'axios'
import toast from 'react-hot-toast'

interface IClaimInput {
	name: string
	tel: string
	interests: string
	message: string
}

export function ClaimForm() {
	const [isAnon, setIsAnon] = useState<boolean>(false)

	const form = useForm<IClaimInput>({
		mode: 'onChange',
		defaultValues: {
			name: '',
			tel: '',
			interests: '',
			message: '',
		},
	})

	const { control, handleSubmit, setValue } = form

	useEffect(() => {
		if (isAnon) {
			setValue('name', 'Аноним')
			setValue('tel', '+00000000000')
		}
		if (!isAnon) {
			setValue('name', '')
			setValue('tel', '')
		}
	}, [isAnon, setValue])

	const sendToTelegram = async (data: IClaimInput) => {
		const chatId = '-1002530828160'
		const token = '7628175184:AAFg9qjBIBT3TA3FJ0-m0Ll0rOSegc7DSuE'
		const url = `https://api.telegram.org/bot${token}/sendMessage`

		const message = `
			📩 Новая заявка:
		👤 Имя: ${data.name}
		📞 Телефон: ${data.tel}
		💡 Интересует: ${data.interests}
		💬 Сообщение: ${data.message}
		`

		try {
			const response = await axios.post(url, {
				chat_id: chatId,
				text: message,
				parse_mode: 'Markdown',
			})
			toast.success('Сообщение отправлено')
		} catch (error) {
			toast.error('Ошибка при отправке сообщения')
		}
	}

	const onSubmit: SubmitHandler<IClaimInput> = (data) => {
		// alert(`Имя: ${data.name}, Телефон: ${data.tel}, Интересует: ${data.interests}, Сообщение: ${data.message}`)
		sendToTelegram(data)
		form.reset()
	}
	return (
		<div className='w-full'>
			<h2 className='text-2xl font-semibold mb-3 text-[#242424] text-center'>Заполните форму</h2>
			<Form {...form}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<FormField
						control={control}
						name='name'
						rules={{ required: 'Имя обязательно' }}
						render={({ field }) => (
							<FormItem>
								<FormLabel className='text-muted-foreground text-lg'>Имя</FormLabel>
								<FormControl>
									<Input
										className='rounded-[15px] border-2 border-[#E4E5E5] placeholder:text:[#E2E2E2] h-15 text-lg mb-4'
										placeholder={isAnon ? 'Аноним' : 'Введите имя'}
										disabled={isAnon}
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={control}
						name='tel'
						rules={{ required: 'Телефон обязателен', pattern: { value: validPhone, message: 'Введите корректный номер телефона' } }}
						render={({ field }) => (
							<FormItem>
								<FormLabel className='text-muted-foreground text-lg'>Номер телефона</FormLabel>
								<FormControl>
									<Input
										className='rounded-[15px] border-2 border-[#E4E5E5] placeholder:text:[#E2E2E2] h-15 text-lg mb-4'
										placeholder='Введите номер телефона'
										disabled={isAnon}
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={control}
						name='interests'
						rules={{ required: 'Выберите вариант ответа' }}
						render={({ field }) => (
							<FormItem>
								<FormLabel className='text-muted-foreground text-lg'>Что вас интересует?</FormLabel>
								<Select
									onValueChange={(value) => {
										field.onChange(value)
										setIsAnon(value === 'Анонимный вопрос')
									}}
									defaultValue={field.value}
								>
									<FormControl>
										<SelectTrigger className='w-full rounded-[15px] border-2 border-[#E4E5E5] placeholder:text:[#E2E2E2] data-[size=default]:h-15 text-lg mb-4 overflow-hidden whitespace-nowrap text-ellipsis'>
											<SelectValue placeholder='Выберите из списка' />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										<SelectItem value='Подбор психолога'>Подбор психолога</SelectItem>
										<SelectItem value='Хочу зарегистрироваться как психолог'>Хочу зарегистрироваться как психолог</SelectItem>
										<SelectItem value='Есть история для статьи на сайт'>Есть история для статьи на сайт</SelectItem>
										<SelectItem value='Анонимный вопрос'>
											Анонимный вопрос <span className='text-muted-foreground'>(Контакты необязательно)</span>
										</SelectItem>
									</SelectContent>
								</Select>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={control}
						name='message'
						render={({ field }) => (
							<FormItem>
								<FormLabel className='text-muted-foreground text-lg'>Сообщение</FormLabel>
								<FormControl>
									<Textarea
										className='rounded-[15px] border-2 border-[#E4E5E5] placeholder:text:[#E2E2E2] min-h-25 text-lg mb-4'
										placeholder='Введите номер телефона'
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button type='submit' size='main' variant='primary' className='w-full'>
						Отправить
					</Button>
				</form>
			</Form>
		</div>
	)
}
