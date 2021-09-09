import './register.css'

export default function Register() {
    return (
        <div className="register">
            <form className="registerForm">
                <label>User Name</label>
                <input type="text" className="registerInput" placeholder="Enter your UserName" />
                <label>Email</label>
                <input type="text" className="registerInput" placeholder="Enter your email" />
                <label>Password</label>
                <input type="password" className="registerInput" placeholder="Enter your password" />
                <button className="registerButton">Register</button>
            </form>
        </div>
    )
}
