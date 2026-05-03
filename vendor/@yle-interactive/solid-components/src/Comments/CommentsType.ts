export type CommentsType = {
  env?: Env;
  topicId: string;
  language?: Language;
  tunnus?: TunnusInstance;
  theme?: "light" | "dark" | "auto";
  open?: boolean;
  analytics?: AnalyticsExtraParams;
};

//Check out the latest types https://github.com/Yleisradio/yle-comments-plugin/blob/master/src/CommentsPlugin.tsx

export type Env = "dev" | "test" | "production";

export type TunnusInstance = {
  logIn(): Promise<void>;
  register(): Promise<void>;
  state: {
    subscribe(callback: (state: TunnusState) => void): TunnusSubscription;
  };
};

export type TunnusState =
  | {
      loggedIn: false;
      user: null;
    }
  | {
      loggedIn: true;
      user: {
        nick: string;
      };
    };

export type TunnusSubscription = {
  unsubscribe(): void;
};

export type AnalyticsExtraParams = Record<
  string,
  string | number | null | undefined
>;

const languages = ["fi", "sv", "en"] as const;
export type Language = (typeof languages)[number];
