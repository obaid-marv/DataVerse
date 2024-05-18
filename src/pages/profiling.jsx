import React from "react";
import * as Components from '../components/profilingcomponents';
import BackgroundAnimation from "../components/backgroundanimation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";

const Profiling = () => {
    const navigate = useNavigate();
    const back = () => {
        navigate('/');
    }
    const [signIn, toggle] = React.useState(true);
    return (
        <div className="relative h-screen">
            <div className="absolute w-12 z-50 top-6 left-6 h-12 bg-theme text-white rounded-lg flex items-center justify-center ">
                <button onClick={back}><FontAwesomeIcon icon={faArrowLeft} className="w-6 h-6 cursor-pointer"/></button>
                
            </div>

            <BackgroundAnimation />
            <div className="absolute inset-0 flex justify-center items-center z-10 font-poppins">
                <Components.Container>
                    <Components.SignUpContainer signinIn={signIn}>
                        <div className="flex justify-center mt-8 -mb-8">
                            <p className="text-xl font-semibold font-abeezee">DataVerse</p>
                        </div>
                        <Components.Form>
                            <Components.Title>Create Account</Components.Title>
                            <Components.Input type='text' placeholder='Name' />
                            <Components.Input type='email' placeholder='Email' />
                            <Components.Input type='password' placeholder='Password' />
                            <Components.Button>Sign Up</Components.Button>
                        </Components.Form>
                    </Components.SignUpContainer>

                    <Components.SignInContainer signinIn={signIn}>
                        <div className="flex justify-center mt-8 -mb-8">
                            <p className="text-xl font-semibold font-abeezee">DataVerse</p>
                        </div>
                        <Components.Form>
                            <Components.Title>Sign in</Components.Title>
                            <Components.Input type='email' placeholder='Email' />
                            <Components.Input type='password' placeholder='Password' />
                            <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                            <Components.Button>Sign In</Components.Button>
                        </Components.Form>
                    </Components.SignInContainer>

                    <Components.OverlayContainer signinIn={signIn}>
                        <Components.Overlay signinIn={signIn}>

                            <Components.LeftOverlayPanel signinIn={signIn}>
                                <Components.Title>Hello, Buddy!</Components.Title>
                                <Components.Paragraph>
                                    Register with us and start your practical journey right away!
                                </Components.Paragraph>
                                
                                <Components.GhostButton onClick={() => toggle(true)}>
                                    Sign In
                                </Components.GhostButton>
                            </Components.LeftOverlayPanel>

                            <Components.RightOverlayPanel signinIn={signIn}>
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
        </div>
    )
}

export default Profiling;
