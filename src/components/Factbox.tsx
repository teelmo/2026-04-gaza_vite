/**
 * Factbox.tsx
 *
 * Expandable/collapsible fact box. React port of src_ref/src/components/Factbox.tsx.
 * Add analytics tracking (trackEvent) once the consent-sdk integration is wired up.
 */

import { type FC, type ReactNode, useState } from "react";
import { Button } from "@yleisradio/yds-components-react";
import { ChevronDown, ChevronUp } from "@yleisradio/yds-icons-react";
import styles from "./Factbox.module.css";
import { l } from "~/data/LYHYET";

interface Props {
  title: string;
  lang?: 'fi' | 'sv';
  children?: ReactNode;
}

const Factbox: FC<Props> = ({ title, lang = 'fi', children }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const t = l(lang);

  return (
    <div className="factbox my-6 bg-(--color-factbox-background) py-6 text-lg text-(--color-factbox-foreground) lg:p-6">
      <h2 className="mb-4 text-2xl font-bold">{title}</h2>

      {children && (
        <div className="relative">
          <div
            className={`${styles.textContent} ${isExpanded ? styles.expanded : styles.collapsed}`}
          >
            {children}
          </div>
          <div className={styles.gradientOverlay} />
        </div>
      )}

      <div className="mt-6 flex justify-center">
        <Button
          variant="secondary"
          text={isExpanded ? t.close : t.open}
          iconAfter={isExpanded ? <ChevronUp /> : <ChevronDown />}
          onClick={() => setIsExpanded((v) => !v)}
        />
      </div>
    </div>
  );
};

export default Factbox;
