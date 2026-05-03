import type { FC } from 'react';
import { l } from '~/data/LYHYET';

type Props = {
  lang?: 'fi' | 'sv';
};

const Fallback: FC<Props> = ({ lang = 'fi' }) => {
  return <p>{l(lang).error}</p>;
};

export default Fallback;
