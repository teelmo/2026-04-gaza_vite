function formatDateText(date) {
    const publishedDate = new Date().getFullYear() == date.getFullYear() 
    ? date.getDate() + "." + Number(date.getMonth() + 1) + "."
    : date.getDate() + "." + Number(date.getMonth() + 1) + "." + date.getFullYear()

    const publishedTime = date.getMinutes() < 10 
      ? " " + date.getHours() + ":0" + date.getMinutes() 
      : " " + date.getHours() + ":" + date.getMinutes()
    
    return publishedDate + publishedTime;  
  }

export const finnishDate = (datePublished, dateContentModified) => {

    const published = new Date(datePublished)
    const modified = new Date(dateContentModified)

    if(datePublished === dateContentModified) {
        return formatDateText(published)
    } else {
        return formatDateText(published) + " • Päivitetty " + formatDateText(modified)
    }
}

export const handleData = (d) => {

    const headline = () => d?.data?.[0]?.headline || undefined;
    const lead = () => d?.data?.[0]?.lead || undefined;
    const publication = () => d?.data?.[0]?.publication || "uutiset";
    const datePublished = () => d?.data?.[0]?.datePublished || undefined;
    const dateContentModified = () => d?.data?.[0]?.dateContentModified || undefined;
    const subjects = () => d?.data?.[0]?.subjects || [];

    return {
        text: {
            tag: subjects().length > 0 ? subjects()[0]?.title?.fi : undefined,
            taglink: subjects().length > 0 ? "https://yle.fi/uutiset/" + subjects()[0]?.id : undefined,
            time: datePublished() !== undefined && finnishDate(datePublished(), dateContentModified())
        },
        share: {
            headline: headline() && headline()?.full || "Yle Uutiset",
            lead: lead() && lead() || "Yle Uutiset",
            uutiset: publication() === 'uutiset',
        }
        
        
    }
}