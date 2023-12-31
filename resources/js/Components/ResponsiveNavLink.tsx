import { Link, InertiaLinkProps } from '@inertiajs/react';

export default function ResponsiveNavLink({ active = false, className = '', children, ...props }: InertiaLinkProps & { active?: boolean }) {
    return (
        <Link
            {...props}
            className={`w-full flex items-start pl-3 pr-4 py-2 border-l-4 ${
                active
                    ? 'border-red-600 text-red-300 bg-red-900/50 focus:text-red-200 focus:bg-red-900 focus:border-red-300'
                    : 'border-transparent text-gray-400 hover:text-gray-200 hover:bg-gray-700 hover:border-gray-600 focus:text-gray-200 focus:bg-gray-700 focus:border-gray-600'
            } text-base font-medium focus:outline-none transition duration-150 ease-in-out ${className}`}
        >
            {children}
        </Link>
    );
}
