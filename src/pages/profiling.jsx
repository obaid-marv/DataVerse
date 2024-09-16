import { useState } from "react";
import * as Components from '../components/profilingcomponents';
import BackgroundAnimation from "../components/backgroundanimation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import API_BASE__URL from "../config/api";

const Profiling = () => {
    const navigate = useNavigate();

    const back = () => {
        navigate('/app');
    }
    const [signIn, toggle] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setusername] = useState('');
    const [showSuccess, setShowSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        console.log(email, password);
        try {
            const response = await axios.post(`${API_BASE__URL}/auth/login`, {
                email,
                password
            }, { withCredentials: true });

            if (response.status === 200) {
                setShowSuccess(true);
                setTimeout(() => {
                    setShowSuccess(false);
                    navigate('/app/dashboard');
                }, 2000)
            } else {
                console.log("Incorrect email or password");
            }
        } catch (err) {
            console.log(err);
        }
    }

    const handleSignUp = async (e) => {
        e.preventDefault();

        const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/;

        if (!passwordRegex.test(password)) {
            setError('Password must be at least 8 characters long, contain at least one uppercase letter and one special character.');
            return;
        }

        try {
            const response = await axios.post(`${API_BASE__URL}/auth/register`, {
                username,
                email,
                password
            })
            if (response.status === 200) {
                console.log("Signup Successful");
                setError('');
                toggle(true);
                setEmail('');
                setPassword('');
            } else {
                setError('Error signing up');
            }
        } catch (err) {
            console.log(err);
            setError('Error signing up');
        }
    }

    return (
        <div className="relative h-screen">
            <div className="absolute w-12 z-50 top-6 left-6 h-12 bg-theme text-white rounded-lg flex items-center justify-center">
                <button onClick={back}><FontAwesomeIcon icon={faArrowLeft} className="w-6 h-6 cursor-pointer" /></button>
            </div>

            <BackgroundAnimation />
            <div className="absolute inset-0 flex justify-center items-center z-10 font-poppins">
                <Components.Container>
                    <Components.SignUpContainer $signin={signIn}>
                        <div className="flex justify-center mt-8 -mb-8">
                            <p className="text-xl font-semibold font-abeezee">DataVerse</p>
                        </div>
                        <Components.Form>
                            <Components.Title>Create Account</Components.Title>
                            <Components.Input type='text' placeholder='Username' value={username} onChange={(e) => setusername(e.target.value)} />
                            <Components.Input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                            <Components.Input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                            {error && <div className="text-red-500 text-sm mb-2">{error}</div>}
                            <Components.Button onClick={handleSignUp}>Sign Up</Components.Button>
                        </Components.Form>
                    </Components.SignUpContainer>

                    <Components.SignInContainer $signin={signIn}>
                        <div className="flex justify-center mt-8 -mb-8">
                            <p className="text-xl font-semibold font-abeezee">DataVerse</p>
                        </div>
                        <Components.Form>
                            <Components.Title>Sign in</Components.Title>
                            <Components.Input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                            <Components.Input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                            <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                            <Components.Button onClick={handleLogin}>Sign In</Components.Button>
                        </Components.Form>
                    </Components.SignInContainer>

                    <Components.OverlayContainer $signin={signIn}>
                        <Components.Overlay $signin={signIn}>
                            <Components.LeftOverlayPanel $signin={signIn}>
                                <Components.Title>Hello, Buddy!</Components.Title>
                                <Components.Paragraph>
                                    Register with us and start your practical journey right away!
                                </Components.Paragraph>
                                <Components.GhostButton onClick={() => toggle(true)}>
                                    Sign In
                                </Components.GhostButton>
                            </Components.LeftOverlayPanel>

                            <Components.RightOverlayPanel $signin={signIn}>
                                <Components.Title>Welcome Back to DataVerse!</Components.Title>
                                <Components.Paragraph>
                                    To keep connected with us please login with your personal info
                                </Components.Paragraph>
                                <Components.GhostButton onClick={() => toggle(false)}>
                                    Sign Up
                                </Components.GhostButton>
                            </Components.RightOverlayPanel>
                        </Components.Overlay>
                    </Components.OverlayContainer>
                </Components.Container>
            </div>
            {showSuccess && (
                <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-50 bg-green-500 text-white px-4 py-2 rounded">
                    Login successful!
                </div>
            )}
        </div>
    )
}

export default Profiling;
