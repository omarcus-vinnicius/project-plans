

const InputText = ({ title, typeInput, classNameDiv, classNameTitle, classNameInput, Placeholder, Min, Max, Value }) => {

    return (

        <div  className={classNameDiv? classNameDiv:'container-input'}>
         <p className={classNameTitle}>{title}</p>
            <input className={classNameInput} value={Value} type={typeInput} placeholder={Placeholder} min={Min} max={Max}/>
       </div>

    );
}

export default InputText;
