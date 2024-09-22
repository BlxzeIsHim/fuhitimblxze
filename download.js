const ytdl = require('ytdl-core');

export default async function handler(req, res) {
    const { url } = req.query;

    if (!url) {
        return res.status(400).json({ error: 'URL is required' });
    }

    res.header('Content-Disposition', 'attachment; filename="video.mp4"');

    ytdl(url, { format: 'mp4' }).pipe(res).on('error', (err) => {
        res.status(500).json({ error: 'Failed to download video' });
    });
}
