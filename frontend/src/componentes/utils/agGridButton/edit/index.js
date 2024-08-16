import api from "../../../../connectionAPI";
import Home from "../../../../pages/home";

const agGridButtonEdit = ({data }) => {

    const EditRegister = async () =>{
        api.get(`/plans/${data.idPlans}`)
            .then((data) => {
                Home(data.data[0])
            }).catch(() => {

            });
    }

    return (


        <span className={'ButtonSpan'} style={{ backgroundColor: '#044A85' }} onClick={()=>{EditRegister()}}>
            Edit
        </span>


    );
}

export default agGridButtonEdit;
