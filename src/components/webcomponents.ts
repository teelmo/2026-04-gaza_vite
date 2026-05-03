/**
 * webcomponents.ts
 *
 * Side-effect imports that register all @yle-interactive web components
 * used in Article.mdx. Imported once from App.tsx.
 *
 * These resolve to vendor/@yle-interactive via the Vite alias in vite.config.ts,
 * so no private npm registry access is needed.
 *
 * Note: AreenaVideo has no web component variant — use an <iframe> embed instead.
 */

import '@yle-interactive/solid-components/webcomponents/Header';
import '@yle-interactive/solid-components/webcomponents/VideoTag';
import '@yle-interactive/solid-components/webcomponents/PictureTag';
// Recommendation is loaded lazily by RecommendationBlock.tsx to work around a
// constructor bug (sets element.title = "undefined" → triggers NotSupportedError).
import '@yle-interactive/solid-components/webcomponents/Scrolly';
import '@yle-interactive/solid-components/style';
