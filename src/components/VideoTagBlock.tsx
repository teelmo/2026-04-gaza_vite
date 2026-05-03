/**
 * VideoTagBlock.tsx
 *
 * React wrapper around the <video-tag> web component.
 *
 * TWO bugs to work around:
 *
 * 1. Constructor sets attributes (NotSupportedError)
 *    The video-tag constructor does `this.draggable = void 0` which calls
 *    setAttribute('draggable', 'undefined') — HTMLElement.draggable is a
 *    reflected IDL attribute. document.createElement() then throws because the
 *    Custom Elements spec requires the constructor result to have no attributes.
 *    Fix: create the element via innerHTML (the HTML parser skips this check).
 *
 * 2. Solid signal initialized from props.url before properties are set
 *    connectedCallback fires synchronously inside the innerHTML call, and the
 *    Solid component does `createSignal(props.url)` at that point. If url is
 *    not yet present, the signal starts as undefined and crashes on
 *    `useUrl().length` in the first render.
 *    Fix: embed url (and boolean flags) directly in the innerHTML string so
 *    the HTML parser sets them as attributes *before* connectedCallback runs.
 *    The web component framework reads attributes in St() during connectedCallback:
 *      s = e.getAttribute(r.attribute);
 *      s != null && (r.value = parse ? JSON.parse(s) : s);
 */

import { type FC, useEffect, useRef } from 'react';

interface Props {
  url: string;
  urlmobile?: string;
  relative?: boolean;
  threshold?: number;
  loop?: boolean;
  preload?: boolean;
  audioicon?: boolean;
  audioiconcolor?: string;
  progressbarcolor?: string;
  alt?: string;
}

/** Escape a string for safe use as an HTML attribute value. */
const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/"/g, '&quot;');

const VideoTagBlock: FC<Props> = ({
  url,
  urlmobile,
  relative = false,
  threshold = 0.5,
  loop = true,
  preload = false,
  audioicon = false,
  audioiconcolor,
  progressbarcolor,
  alt,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    // Build the opening tag with attributes that must be present during
    // connectedCallback so Solid's createSignal(props.url) is not undefined.
    // Boolean props use JSON-encoded attribute values as the WC framework
    // expects (it reads them with JSON.parse via the De() helper).
    let tag = `<video-tag url="${esc(url)}"`;
    tag += ` threshold="${threshold}"`;
    tag += ` loop="${loop}"`;
    tag += ` preload="${preload}"`;
    tag += ` relative="${relative}"`;
    tag += ` audioicon="${audioicon}"`;
    if (urlmobile)       tag += ` urlmobile="${esc(urlmobile)}"`;
    if (audioiconcolor)  tag += ` audioiconcolor="${esc(audioiconcolor)}"`;
    if (progressbarcolor) tag += ` progressbarcolor="${esc(progressbarcolor)}"`;
    if (alt)             tag += ` alt="${esc(alt)}"`;
    tag += '></video-tag>';

    // innerHTML: HTML parser sets attributes → connectedCallback fires →
    // Solid reads attributes in St() → signals initialized with correct values.
    ref.current.innerHTML = tag;

    return () => {
      if (ref.current) ref.current.innerHTML = '';
    };
  }, []);

  return <div ref={ref} />;
};

export default VideoTagBlock;
