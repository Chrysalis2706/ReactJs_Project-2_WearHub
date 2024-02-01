import React from "react";
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

const SignIn = () => {
    
    const logGoogleuser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };

    return (
        <div>
            <h1>This is your sign in!</h1>
            <button onClick={logGoogleuser}>On click with signInWithGooglePopup</button>
        </div>
    );
};

export default SignIn;