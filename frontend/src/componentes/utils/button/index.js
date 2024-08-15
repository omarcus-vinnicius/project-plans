
const ButtonInput = ({ valueButton, classNameDiv, classNameInput, colorButton, colorText, opacity, onClick}) => {

    return (

        <div className={classNameDiv}>
            <span className={classNameInput ? classNameInput : 'ButtonSpan'} style={{ backgroundColor: `${colorButton}`, color: `${colorText}`, opacity: opacity }} onClick={onClick}>
                {valueButton}
            </span>
       </div>

    );
}

export default ButtonInput;
