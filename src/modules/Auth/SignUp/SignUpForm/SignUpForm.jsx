import useForm from "shared/hooks/useForm";

import { initialState } from "./initialState";

const SignUpForm = ({onSubmit}) => {
    const { state, handleChange, handleSubmit } = useForm({
        onSubmit,
        initialState,
      });

    return(
        <>
        <p>Регистрация</p>
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                name="username"
                value={state['username']}
                placeholder="Enter your name"
                required
                onChange={handleChange}
            />
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
                placeholder="Enter your password"
                required
                onChange={handleChange}
            />
            <button type="submit">Регистрация</button>
        </form>
            
        </>
    )
}

export default SignUpForm;