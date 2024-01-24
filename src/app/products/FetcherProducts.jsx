'use client'
import useSWR from 'swr'
import Products from "./Products"
import SkeletonProducts from './SkeletonProducts'
const fetcher = (url) => fetch(url).then((res) => res.json())

export default function FetcherProducts({ searchQuery, userId }) {
	const { data, error } = useSWR(
		`/api/products`,
		fetcher
	)
        console.log(data)
	return (
		<>
			{" "}
			{error ? (
				<>
					<p>Ошибка. Пожалуйста, обратитесь за поддержкой.</p>
				</>
			) : (
				<>
					{!data ? (
						<>
							<SkeletonProducts/>
						</>
					) : (
						<>
							 <Products data={data} searchQuery={searchQuery}/>
						</>
					)}
				</>
			)}
		</>
	)
}
