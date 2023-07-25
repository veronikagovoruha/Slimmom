import SignInForm from "./SignInForm/SignInForm";

import { logIn } from "shared/services/api/authApi";

const SignIn = () => {

    const onSubmitHandle = (loginRequest) => {
        logIn(loginRequest).then((data) => {
            console.log(data)
        }).catch(error => console.log(error));
    }

    return (
        <>
            <SignInForm onSubmit={onSubmitHandle}/>
        </>
    )
}

export default SignIn;