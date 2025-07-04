'use client';

import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    className?: string;
    children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children, className = '', ...props }) => {
    return (
        <button
            className={`px-6 py-3 rounded-full font-medium text-white bg-black hover:bg-gray-400 transition-colors duration-300 ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};
