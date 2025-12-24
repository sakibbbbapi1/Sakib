export async function GET(req) {
  const { searchParams } = new URL(req.url)
  const guild_id = searchParams.get("guild_id")
  const region = searchParams.get("region")

  const url = `http://guild-info-danger.vercel.app/guild?guild_id=${guild_id}&region=${region}`

  try {
    const res = await fetch(url)
    const data = await res.json()
    return Response.json(data)
  } catch {
    return Response.json({ success: false, message: "Guild info failed" })
  }
  }
