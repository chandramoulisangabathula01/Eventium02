import React from 'react'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}
      {...props}
    />
  )
}

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

export function CardContent({ className, ...props }: CardContentProps) {
  return <div className={`p-6 pt-0 ${className}`} {...props} />
}

interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

export function CardFooter({ className, ...props }: CardFooterProps) {
  return <div className={`flex items-center p-6 pt-0 ${className}`} {...props} />
}