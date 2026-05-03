'use strict';

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var downshift = require('downshift');
var Combobox_styles = require('./Combobox.styles.js');
var TextInput = require('../TextInput/TextInput.js');
var MenuItem_styles = require('../MenuItem/MenuItem.styles.js');
var ydsIconsReact = require('@yleisradio/yds-icons-react');
var Spinner = require('../Spinner/Spinner.js');

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
    other = tslib_es6.__rest(_a, ["item", "index", "highlightedIndex", "selectedItem", "itemProps", "children", "menuSize"]);
  return jsxRuntime.jsxs(Combobox_styles.ComboboxMenuItem, Object.assign({
    "$isHighlighted": highlightedIndex === index,
    "$isSelected": item.value === (selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.value),
    "$menuSize": menuSize,
    "$isDisabled": false
  }, other, itemProps, {
    children: [jsxRuntime.jsx(MenuItem_styles.ContentWrapper, {
      children: children
    }), jsxRuntime.jsx(MenuItem_styles.IconWrapper, {
      "$menuSize": "md",
      "$highlight": true,
      children: item.value === (selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.value) && jsxRuntime.jsx(ydsIconsReact.Check, {})
    })]
  }), `${item}${index}`);
};
const ComboboxSingleSelect = React.forwardRef((_a, ref) => {
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
    other = tslib_es6.__rest(_a, ["label", "labelOptions", "value", "placeholder", "description", "icon", "iconBefore", "loading", "loadingText", "errorMessage", "autocomplete", "type", "success", "isDisabled", "menuSize", "menuMaxHeight", "items", "controlledItems", "setControlledItems", "menuItemComponent", "handleInputValueChange", "handleItemToString", "handleSelectedItemChange", "controlledValue", "handleControlledValueChange", "clearSelectionOnEmptyInput", "showAllValuesOnOpen", "initialIsOpen", "noResultsText", "toggleButtonText", "clearText", "hideClearButton", "showSearchIcon", "searchIconLabel", "environment", "downshiftProps", "onChange"]);
  const isItemDisabled = item => item.isDisabled ? item.isDisabled : false;
  const comboboxItems = controlledItems ? controlledItems : items ? items : [];
  const [inputItems, setInputItems] = React.useState(items);
  const comboboxControlledItems = controlledItems ? controlledItems : inputItems;
  const setComboboxControlledItems = setControlledItems ? setControlledItems : setInputItems;
  // Sync inputItems with items prop when it changes
  React.useEffect(() => {
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
  } = downshift.useCombobox(Object.assign(Object.assign(Object.assign({}, downshiftProps), environment === undefined ? {} : {
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
      if (inputValue && type === downshift.useCombobox.stateChangeTypes.InputBlur) {
        // find item which has the same value as the input value
        const item = comboboxItems.find(item => item.value.toLowerCase() === inputValue.toLowerCase());
        if (item) {
          selectItem(item);
        }
      } else if (inputValue === '' && type === downshift.useCombobox.stateChangeTypes.InputBlur) {
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
    componentFn: ydsIconsReact.Search,
    ariaLabel: searchIconLabel
  };
  React.useEffect(() => {
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
    restDownshiftProps = tslib_es6.__rest(downshiftInputProps, ["onChange"]);
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
  return jsxRuntime.jsx(Combobox_styles.ComboboxContainer, {
    "$isDisabled": isDisabled,
    children: jsxRuntime.jsx(TextInput.TextInput, Object.assign({
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
        componentFn: ydsIconsReact.ChevronDown,
        ariaLabel: toggleButtonText,
        props: Object.assign({}, getToggleButtonProps())
      },
      iconBefore: iconBefore || iconBeforeDefault,
      showLoadingIndicator: loading,
      iconClear: inputValue && !hideClearButton ? {
        componentFn: ydsIconsReact.CloseSmall,
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
      children: jsxRuntime.jsx(Combobox_styles.ComboboxMenu, Object.assign({}, getMenuProps(), {
        "$menuSize": menuSize,
        "$isOpen": isOpen,
        "$menuMaxHeight": menuMaxHeight,
        children: isOpen && loading ? jsxRuntime.jsxs(Combobox_styles.ComboboxMenuItem, {
          "$isDisabled": true,
          "$menuSize": menuSize,
          children: [jsxRuntime.jsx(MenuItem_styles.IconWrapper, {
            "$menuSize": "md",
            children: jsxRuntime.jsx(Spinner.Spinner, {
              size: "sm"
            })
          }), ' ', loadingText]
        }) : isOpen && comboboxControlledItems.length === 0 ? jsxRuntime.jsx(Combobox_styles.ComboboxMenuItem, {
          "$isDisabled": true,
          "$menuSize": menuSize,
          children: noResultsText
        }) : comboboxControlledItems.map((item, index) => jsxRuntime.jsx(ComboboxMenuItemComponent, {
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

exports.ComboboxSingleSelect = ComboboxSingleSelect;
exports.DefaultComboboxMenuItem = DefaultComboboxMenuItem;
