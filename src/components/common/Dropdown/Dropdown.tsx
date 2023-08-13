import IconDropdown from "@/assets/icons/IconDropdown";
import { useBoolean } from "@/hooks/useBoolean";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { color } from "@/styles/color.style";
import { font, fontWeight } from "@/styles/font.style";
import { CSSProperties, useRef } from "react";
import { styled } from "styled-components";
import Text from "../Text/Text";

interface PropTypes {
  name: string;
  value: string;
  list: string[] | { value: string; content: string }[];
  onChange: (name: string, value: string) => void;
  placeholder?: string;
  width?: CSSProperties["width"];
  label?: string;
}

const Dropdown = ({
  name,
  value,
  list,
  onChange,
  placeholder,
  width = "fit-content",
  label,
}: PropTypes) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const {
    value: isOpen,
    setFalse: closeDropdown,
    toggle: toggleIsOpen,
  } = useBoolean();

  useOnClickOutside(dropdownRef, () => {
    closeDropdown();
  });

  const handleDropdownItemClick = (value: string) => {
    onChange(name, value);
    closeDropdown();
  };

  return (
    <>
      {label && <Label>{label}</Label>}
      <div ref={dropdownRef} style={{ width }}>
        <SelectedItem onClick={toggleIsOpen}>
          <Text type="p2" weight="light" color={value ? "black" : "gray500"}>
            {value || placeholder}
          </Text>
          <IconDropdown isOpen={isOpen} />
        </SelectedItem>
        {isOpen && (
          <DropdownItemListBox>
            <DropdownItemList>
              {list.map((item) =>
                typeof item === "string" ? (
                  <DropdownItem
                    key={`dropdown ${name} ${item}`}
                    onClick={() => handleDropdownItemClick(item)}
                  >
                    {item}
                  </DropdownItem>
                ) : (
                  <DropdownItem
                    key={`dropdown ${name} ${item.value}`}
                    onClick={() => handleDropdownItemClick(item.value)}
                  >
                    {item.content}
                  </DropdownItem>
                )
              )}
            </DropdownItemList>
          </DropdownItemListBox>
        )}
      </div>
    </>
  );
};

export default Dropdown;

const Label = styled.div`
  display: inline-block;
  ${font.p3}
  color: ${color.black};
  margin-left: 8px;
  margin-bottom: 6px;
`;

const SelectedItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 42px;
  padding: 0 8px 0 14px;

  border: 2px solid ${color.black};
  border-radius: 6px;
  background-color: ${color.main};
  box-shadow: 3px 3px 0px 0px ${color.black};
  cursor: pointer;
`;

const DropdownItemListBox = styled.div`
  position: relative;
`;

const DropdownItemList = styled.div`
  position: absolute;
  width: 100%;
  margin-top: 12px;
  padding: 6px 0;
  border: 2px solid #000;
  border-radius: 6px;
  background-color: ${color.main};
  box-shadow: 3px 3px 0px 0px #000;
`;

const DropdownItem = styled.p`
  ${font.p2}
  ${fontWeight.light}
  color: ${color.black};
  padding: 2px 12px;
  cursor: pointer;
  user-select: none;

  &:hover {
    background: ${color.secondary};
  }
`;
