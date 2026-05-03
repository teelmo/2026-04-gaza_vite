/**
 * RecommendationBlock.tsx
 *
 * Wrapper around <recommendation-template> web component.
 *
 * The web component has a constructor that sets `this.title = undefined` which
 * coerces to element.title = "undefined" (a reflected IDL attribute on HTMLElement).
 * document.createElement() then throws NotSupportedError: "The result must not
 * have attributes". The HTML parser does NOT apply this check, so we create the
 * element via innerHTML instead and set properties after connectedCallback fires.
 */

import { type FC, useEffect, useRef } from 'react';
import '@yle-interactive/solid-components/webcomponents/Recommendation';
import { l } from '~/data/LYHYET';

interface Props {
  title?: string;
  lang?: string;
  data: unknown[];
  wideimages?: boolean;
  textcolor?: string;
  textcolordark?: string;
}

const RecommendationBlock: FC<Props> = ({
  title,
  lang = 'fi',
  data,
  wideimages = false,
  textcolor,
  textcolordark,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    // Create via innerHTML — bypasses document.createElement() and the
    // "must not have attributes" spec check that trips up the constructor.
    ref.current.innerHTML = '<recommendation-template></recommendation-template>';
    const el = ref.current.querySelector('recommendation-template') as HTMLElement & Record<string, unknown>;
    if (!el) return;

    // connectedCallback has now run and set up reactive property descriptors.
    // Setting properties here triggers Solid.js reactive updates inside the component.
    el.data = data;
    el.title = title ?? l(lang).read_more;
    el.lang = lang;
    el.wideimages = wideimages;
    if (textcolor !== undefined) el.textcolor = textcolor;
    if (textcolordark !== undefined) el.textcolordark = textcolordark;

    return () => {
      if (ref.current) ref.current.innerHTML = '';
    };
  }, []);

  return <div ref={ref} />;
};

export default RecommendationBlock;
