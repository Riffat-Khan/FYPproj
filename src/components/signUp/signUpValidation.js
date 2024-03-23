const Validation = (VALUES) => {
    
    let error = {};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/ ;

    if (VALUES.username === "") 
        error.username = 'Username should not be empty';
    else 
        error.username = '';

    if (VALUES.email === "") 
        error.email = 'Email should not be empty';
    else if (!email_pattern.test(VALUES.email)) 
        error.email = 'Email did not match';
    else 
        error.email = '';

    if (VALUES.password === "") 
        error.password = 'Password should not be empty';
    else if (!password_pattern.test(VALUES.password)) 
        error.password = 'Password did not match';
    else 
        error.password = '';

    return error;
}

export default Validation