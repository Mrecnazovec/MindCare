import React, { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type TitleProps = {
	className?: string
	children: ReactNode
}

export function Title({ className, children }: TitleProps) {
	return <div className={cn('space-y-2 flex flex-col items-center justify-center', className)}>{children}</div>
}

type TitleElementProps = {
	className?: string
	children: ReactNode
} & React.HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement | HTMLSpanElement>

Title.H2 = function ({ className, children, ...props }: TitleElementProps) {
	return (
		<h2 className={cn('text-2xl md:text-4xl font-bold text-center', className)} {...props}>
			{children}
		</h2>
	)
}

Title.P = function ({ className, children, ...props }: TitleElementProps) {
	return (
		<p className={cn('text-lg font-light text-muted-foreground text-center max-w-[700px]', className)} {...props}>
			{children}
		</p>
	)
}

Title.Span = function ({ className, children, ...props }: TitleElementProps) {
	return (
		<span className={cn('text-second', className)} {...props}>
			{children}
		</span>
	)
}
