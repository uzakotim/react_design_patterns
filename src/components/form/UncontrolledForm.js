import React from 'react';

export const UncontrolledForm = () => {
    const nameInput = React.createRef();
    const ageInput = React.createRef();
    const hairColorInput = React.createRef();
    const handleSubmit = (event) => {
        console.log(nameInput.current.value);
        console.log(ageInput.current.value);
        console.log(hairColorInput.current.value);
        event.preventDefault();
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                name='name'
                placeholder='Name'
                type='text'
                ref={nameInput}
            />
            <input
                name='age'
                placeholder='Age'
                type='number'
                ref={ageInput}
            />
            <input
                name='hairColor'
                placeholder='Hair color'
                type='text'
                ref={hairColorInput}
            />
            <input value='Submit' type='submit' />
        </form>
    );
};
