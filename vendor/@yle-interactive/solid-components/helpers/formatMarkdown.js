export const formatMarkdownExternalLinks = (text) => {

    //markdown links to target _blank
    const regex = /!*\[(.*?)\]\((.*?)\)/g;
    const result = text.replace(regex, (match, p1, p2) => {
        //console.log({match, p1, p2})
        let url = p2.split("_").join("&#95;")
        if (match[0] === '!') return match
        else if(!p2.includes("yle")) {
            return `<a href=${url} target="&#95;blank">${p1}</a>`
        } else {
            return `[${p1}](${url})`
        }        
    })
    

   return result
}