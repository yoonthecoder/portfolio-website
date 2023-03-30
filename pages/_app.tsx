import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@/src/components/Layout';
import { ThemeProvider } from 'next-themes';
import Script from 'next/script';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as gtag from '../lib/gtag';

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter();
	useEffect(() => {
		const handleRouteChange = () => {
			gtag.pageview();
		};
		router.events.on('routeChangeComplete', handleRouteChange);
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange);
		};
	}, [router.events]);

	return (
		<>
			<Script
				strategy="afterInteractive"
				src="https://www.googletagmanager.com/gtag/js?id=G-L4ZZVKL7WZ"
			/>
			<Script
				id="google-analytics"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-L4ZZVKL7WZ');`,
				}}
			/>
			<ThemeProvider enableSystem={true} attribute="class">
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ThemeProvider>
		</>
	);
}
