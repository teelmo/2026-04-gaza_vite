import { useEffect, type FC } from "react";
import "./webcomponents";
import useStore from '~/store/store';

import Article from "./Article.mdx";

type Props = {
  parameters: Parameter;
};

const App: FC<Props> = ({ parameters }) => {
  const lang = (parameters.lang ?? "fi") as "fi" | "sv";
  const { setLang, setMapInfo } = useStore();

  useEffect(() => {
    setLang(lang);
    setMapInfo(parameters.mapInfo === "true");
  }, [lang, parameters.mapInfo]);

  return (
    <div className={`kielivalinta ${lang} bg-(--plus-background) text-(--plus-foreground)`}>
      <Article />
    </div>
  );
};

export default App;
