/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    prefix: '',
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            colors: {
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
                // Monochrome palette
                mono: {
                    light: '#F5F5F5',
                    DEFAULT: '#A0A0A0',
                    dark: '#333333',
                },
                accent1: {
                    light: '#E8E8E8',
                    DEFAULT: '#BBBBBB',
                    dark: '#222222',
                },
                accent2: {
                    light: '#FFFFFF',
                    DEFAULT: '#1A1A1A',
                    dark: '#000000',
                },
                // Beaver-themed colors
                beaver: {
                    fur: '#6E5141',
                    tail: '#4A3728',
                    light: '#9C8475',
                    dark: '#3A2A1F',
                },
                wood: {
                    light: '#B8A89A',
                    DEFAULT: '#8C7B6F',
                    dark: '#5D4C40',
                },
                bark: {
                    light: '#7D6552',
                    DEFAULT: '#5D4C40',
                    dark: '#3F302A',
                },
                water: {
                    light: '#B8C5D6',
                    DEFAULT: '#7A92AD',
                    dark: '#415875',
                },
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                ripple: {
                    '0%': { transform: 'scale(0.8)', opacity: '1' },
                    '100%': { transform: 'scale(2)', opacity: '0' },
                },
                'rotate-slow': {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                },
                'fade-in-up': {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                reveal: {
                    '0%': { width: '0%' },
                    '100%': { width: '100%' },
                },
                'text-reveal': {
                    '0%': { transform: 'translateY(100%)' },
                    '100%': { transform: 'translateY(0)' },
                },
                'beaver-gnaw': {
                    '0%': { transform: 'translateX(0) rotate(0)' },
                    '25%': { transform: 'translateX(-3px) rotate(-1deg)' },
                    '50%': { transform: 'translateX(0) rotate(0)' },
                    '75%': { transform: 'translateX(3px) rotate(1deg)' },
                    '100%': { transform: 'translateX(0) rotate(0)' },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                float: 'float 6s ease-in-out infinite',
                ripple: 'ripple 2s infinite ease-out',
                'rotate-slow': 'rotate-slow 15s linear infinite',
                'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
                reveal: 'reveal 1s ease-out forwards',
                'text-reveal': 'text-reveal 0.8s ease-out forwards',
                'beaver-gnaw': 'beaver-gnaw 0.3s ease-in-out',
            },
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
                cabin: ['Cabin', 'sans-serif'],
            },
        },
    },
    plugins: [require('tailwindcss-animate')],
};
