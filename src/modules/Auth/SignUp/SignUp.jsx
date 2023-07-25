import SignUpForm from "./SignUpForm/SignUpForm";

import { logUp } from "shared/services/api/authApi";

const SignUp = () => {

    const onSubmitHandle = (loginRequest) => {
        logUp(loginRequest).then((data) => {
            console.log(data)
        }).catch(error => console.log(error));
    }

    return(
        <>
        <SignUpForm onSubmit={onSubmitHandle} />
        </>
    )
}

export default SignUp;