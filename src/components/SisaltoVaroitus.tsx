/**
 * SisaltoVaroitus.tsx
 *
 * Content warning overlay rendered on top of a media element (typically a
 * VideoTag web component). Blurs the media until the user actively confirms
 * they want to see it.
 *
 * React port of src_ref/src/components/SisaltoVaroitus.tsx (Solid.js original).
 * Uses YDS Button + Eye icon in place of the custom button.
 */

import { type FC, type ReactNode, useRef, useState } from 'react';
import { Button } from '@yleisradio/yds-components-react';
import { Eye } from '@yleisradio/yds-icons-react';
import trackEvent from '~/helpers/trackEvent';
import { l } from '~/data/LYHYET';

interface Props {
  title?: string;
  description?: string;
  /** Analytics label, e.g. "pahoinpitely-paikat" */
  label?: string;
  lang?: 'fi' | 'sv';
  children: ReactNode;
}

const SisaltoVaroitus: FC<Props> = ({
  title,
  description,
  label,
  lang = 'fi',
  children,
}) => {
  const t = l(lang);
  const resolvedTitle = title ?? t.warning_title;
  const resolvedDescription = description ?? t.warning_desc;
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHidden, setIsHidden] = useState(false);

  const resetAndPlayVideo = (container: HTMLDivElement) => {
    const video = container.querySelector('video');
    if (!video) return;
    video.currentTime = 0;
    video.play().catch(() => {});
  };

  const handleButtonClick = () => {
    if (label) trackEvent(`sisältövaroitus-näytä-${label}`);
    setIsHidden(true);
    if (containerRef.current) resetAndPlayVideo(containerRef.current);
  };

  return (
    <div ref={containerRef} className="relative mb-6">
      {children}
      {!isHidden && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black/50 text-center text-white backdrop-blur-sm">
          <h2 className="text-2xl font-bold">{resolvedTitle}</h2>
          <p className="text-sm">{resolvedDescription}</p>
          <div className="sisaltovaroitus-button">
            <Button
              variant="secondary"
              text={t.show}
              iconBefore={<Eye />}
              onClick={handleButtonClick}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SisaltoVaroitus;
