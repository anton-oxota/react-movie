import css from "./Dropdown.module.css";

import ChevronDownIcon from "../../../assets/icons/chevron-down.svg?react";
import { useEffect, useRef, useState } from "react";

export type Option = {
    title: string;
    value: string;
};

type DropdownProps = {
    options: Option[];
    activeOption: Option | null;
    title: React.ReactNode;
    onChoose: (selectedOption: Option) => void;
};

function Dropdown({ options, activeOption, title, onChoose }: DropdownProps) {
    const [isOpen, setIsOpen] = useState(true);

    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                wrapperRef.current &&
                !wrapperRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    function handleToggle() {
        setIsOpen((prev) => !prev);
    }

    function handleClick(option: Option) {
        onChoose(option);
        setIsOpen(false);
    }

    return (
        <div className={css.dropdown} ref={wrapperRef}>
            <button className={isOpen ? css.active : ""} onClick={handleToggle}>
                {activeOption ? activeOption.title : title}
                <ChevronDownIcon />
            </button>

            {isOpen && (
                <div className={css.options}>
                    <h4>Sort Options</h4>

                    <ul>
                        {options.map((option) => {
                            const { title, value } = option;

                            return (
                                <li
                                    key={value}
                                    className={
                                        value === activeOption?.value
                                            ? css.active
                                            : ""
                                    }
                                    onClick={() => handleClick(option)}
                                >
                                    {title}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Dropdown;
