export default defineEventHandler(async (event) => {
    const params = {
        part: "snippet",
        q: "",
        channelId: "",
    }

    const response = await $fetch("https://www.googleapis.com/youtube/v3/search", {
            Headers: {
                "Content-Type": "application/json"
            },
            method: "GET",
            body: JSON.stringify(params)
        }
    )
})