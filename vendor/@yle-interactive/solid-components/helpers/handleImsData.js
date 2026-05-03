export const handleImsData = async (d) => {
    //ID
    const imageID = d.data.publicId;
  
    const crops = {} 
  
    crops["o"] = `https://images.cdn.yle.fi/image/upload/f_auto,q_60,h_1080/v1614062693/${imageID}.jpg`
    
  
    d.data.crops.forEach(crop => {
        const {x,y,width,height} = crop.coordinates
  
        //Scale image to fullHD
        const scaleWidth = 1920/width;
        const scaleHeight = 1080/height;
        const scale = scaleHeight < scaleWidth ? scaleHeight : scaleWidth;
  
        const outputWidth = Math.round(width*scale);
        const outputHeight = Math.round(height*scale);
        
  
        const url = `https://images.cdn.yle.fi/image/upload/w_${width},h_${height},x_${x},y_${y},f_auto,fl_lossy,q_60,c_crop/w_${outputWidth},h_${outputHeight},dpr_1/${imageID}.jpg`
        crops[crop.name] = url
        
    })
    
    const alt = d.data?.alt?.[0]
    const blurhash = d.data?.additionalProperties?.[0]?.blurhash
    return {crops, alt, blurhash}
  }