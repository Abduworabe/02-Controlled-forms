import { use, useEffect, useState } from "react";

const ControlledForm = () => {

    const [error, setError] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState();
    const nameonChangeHandler = (e) => {
        setName(e.target.value);
    };
    const ageonChangeHandler = (e) => {
        setAge(e.target.value)
    };
    useEffect(() => {
        name.length < 3 ? setError('pleas enter valied name!!') : setError('')

    }, [name]);
    const FormSubmitHandler=(e)=>{
        e.preventDefault();
        console.log(name+ age)
        setName('');
        setAge('');
    };
    return <>
        {error && <p>{error}</p>}
        <form action="" onSubmit={FormSubmitHandler}>
            <label htmlFor="name">Nmae:</label>
            <input type="text" id="name" placeholder="Name" value={name} onChange={nameonChangeHandler} />
            <label htmlFor="age">Age:</label>
            <input type="number" id="age" placeholder="Age" value={age} onChange={ageonChangeHandler} />

           
        <button type="submit">Submit</button>
        </form>
    </>
};
export default ControlledForm;