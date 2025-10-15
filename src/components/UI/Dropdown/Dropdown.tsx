import { useEffect, useRef, useState } from "react";
import css from "./Dropdown.module.css";

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
    const [isOpen, setIsOpen] = useState(false);
    const optionsRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        function test(event: PointerEvent) {
            if (
                event.target !== buttonRef.current &&
                event.target !== optionsRef.current
            ) {
                handleClose();
            }
        }

        document.addEventListener("click", test);

        return () => {
            document.removeEventListener("click", test);
        };
    }, [isOpen]);

    function handleToggle() {
        setIsOpen((prev) => !prev);
    }

    function handleClose() {
        setIsOpen(false);
    }

    function handleClick(option: Option) {
        onChoose(option);
    }

    return (
        <div className={css.dropdown}>
            <button onClick={handleToggle} ref={buttonRef}>
                {activeOption ? activeOption.title : title}
            </button>
            {isOpen && (
                <div className={css.options} ref={optionsRef}>
                    <h4>Sort Options</h4>

                    <ul>
                        {options.map((option) => {
                            const { title, value } = option;

                            return (
                                <li
                                    className={
                                        value === activeOption?.value
                                            ? css.active
                                            : ""
                                    }
                                    onClick={() => handleClick(option)}
                                    key={value}
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
