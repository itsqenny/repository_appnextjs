
import useSWR from "swr";


const fetcher = (url) => fetch(url).then((res) => res.json());

export default function CustomerStatus({userId, orderId}) {
  const { data, error } = useSWR(
    `https://crm.zipperconnect.space/get/status?userId=${userId}&order_id=${orderId}`,
    fetcher
  );

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";
  return (
    <div>
      <h1>{data.status}</h1>
    </div>
  );
}
