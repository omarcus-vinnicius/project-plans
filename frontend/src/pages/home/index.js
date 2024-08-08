import { Link, Route, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';




const Home = () => {
    const [users, setUsers] = useState([])
    const [ativo, setativo] = useState(false)
    const navigation = useNavigate();

    useEffect(() => { }, []);


    console.clear();
    return (
        <div id='Home'>
oiie
        </div>

    );
}

export default Home;
