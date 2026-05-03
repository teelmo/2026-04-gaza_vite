export interface SectionTabContextType {
    activeTab: number;
    setActiveTab: (index: number) => void;
}
export declare const SectionTabContext: import("react").Context<SectionTabContextType>;
export declare const useSectionTabContext: () => SectionTabContextType;
