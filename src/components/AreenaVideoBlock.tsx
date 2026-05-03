/**
 * AreenaVideoBlock.tsx
 *
 * React wrapper around the Yle Areena player embed.
 *
 * The player script (https://player-v2.yle.fi/embed.js) is loaded globally
 * via index.html, so window.ylePlayer is available immediately on mount.
 *
 * The canonical Solid.js component lives at:
 *   import AreenaVideo from "@yle-interactive/solid-components/AreenaVideo"
 * When the project migrates to Solid.js, replace usages of this component
 * with the direct import above.
 */

import { type FC, useEffect, useRef } from 'react';

declare global {
  interface Window {
    ylePlayer?: {
      render: (options: { element: HTMLElement; props: Record<string, unknown> }) => Promise<unknown>;
    };
  }
}

interface Props {
  id: string;
  autoFocus?: boolean;
  title?: boolean;
  description?: boolean;
  subtitles?: boolean;
}

const AreenaVideoBlock: FC<Props> = ({
  id,
  autoFocus = false,
  title = false,
  description = true,
  subtitles = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !window.ylePlayer) return;
    window.ylePlayer.render({
      element: containerRef.current,
      props: { id, autoFocus, autofocus: false, autoplay: true, title, description, subtitles },
    });
  }, []);

  return <div ref={containerRef} />;
};

export default AreenaVideoBlock;
