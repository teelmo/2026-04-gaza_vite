import type { HTMLAttributes, ReactNode } from 'react';
import type { MenuSize } from '../componentTypes.js';
import type { Overwrite, UseComboboxGetItemPropsReturnValue } from 'downshift';
export type ComboboxItem = {
    value: string;
    isDisabled?: boolean;
    [key: string]: string | number | boolean | undefined;
};
type ItemProps = Omit<Overwrite<UseComboboxGetItemPropsReturnValue, {
    item: ComboboxItem;
    index: number;
}>, 'index' | 'item'>;
export type ComboboxItemDSProps = {
    item: ComboboxItem;
    index: number;
    highlightedIndex?: number;
    selectedItem: ComboboxItem | null;
    itemProps: ItemProps;
    menuSize: MenuSize;
    children: ReactNode;
};
export type ComboboxItemProps = HTMLAttributes<HTMLLIElement> & ComboboxItemDSProps;
export {};
