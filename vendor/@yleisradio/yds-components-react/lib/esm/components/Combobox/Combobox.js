import { __rest } from '../../node_modules/tslib/tslib.es6.js';
import { jsx, jsxs } from 'react/jsx-runtime';
import { forwardRef, useState, useEffect } from 'react';
import { useCombobox } from 'downshift';
import { ComboboxContainer, ComboboxMenu, ComboboxMenuItem } from './Combobox.styles.js';
import { TextInput } from '../TextInput/TextInput.js';
import { IconWrapper, ContentWrapper } from '../MenuItem/MenuItem.styles.js';
import { ChevronDown, CloseSmall, Search, Check } from '@yleisradio/yds-icons-react';
import { Spinner } from '../Spinner/Spinner.js';

const DefaultComboboxMenuItem = _a => {
  var {
      item,
      index,
      highlightedIndex,
      selectedItem,
      itemProps,
      children,
      menuSize
    } = _a,
    other = __rest(_a, ["item", "index", "highlightedIndex", "selectedItem", "itemProps", "children", "menuSize"]);
  return jsxs(ComboboxMenuItem, Object.assign({
    "$isHighlighted": highlightedIndex === index,
    "$isSelected": item.value === (selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.value),
    "$menuSize": menuSize,
    "$isDisabled": false
  }, other, itemProps, {
    children: [jsx(ContentWrapper, {
      children: children
    }), jsx(IconWrapper, {
      "$menuSize": "md",
      "$highlight": true,
      children: item.value === (selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.value) && jsx(Check, {})
    })]
  }), `${item}${index}`);
};
const ComboboxSingleSelect = forwardRef((_a, ref) => {
  var {
      label,
      labelOptions = {},
      value,
      placeholder,
      description,
      icon,
      iconBefore,
      loading = false,
      loadingText = 'Ladataan...',
      errorMessage,
      autocomplete,
      type = 'text',
      success = false,
      isDisabled = false,
      menuSize = 'md',
      menuMaxHeight = '300px',
      items = [],
      controlledItems = null,
      setControlledItems = null,
      menuItemComponent = null,
      handleInputValueChange,
      handleItemToString,
      handleSelectedItemChange,
      controlledValue,
      handleControlledValueChange,
      clearSelectionOnEmptyInput = true,
      showAllValuesOnOpen = false,
      initialIsOpen = false,
      noResultsText = 'Ei tuloksia',
      toggleButtonText = 'Näytä vaihtoehdot',
      clearText = 'Tyhjennä',
      hideClearButton = false,
      showSearchIcon = false,
      searchIconLabel = 'Haku',
      environment,
      downshiftProps = {},
      onChange: userOnChange
    } = _a,
    other = __rest(_a, ["label", "labelOptions", "value", "placeholder", "description", "icon", "iconBefore", "loading", "loadingText", "errorMessage", "autocomplete", "type", "success", "isDisabled", "menuSize", "menuMaxHeight", "items", "controlledItems", "setControlledItems", "menuItemComponent", "handleInputValueChange", "handleItemToString", "handleSelectedItemChange", "controlledValue", "handleControlledValueChange", "clearSelectionOnEmptyInput", "showAllValuesOnOpen", "initialIsOpen", "noResultsText", "toggleButtonText", "clearText", "hideClearButton", "showSearchIcon", "searchIconLabel", "environment", "downshiftProps", "onChange"]);
  const isItemDisabled = item => item.isDisabled ? item.isDisabled : false;
  const comboboxItems = controlledItems ? controlledItems : items ? items : [];
  const [inputItems, setInputItems] = useState(items);
  const comboboxControlledItems = controlledItems ? controlledItems : inputItems;
  const setComboboxControlledItems = setControlledItems ? setControlledItems : setInputItems;
  // Sync inputItems with items prop when it changes
  useEffect(() => {
    if (!controlledItems) {
      setInputItems(items);
    }
  }, [items, controlledItems]);
  const controlledSelectedItem = controlledValue === '' && clearSelectionOnEmptyInput ? null : comboboxItems.find(({
    value
  }) => controlledValue === value);
  const {
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    highlightedIndex,
    selectedItem,
    inputValue,
    selectItem,
    setInputValue,
    getItemProps
  } = useCombobox(Object.assign(Object.assign(Object.assign({}, downshiftProps), environment === undefined ? {} : {
    environment
  }), {
    items: comboboxControlledItems,
    initialIsOpen: initialIsOpen,
    isItemDisabled,
    onInputValueChange: ({
      inputValue
    }) => {
      if (handleInputValueChange) {
        handleInputValueChange(inputValue || '');
      } else if (inputValue) {
        setComboboxControlledItems(comboboxItems.filter(item => item.value.toLowerCase().includes(inputValue.toLowerCase())));
        if (comboboxControlledItems.length === 1 && comboboxControlledItems[0].value === inputValue) {
          selectItem(comboboxControlledItems[0]);
        }
      } else {
        setComboboxControlledItems(comboboxItems);
        if (clearSelectionOnEmptyInput) {
          selectItem(null);
        }
      }
    },
    onIsOpenChange: ({
      isOpen
    }) => {
      if (isOpen && showAllValuesOnOpen) {
        if ((selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.value) === inputValue) {
          setComboboxControlledItems(comboboxItems);
        }
      }
    },
    onStateChange: ({
      type
    }) => {
      if (inputValue && type === useCombobox.stateChangeTypes.InputBlur) {
        // find item which has the same value as the input value
        const item = comboboxItems.find(item => item.value.toLowerCase() === inputValue.toLowerCase());
        if (item) {
          selectItem(item);
        }
      } else if (inputValue === '' && type === useCombobox.stateChangeTypes.InputBlur) {
        selectItem(null);
      }
    },
    itemToString(item) {
      if (item && handleItemToString) {
        return handleItemToString(item);
      }
      return item ? item.value : '';
    },
    onSelectedItemChange: ({
      selectedItem
    }) => {
      if (handleSelectedItemChange) {
        handleSelectedItemChange(selectedItem);
      } else if (handleControlledValueChange) {
        handleControlledValueChange((selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.value) || '');
      }
    },
    initialInputValue: controlledValue ? controlledValue : value,
    initialSelectedItem: controlledSelectedItem
  }));
  const ComboboxMenuItemComponent = menuItemComponent || DefaultComboboxMenuItem;
  const iconBeforeDefault = showSearchIcon && {
    componentFn: Search,
    ariaLabel: searchIconLabel
  };
  useEffect(() => {
    if (controlledSelectedItem !== undefined) {
      selectItem(controlledSelectedItem);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [controlledSelectedItem]);
  // Get downshift's input props and extract the onChange handler
  const downshiftInputProps = getInputProps(ref ? {
    ref: ref
  } : {});
  const {
      onChange: downshiftOnChange
    } = downshiftInputProps,
    restDownshiftProps = __rest(downshiftInputProps, ["onChange"]);
  // Merge downshift onChange with user's onChange
  const mergedOnChange = e => {
    // Call downshift's onChange first (required for internal state management)
    if (downshiftOnChange) {
      downshiftOnChange(e);
    }
    // Then call user's onChange if provided
    if (userOnChange) {
      userOnChange(e);
    }
  };
  return jsx(ComboboxContainer, {
    "$isDisabled": isDisabled,
    children: jsx(TextInput, Object.assign({
      label: label,
      labelOptions: Object.assign(Object.assign({
        style: {
          display: 'inline-block'
        }
      }, labelOptions), getLabelProps()),
      success: success,
      errorMessage: errorMessage,
      description: description,
      placeholder: placeholder,
      autocomplete: autocomplete,
      type: type,
      isDisabled: isDisabled,
      icon: icon || {
        componentFn: ChevronDown,
        ariaLabel: toggleButtonText,
        props: Object.assign({}, getToggleButtonProps())
      },
      iconBefore: iconBefore || iconBeforeDefault,
      showLoadingIndicator: loading,
      iconClear: inputValue && !hideClearButton ? {
        componentFn: CloseSmall,
        ariaLabel: clearText,
        onClick: () => {
          var _a;
          const inputId = downshiftInputProps.id;
          setInputValue('');
          selectItem(null);
          (_a = document === null || document === void 0 ? void 0 : document.getElementById(inputId)) === null || _a === void 0 ? void 0 : _a.focus();
        }
      } : undefined
    }, other, restDownshiftProps, {
      onChange: mergedOnChange,
      children: jsx(ComboboxMenu, Object.assign({}, getMenuProps(), {
        "$menuSize": menuSize,
        "$isOpen": isOpen,
        "$menuMaxHeight": menuMaxHeight,
        children: isOpen && loading ? jsxs(ComboboxMenuItem, {
          "$isDisabled": true,
          "$menuSize": menuSize,
          children: [jsx(IconWrapper, {
            "$menuSize": "md",
            children: jsx(Spinner, {
              size: "sm"
            })
          }), ' ', loadingText]
        }) : isOpen && comboboxControlledItems.length === 0 ? jsx(ComboboxMenuItem, {
          "$isDisabled": true,
          "$menuSize": menuSize,
          children: noResultsText
        }) : comboboxControlledItems.map((item, index) => jsx(ComboboxMenuItemComponent, {
          highlightedIndex: highlightedIndex,
          selectedItem: selectedItem,
          item: item,
          index: index,
          itemProps: getItemProps({
            item,
            index
          }),
          menuSize: menuSize,
          children: item.value
        }, `${item.value}${index}`))
      }))
    }))
  });
});

export { ComboboxSingleSelect, DefaultComboboxMenuItem };
