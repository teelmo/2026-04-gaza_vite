import { Show } from 'solid-js';
import { decode } from "blurhash";

const Blurhash = (props) => {
    const blurhash = ():string => props.blurhash
    const showBlur = ():string => props.showBlur?.() 
    const imgRef = ():HTMLElement => props.imageContainerRef
    //const mobileMaxWidth:number = () => props.mobileMaxWidth || 550
    const type = ():string => props.type

    /*
    const height = (width) => {
        const heightCalc = (aspectRatio) => {
            switch(aspectRatio) {
                case "1:1":
                    return "100%";
                case "16:9":
                    return 9/16 * width + "px";
                case "2:3":
                    return 3/2 * width + "px";
                case "5:2":
                    return 2/5 * width + "px";
                default:
                    return 2/3 * width + "px";
            }
        }
        if (window.innerWidth > parseInt(mobileMaxWidth())) {
            return heightCalc(props.imsAspectRatio)
        } else {
            return heightCalc(props.imsAspectRatioMobile)
        }
    } 
    */   
    
    let canvas:HTMLCanvasElement;
    return (
        <Show when={blurhash() && showBlur()}>
            {():any => {
                const pixels:Uint8ClampedArray = decode(blurhash(), 32, 32)
                const ctx:CanvasRenderingContext2D = canvas.getContext("2d");
                
                const imageData:ImageData = ctx.createImageData(32, 32);
                
                imageData.data.set(pixels);
                ctx.putImageData(imageData, 0, 0);
                
                const width:number = imgRef()?.offsetWidth
                canvas.style.width = width + "px"
                canvas.style.height = 
                    type() === "header" 
                    ? "70vh" 
                    : type() === "absolute"
                    ? "100vh"
                    : "100%"//height(width)

            }}
            <canvas 
                style={{position: "absolute", top: 0, left: 0}}
                ref={canvas} 
                width="32" 
                height="32" 
            />
        </Show>
    )
}

export default Blurhash