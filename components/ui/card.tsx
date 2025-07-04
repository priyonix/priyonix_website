import React from 'react';
import { cn } from '@/lib/utils'; // You can replace this with simple className if utils is missing.

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'rounded-2xl shadow-lg border bg-white p-4 transition-transform hover:scale-105 hover:shadow-2xl',
        className
      )}
      {...props}
    />
  );
}

export function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('p-4', className)} {...props} />;
}
