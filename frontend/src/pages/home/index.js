import "ag-grid-community/styles/ag-grid.css"; 
import "ag-grid-community/styles/ag-theme-quartz.css"; 
import { useState } from 'react';
import AgGridtable from '../../componentes/agGrid';
import ButtonInput from '../../componentes/utils/button';
import InputText from '../../componentes/utils/input';




const Home = () => {
   const [register, setregister] = useState([{
    
   }])

    const [boxinput, setBoxInput] = useState(false)

    const setONBoxInput = () =>{
        setBoxInput(!boxinput)

        setTimeout(()=>{
            var heightPage = document.body.scrollHeight;
            window.scrollTo(0, heightPage);
        },300)
       
    }

    const SendRegister = () =>{

    }


    return (

        <section id='Home' >
            <div className='home_grid_button_add'>
                <AgGridtable></AgGridtable>

                <span className='home_button_add'>
                    <ButtonInput valueButton={'Add + '} colorButton={'green'} opacity={'90%'} onClick={() => { setONBoxInput()}}/>
                </span>
            </div>
         
            <div className={boxinput ?'boxinput':'OFF'}>
                <div className='input_register'>
                    <InputText title={'Title'} />
                    <InputText title={'locations:'} />
                    <InputText title={'Date'} typeInput={'date'} Value={'yyyy-mm-dd'} />
                    <InputText title={'participants'} typeInput={'textarea'} />
                </div>
             
                
                <div className='textarea_register'>

                    <span className='span_textarea'>
                        <label>Descriptions</label>
                        <textarea placeholder='Write here ...'></textarea>
                    </span>
                
                   <span>
                        <ButtonInput valueButton={'Cancel'} colorButton={'#868585'} opacity={'81%'} onClick={() => { setONBoxInput() }} />
                        <ButtonInput valueButton={'Send'} colorButton={'#155184'} colorText={'#ffff'} opacity={'90%'} onClick={() => { SendRegister() }} />
                    </span>
              
                </div>
           </div>

        </section>
       

    );
}

export default Home;
