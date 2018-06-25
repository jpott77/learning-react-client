
export const userActions = {
    login,
    register,
    loginFacebook,
    loginGoogle,
    registerFacebook,
    registerGoogle
};

//const apiUrl = "http://localhost:3000";

function login(username, password) {
    /*const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' ,'Accept': 'application/json'},
        body: { username:username, password:password }
    };

    return fetch(`${apiUrl}/api/auth/login`, requestOptions)
        .then(handleResponse)
        .catch(err => {
            console.log('login err',  err);
        });*/
    const res = {
        status:422,
        statusMessage:'You must provide a username and a password'
    }
    return res;
}


function register(username,password) {
    /*const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(username,password)
    };*/

    //return fetch(`${apiUrl}/api/auth/register`, requestOptions).then(handleResponse);
    const res = {
        status:409,
        statusMessage:'Username already exists'
    }
    return res;
}

/*function handleResponse(response) {
    if (!response.ok) console.log(JSON.stringify(response,null,'\t'));
    return response;
}*/

function loginFacebook() {
    console.log('Logged In Facebook');
    const res = {
        status:200,
        statusMessage:'Success',
        token: "eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1YjJlMTg1ZWJjZjZmNjk5M2RmMzFjNzMiLCJpYXQiOjE1Mjk4MTUxNjQsImV4cCI6MTUyOTgxODc2NH0.ATGL5_1s3xjo8JGEPLh8_nDXumm_i0Z3Negsk6Pdp52hGSXBTxrVCyXXOafdaBEUABvb5K0pjY5gdUPdAeP_I0NW4XPTXCM9sCAgd0BudpLPkAAjzA95JszQ6q1iDKJ_hJ9-k_-8MDfD_U3VNcaqyXkR5nIa_VutGFY6uDv9hK4Doy92xSMjj6HOvJu_PjXAP9perTruhUoG7HJiRJQKx28noXIdS--oAkyb_KmWuSOlOkYNbJtBr3n2nvLwS3wqnruOJ87C60mIpib4PIl_omXN8s4nhpIz62-HWxZcgkjvBiHG8-RlD8W7nHG0QubJH2L9tqTryFfoyd8oIBQbUEQCPzWzefS-gHBoyoEXm1uUhOAApYBF0vJ0QF5XVvO3uRbdOHVQl-e8KwbwtFLA13SmbyJ3awAncQiwEgRz9Ocx3x8rYaJjV9ApjYNvL3vzNfIh-0_-Lp-9dkLKZuT7eqFKQpAOSuhCyQfMz3qe07LukeLaYYeOiHvwhwB4ncRAoRrU0-afXSAbMAWEvMOLH8fV-U2rT1SyX-hZteCfx5y3M3g0YggoNQOMcvUDtvIiOScaELK8sWhnhTaCgXFf-BnDI-eWsjrD-x9nnVk3dP5eZNgVGCHXqWRDYdOyLOONbbz-r15T3VcDGud11D2c5hYGRIoCXvZI_2XHG2M-0wA"
    }
    return res;
    
}

function loginGoogle() {
    console.log('Logged In Google');

    const res = {
        status:409,
        statusMessage:'Cannot retrieve User'
    }
    return res;
}

function registerFacebook() {
    console.log('Registered With Facebook');
    const res = {
        status:500,
        statusMessage:'Cannot Save User'
    }
    return res;
}

function registerGoogle() {
    console.log('Registered With Google');
    const res = {
        "success": true}
    return res;
    
}
