"use client"
import useSWRInfinite from "swr/infinite"
import Products from "./Products"
import SkeletonProducts from "./SkeletonProducts"
import { useState } from "react"
const getKey = (pageIndex, previousPageData) => {
	if (previousPageData && !previousPageData.length) return null
	pageIndex = pageIndex + 1
	return `/api/products/?_page=${pageIndex}`
}

const fetcher = (url) => fetch(url).then((res) => res.json())
export default function FetcherProducts({ searchParams, userId }) {
	const { data, size, setSize, error } = useSWRInfinite(getKey, fetcher, {
		initialSize: 1,
	})
	return (
		<>
			{" "}
			{error ? (
				<>
					<SkeletonProducts />
				</>
			) : (
				<>
					{!data ? (
						<>
							<SkeletonProducts />
						</>
					) : (
						<>
							<Products
								data={data}
								setSize={setSize}
								size={size}
							/>
						</>
					)}
				</>
			)}
		</>
	)
}
