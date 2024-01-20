export async function GET(request) {
    try {
        const url = new URL(request.url || request);
        const pathnameParts = url.pathname.split("/").filter((part) => part !== "");
        const id = pathnameParts[pathnameParts.length - 1];
        const response = await fetch(`https://crm.zipperconnect.space/customer/bonus/${id}`);
        const data = await response.json();
        return new Response(JSON.stringify(data));
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}