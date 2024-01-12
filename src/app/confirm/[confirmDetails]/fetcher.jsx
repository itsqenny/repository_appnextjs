import useSWR from "swr"

const fetcher = (url) =>
  fetch(url).then((res) => res.json());

export default function CustomerStatus({ userId, orderId }) {
    const url = "https://crm.zipperconnect.space/get/payment";

    const { data, error } = useSWR(
      () => (userId && orderId ? [url, { userId, order_id: orderId }] : null),
      fetcher
    );
        
    
    if (error) return "Произошла ошибка.";
    if (!data) return "Загрузка...";

	return (
		<div>
			<h1>TEST SWR</h1>
			<strong>👁 {data.status}</strong>{" "}
		</div>
	)
}
