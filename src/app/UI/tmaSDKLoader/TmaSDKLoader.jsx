"use client"

import { SDKProvider, DisplayGate } from "@tma.js/sdk-react"

function SDKProviderError({ error }) {
	return (
		<div>
			Oops. Something went wrong.
			<blockquote>
				<code>{error ? error.message : JSON.stringify(error)}</code>
			</blockquote>
		</div>
	)
}

function SDKProviderLoading() {
	return <div>SDK is loading.</div>
}

function SDKInitialState() {
	return <div>Waiting for initialization to start.</div>
}

/**
 * Root component of the whole project.
 */
export function TmaSDKLoader({ children }) {
	return (
		<SDKProvider
			options={{
				cssVars: true,
				acceptCustomStyles: true,
				async: true,
				timeout: 10000,
			}}
		>
			<DisplayGate
				error={SDKProviderError}
				loading={SDKProviderLoading}
				initial={SDKInitialState}
			>
				{children}
			</DisplayGate>
		</SDKProvider>
	)
}
