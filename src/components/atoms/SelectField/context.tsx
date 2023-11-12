import { createContext, Context, useContext, useState, useRef, useMemo, RefObject, useEffect } from "react";
import { useOutsideClick } from "@chakra-ui/react";
import { useDebounce } from "use-debounce";

import { Option } from ".";

interface SelectFieldContextProps {
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
}
export const SelectFieldContext = createContext<SelectFieldContextProps | undefined>(
  undefined
) as Context<SelectFieldContextProps>;

export interface SelectFieldContextProviderArgs {
  allowMultiple?: boolean;
  children: React.ReactNode;
  defaultValue?: Array<Option>;
  options: Array<Option>;
}

export const SelectFieldContextProvider = ({
  defaultValue,
  allowMultiple,
  children,
  options,
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

  function handleAddItemToSelectedList(nv: Option) {
    setValuesSelected((prev) => (allowMultiple ? prev.concat(nv) : [nv]));
  }

  function handleClearSelectedOptions() {
    setValuesSelected([]);
    setSearchValue("");
  }

  function handleRemoveItemToSelectedList(nv: Option) {
    setValuesSelected((prev) => prev.filter((item) => item.value !== nv.value));
  }

  function handleFocus(newValue: boolean) {
    setIsFocus(newValue);
  }

  function handleChangeSearchValue(nv: string) {
    setSearchValue(nv);
  }

  function closeContextualMenu() {
    setIsFocus(false);
    setSearchValue("");
  }

  function setDefaultValues(defaultValue: Option[]) {
    setValuesSelected(defaultValue);
  }

  useEffect(() => {
    if (defaultValue) setDefaultValues(defaultValue);
  }, [defaultValue]);

  return (
    <SelectFieldContext.Provider
      value={{
        allowMultiple,
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
