const createImageUrl = (image, aspectratio, maxwidth, type) => {
  const id = image?.id;
  const crop = image?.crops?.filter((c) => c.name === aspectratio)?.[0];
  if (crop) {
    const h = crop?.coordinates?.height,
      w = crop?.coordinates?.width,
      x = crop?.coordinates?.x,
      y = crop?.coordinates?.y,
      ar = crop?.aspect,
      width = maxwidth,
      height = Number(maxwidth / ar).toFixed(0);

    const pixelDensity2 = `https://images.cdn.yle.fi/image/upload/c_crop,h_${h},w_${w},x_${x},y_${y}/ar_${ar},c_fill,g_faces,h_${height},w_${width}/dpr_2.0/q_auto:eco/f_auto/fl_lossy/${id}`;
    if (type === "img") {
      return pixelDensity2;
    } else {
      return (
        pixelDensity2 +
        " 2x, " +
        pixelDensity2.replace("dpr_2.0", "dpr_1.0") +
        " 1x"
      );
    }
  } else {
    //there are cases where crops aren't provided, in those cases add manually backup url
    return image.backupurl;
  }
};

const Picture = (props) => {
  const image = props.image;
  const wideimages = props.wideimages;
  return (
    <picture>
      <source
        srcset={createImageUrl(
          image,
          wideimages ? "16:9" : "1:1",
          wideimages ? 800 : 220,
          "source"
        )}
        media="(max-width: 767px)"
      />
      <source
        srcset={createImageUrl(
          image,
          "16:9",
          wideimages ? 1600 : 220,
          "source"
        )}
        media="(min-width: 768px)"
      />
      <img
        src={createImageUrl(image, "16:9", wideimages ? 500 : 220, "img")}
        alt={image.alt}
      />
    </picture>
  );
};

export default Picture;
