import { Context, createContext, RefObject, useContext, useEffect, useMemo, useRef, useState } from "react";

import { useOutsideClick } from "@chakra-ui/react";

import { useDebounce } from "use-debounce";

import { Option } from ".";

interface SelectFieldContextProps {
  isDisabled?: boolean;
  allowSearch?: boolean;
  allowMultiple?: boolean;
  isFocus: boolean;
  boxContainerRef: RefObject<HTMLDivElement>;
  inputRepresentationRef: RefObject<HTMLInputElement>;
  options: Array<Option>;
  valuesSelected: Array<Option>;
  optionsAvailable: Array<Option>;
  searchValue: string;
  handleChangeSearchValue(value: string): void;
  handleAddItemToSelectedList(value: Option): void;
  handleRemoveItemToSelectedList(value: Option): void;
  handleFocus(focus: boolean): void;
  closeContextualMenu(): void;
  handleClearSelectedOptions(): void;
  onChange?(value: Option): void;
}
export const SelectFieldContext = createContext<SelectFieldContextProps | undefined>(
  undefined
) as Context<SelectFieldContextProps>;

export interface SelectFieldContextProviderArgs {
  allowMultiple?: boolean;
  children: React.ReactNode;
  options: Array<Option>;
  isDisabled?: boolean;
  showSearch?: boolean;
  value?: Option[];
  allowSearch?: boolean;
  onChange?(value: Option[]): void;
}

export const SelectFieldContextProvider = ({
  allowMultiple,
  children,
  options,
  isDisabled,
  allowSearch,
  value,
  onChange,
}: SelectFieldContextProviderArgs) => {
  const inputRepresentationRef = useRef<HTMLInputElement>(null);

  const [searchValue, setSearchValue] = useState("");
  const [valuesSelected, setValuesSelected] = useState<Option[]>([]);
  const [isFocus, setIsFocus] = useState(false);

  const boxContainerRef = useRef(null);

  const [searchValueDebounce] = useDebounce(searchValue, 250);

  const optionsAvailable = useMemo<Array<Option>>(() => {
    const optionsFiltered = options.filter((item) =>
      item.label.toLowerCase().includes(searchValueDebounce.toLowerCase())
    );

    return optionsFiltered;
  }, [searchValueDebounce, options]);

  useOutsideClick({ ref: boxContainerRef, handler: () => closeContextualMenu() });

  function handleChange(nv: Option[]) {
    if (onChange) onChange(nv);
    setValuesSelected(nv);
  }

  function handleAddItemToSelectedList(nv: Option) {
    const newValue = allowMultiple ? valuesSelected.concat(nv) : [nv];

    handleChange(newValue);
  }

  function handleClearSelectedOptions() {
    setSearchValue("");
    handleChange([]);
  }

  function handleRemoveItemToSelectedList(nv: Option) {
    const newValue = valuesSelected.filter((item) => item.value !== nv.value);
    handleChange(newValue);
  }

  function handleFocus(newValue: boolean) {
    if (isDisabled) return;
    setIsFocus(newValue);
  }

  function handleChangeSearchValue(nv: string) {
    setSearchValue(nv);
  }

  function closeContextualMenu() {
    setIsFocus(false);
    setSearchValue("");
  }

  useEffect(() => {
    if (value) {
      setValuesSelected(allowMultiple ? value : value.slice(0, 1));
    }
  }, [value, allowMultiple]);
  // useEffect(() => {
  //   if (value) setValuesSelected(allowMultiple ? value : value.slice(0, 1));
  // }, [allowMultiple, value]);

  return (
    <SelectFieldContext.Provider
      value={{
        allowMultiple,
        allowSearch,
        isDisabled,
        inputRepresentationRef,
        boxContainerRef,
        isFocus,
        options,
        optionsAvailable,
        valuesSelected,
        searchValue,
        handleClearSelectedOptions,
        closeContextualMenu,
        handleChangeSearchValue,
        handleFocus,
        handleAddItemToSelectedList,
        handleRemoveItemToSelectedList,
      }}
    >
      {children}
    </SelectFieldContext.Provider>
  );
};

const useSelectFieldContext = () => {
  const context = useContext(SelectFieldContext);
  if (context === undefined) {
    throw new Error("useSelectFieldContext must be used within a SelectFieldContextProvider");
  }
  return context;
};

export default useSelectFieldContext;
