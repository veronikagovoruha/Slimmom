import useForm from "shared/hooks/useForm";

import { initialState } from "./initialState";

const SignInForm = ({onSubmit}) => {
    const { state, handleChange, handleSubmit } = useForm({
        onSubmit,
        initialState,
      });

    return (
        <>
        <p>Вход</p>
        <form onSubmit={handleSubmit}>
            <input 
                type="email"
                name="email"
                value={state['email']}
                placeholder="Enter your email"
                required
                onChange={handleChange}
            />
            <input 
                type="password"
                name="password"
                value={state['password']}
                placeholder="Enter yout password"
                required
                onChange={handleChange}
            />
             <button type="submit">Вход</button>
        </form>
        </>
    )
}

export default SignInForm;