
const determineLinkType = (url) => {
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
        return 'video';
    } else if (url.includes('vimeo.com')) {
        return 'video';
    } else if (url.includes('dailymotion.com')) {
        return 'video';
    }
    return 'image';
}

export default determineLinkType
