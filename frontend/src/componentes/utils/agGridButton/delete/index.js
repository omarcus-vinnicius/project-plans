
import Swal from "sweetalert2";
import api from "../../../../connectionAPI";


const agGridButtonDelete = ({value,data}) => {

    const DeleteUser = async () => {

        Swal.fire({
            title: 'Do you want to delete this Plans?',
            text: "This action is irreversible!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delet!'

        }).then((result) => {
            if (result.isConfirmed) {

                Swal.fire(
                    'Deletado!',
                    'O usuario foi deletado com sucesso.',
                    'success'
                )
                setTimeout(() => {
                    api.delete(`/plans/${data.idPlans}`)
                        .then(() => {
                            window.location.reload();
                        }).catch(() => {

                        });
                }, 1000);

            }
        })


    }
    return (


        <span className={'ButtonSpan'} style={{ backgroundColor: '#CB5555' }} onClick={() => { DeleteUser()}}>
                Delete
            </span>


    );
}

export default agGridButtonDelete;
