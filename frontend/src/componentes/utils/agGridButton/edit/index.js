/* eslint-disable react-hooks/rules-of-hooks */
import { NavLink, useNavigate} from 'react-router-dom';

const agGridButtonEdit = ({data }) => {

  
    const navigation = useNavigate();
    const sendEdit = () =>{
        navigation(`/home/edit/${data['idPlans']}`);
    }
   

    return (


        <span className={'ButtonSpan'} style={{ backgroundColor: '#044A85' }} onClick={() => { sendEdit()}}>
            Edit
        </span>
       

    );
}

export default agGridButtonEdit;
