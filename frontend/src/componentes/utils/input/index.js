

const InputText = ({ title, typeInput, classNameDiv, classNameTitle, classNameInput, Placeholder, value, onChange }) => {

    return (

        <div  className={classNameDiv? classNameDiv:'container-input'}>
         <p className={classNameTitle}>{title}</p>
            <input className={classNameInput} value={value} type={typeInput} placeholder={Placeholder} onChange={onChange}/>
       </div>

    );
}

export default InputText;
