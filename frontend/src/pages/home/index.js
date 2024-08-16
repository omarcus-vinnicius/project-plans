import "ag-grid-community/styles/ag-grid.css"; 
import "ag-grid-community/styles/ag-theme-quartz.css"; 
import { useEffect, useState } from 'react';
import AgGridtable from '../../componentes/agGrid';
import ButtonInput from '../../componentes/utils/button';
import InputText from '../../componentes/utils/input';
import api from "../../connectionAPI";
import Swal from "sweetalert2";




const Home = ({...dta}) => {
  
    const [inputs, setInputs] = useState({
        title: '',
        location: '',
        date: '',
        participants: '',
        descriptions: ''
})


    const setONScroll = () =>{

        setTimeout(()=>{
            var heightPage = document.body.scrollHeight;
            window.scrollTo(0, heightPage);
        },300)
       
    }

    const ValidateInput = () => {
             
        SendRegister()
        return true;
    }



      const handlerOnChange = (text, input) => {

          setInputs((prev)=>(
              { ...prev, [input]: text.target.value }
          ));

  }

  const EditRegister = (data) =>{
      console.log(data)
  }

    const SendRegister =  ()  => {

        if(dta != null){
           EditRegister()
        }else{ 
     
         api.post('/plans', {
             title: inputs.title,
             descriptions: inputs.descriptions,
             date: inputs.date,
             participants: inputs.participants,
             locations: inputs.location
        })
            .then((data) => {
                Swal.fire({
                    title: data.res,
                    text: "success to register",
                    icon: 'success',
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'OK!'

                })
                setTimeout(window.location.reload(), 1000)
                
            }).catch(() => {
                Swal.fire({
                    text: "Unable to register",
                    icon: 'error',
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'OK!'

                })
            });

        }
    }


    useEffect(() => {
      
    }, [])

    return (

        <section id='Home' >
         
            <div className={'boxinput'}>
                <div className='input_register'>
                    <InputText title={'Title'} onChange={(text) => { handlerOnChange(text, 'title') }} value={inputs.title}/>
                    <InputText title={'Locations:'} onChange={(text) => { handlerOnChange(text, 'location') }} value={inputs.location} />
                    <InputText title={'Date'} typeInput={'date'} onChange={(text) => { handlerOnChange(text, 'date') }} value={inputs.date} />
                    <InputText title={'Participants'} typeInput={'textarea'} onChange={(text) => { handlerOnChange(text, 'participants') }} value={inputs.participants} />
                </div>
             
                
                <div className='textarea_register'>

                    <span className='span_textarea'>
                        <label>Descriptions</label>
                        <textarea placeholder='Write here ...' onChange={(text) => { handlerOnChange(text, 'descriptions') }} value={inputs.descriptions}></textarea>
                    </span>
                
                   <span>
                        <ButtonInput valueButton={'Cancel'} colorButton={'#868585'} opacity={'81%'} onClick={() => { setONScroll() }} />
                        <ButtonInput valueButton={'Send'} colorButton={'#155184'} colorText={'#ffff'} opacity={'90%'} onClick={() => { ValidateInput() }} />
                    </span>
              
                </div>
           </div>

            <div className='home_grid_button_add'>
                <AgGridtable></AgGridtable>
            </div>


        </section>
       

    );
}

export default Home;
