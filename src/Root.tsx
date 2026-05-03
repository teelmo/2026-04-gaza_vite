import { type FC, StrictMode } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { YdsThemeProvider } from '@yleisradio/yds-components-react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

/* Components */
import App from '~/components/App';
import Fallback from '~/components/Fallback';

/* Prop types */
type Props = {
  parameters: Parameter;
};

const Root: FC<Props> = ({ parameters }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <StrictMode>
        <YdsThemeProvider theme="default">
          <ErrorBoundary fallback={<Fallback />}>
            <App parameters={parameters} />
          </ErrorBoundary>
        </YdsThemeProvider>
      </StrictMode>
    </QueryClientProvider>
  );
};

export default Root;
