import React, { createRef, PureComponent } from "react";
import PropTypes from "prop-types";

const AUTO_INCREASE_INTERVAL = 50;
const AUTO_INCREASE_DELAY = 300;

const throttle = ( fn, wait ) => {

    let timer = 0;

    const cancel = () => clearTimeout( timer );

    const resultFn = () => {
        cancel();
        timer = setTimeout( fn, wait );
    };

    resultFn.cancel = cancel;

    return resultFn;
};

const removeNonNumericSymbols = str => str.replace( /[^\.,\d\-]/g, "" );

const getFractionPos = inputValue => inputValue.search( /\.|\,/ );

const addFractionIfRemoved = ( inputValue, fractionPos ) => {
    if( fractionPos === -1 || getFractionPos( inputValue ) !== -1 ){
        return inputValue;
    }
    return `${inputValue.slice( 0, fractionPos )}.${inputValue.slice( fractionPos )}`;
};

const getNumericValue = ( numericValue, min, max, alwaysAllowZero ) => {
    if( numericValue === 0 && alwaysAllowZero ){
        return 0;
    }

    return Math.max( Math.min( numericValue, max ), min );
}

const getStringValue = ( numericValue, maskLength ) => {
    /* negative zero issue */
    const missingSign = numericValue === 0 && 1 / numericValue === -Infinity ? "-" : "";
    const val = maskLength ? numericValue.toFixed( maskLength + 5 ).slice( 0, -5 ) : numericValue.toString();
    return missingSign + val;
}

class NumericInputCore extends PureComponent {

    constructor( props ){
        super( props );
        
        /* Fucking stupid and bulky replacement for componentWilReceiveProps */
        const valueProp = props.value;

        this.state = {
            valueProp,
            numericValue: props.hasOwnProperty( "value" ) ? valueProp : props.defaultValue,
            stringValue: ""
        };

        this.fractionPos = -1;
        this.caretPos = 0;
        this.inputRef = createRef();
        this.autoIncreaseInterval = null;
        this.autoIncreaseStartTimer = null;
    }

    static getDerivedStateFromProps({ value, maskLength, min, max, alwaysAllowZero }, { valueProp, stringValue, numericValue }){
        const base = value !== valueProp ? value : numericValue;
        const finalNumericValue = getNumericValue( base, min, max, alwaysAllowZero );
        const finalStringValue = getStringValue( finalNumericValue, maskLength );

        return finalStringValue !== stringValue || finalNumericValue !== numericValue || value !== valueProp ? {
            numericValue: finalNumericValue,
            stringValue: finalStringValue,
            valueProp: value
        } : null;
    }

    syncCursorPos = throttle(() => {
        const { current } = this.inputRef;
        if( document.activeElement !== current ){
            current.focus();
        }
        current.setSelectionRange( this.caretPos, this.caretPos );
    }, 10, { leading: false });

    onAfterValueChanged = () => {
        this.syncCursorPos();
        if( this.props.onChange ){
            this.props.onChange( this.state.numericValue );
        }
    }

    changeValue( newNumericValue, isRelative ){
        this.setState(({ numericValue, stringValue }) => {
            this.caretPos = this.inputRef.current.selectionStart;
            this.fractionPos = getFractionPos( stringValue );
            return {
                numericValue: isRelative ? numericValue + newNumericValue : newNumericValue
            };
        }, this.onAfterValueChanged );
    };

    changeHandler = ({ target: { value } }) => {
        const n = value ? parseFloat(addFractionIfRemoved(removeNonNumericSymbols(value), this.fractionPos )) : 0;
        if( !Number.isNaN( n ) ){
            this.changeValue( n, false );
        }
    }

    wheelHandler = ({ deltaY }) => {
        this.changeValue( Math.sign( deltaY ) * -this.props.step, true );
    }

    increment = () => {
        this.changeValue( this.props.step, true );
    }

    decrement = () => {
        this.changeValue( -this.props.step, true );
    }

    kdHandler = e => {
        const action = this.keyActions[ e.key ];
        if( action ){
            e.preventDefault();
            action();
        }
    }

    startInterval( method ){
        if( this.autoIncreaseInterval === null ){
            method();
            this.attachIntervalEvents();
            clearTimeout( this.autoIncreaseStartTimer );
            this.autoIncreaseStartTimer = setTimeout(() => {
                this.autoIncreaseInterval = setInterval( method, AUTO_INCREASE_INTERVAL );
            }, AUTO_INCREASE_DELAY );
        }
    }

    intervaledIncrement = () => this.startInterval( this.increment )
    intervaledDecrement = () => this.startInterval( this.decrement )

    keyActions = {
        ArrowUp: this.intervaledIncrement,
        ArrowDown: this.intervaledDecrement
    }

    clearAutoIncreaseInterval = () => {
        clearInterval( this.autoIncreaseInterval );
        clearTimeout( this.autoIncreaseStartTimer );
        this.autoIncreaseInterval = null;
        this.detachIntervalEvents();
    }

    render(){

        const {
            maskLength,
            min,
            max,
            step,
            value,
            defaultValue,
            onChange,
            alwaysAllowZero,
            Component,
            ...props
        } = this.props;
    
        return (
            <Component
                {...props}
                ref={this.inputRef}
                type="text"
                value={this.state.stringValue}
                onChange={this.changeHandler}
                onWheel={this.wheelHandler}
                onKeyDown={this.kdHandler}
                data-lpignore="true"
                autoComplete="off"
            />
        );
    }

    attachIntervalEvents(){
        window.addEventListener( "keyup", this.clearAutoIncreaseInterval );
        window.addEventListener( "mouseup", this.clearAutoIncreaseInterval );
    }

    detachIntervalEvents(){
        window.removeEventListener( "keyup", this.clearAutoIncreaseInterval );
        window.removeEventListener( "mouseup", this.clearAutoIncreaseInterval );
    }

    componentDidMount(){
        this.fractionPos = getFractionPos( this.state.stringValue );
    }

    componentWillUnmount(){
        this.syncCursorPos.cancel();
        this.clearAutoIncreaseInterval();
        this.detachIntervalEvents();
    }
};

NumericInputCore.propTypes = {
    maskLength: PropTypes.number,
    alwaysAllowZero: PropTypes.bool,
    value: PropTypes.number,
    defaultValue: PropTypes.number,
    onChange: PropTypes.func,
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    Component: PropTypes.elementType
};

NumericInputCore.defaultProps = {
    maskLength: 0,
    alwaysAllowZero: false,
    defaultValue: 0,
    min: Number.MIN_SAFE_INTEGER,
    max: Number.MAX_SAFE_INTEGER,
    step: 1,
    Component: "input"
};

export default NumericInputCore;