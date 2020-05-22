import React, { useRef } from "react";
import NumericInput from "./index";

export default { title: "Core" };

export const WholeNumber = () => (
    <NumericInput maskLength={0} />
);

export const FractionNumber = () => (
    <NumericInput maskLength={5} />
);

export const MaxMinStep = () => (
    <NumericInput maskLength={5} max={100} min={0} step={0.1} />
);

export const AlwaysAllowZero = () => (
    <NumericInput maskLength={5} max={100} min={10} alwaysAllowZero />
);

export const PrefixSuffix = () => (
    <NumericInput maskLength={5} prefix="HAHA " suffix=" HOHO" alwaysAllowZero />
);

export const WithButtons = () => {

    const ref = useRef();

    return (
        <div>
            <NumericInput ref={ref} />
            <button onClick={() => ref.current.increment()}>+</button>
            <button onClick={() => ref.current.decrement()}>-</button>
        </div>
    );
};

export const WithIntervalButtons = () => {

    const ref = useRef();

    return (
        <div>
            <NumericInput ref={ref} />
            <button onMouseDown={() => ref.current.intervaledIncrement()}>+</button>
            <button onMouseDown={() => ref.current.intervaledDecrement()}>-</button>
        </div>
    );
};

export const getValueAfterRelativeInput = () => (
    <NumericInput getValueAfterRelativeInput={( curValue, step ) => curValue ? curValue + step : 1234 } />
);