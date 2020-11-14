import Amplify, { Auth, Cache } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

var username= "haugf";
var password= "zxerctvybunmASD7)";
const email= "freddy@activetheory.net";

async function signUp() {
    try {

        username = document.getElementById("username-field").value;
        password = document.getElementById("password-field").value;

        const { user } = await Auth.signUp({
            username,
            password,
            attributes: {
                email,          // optional
                // other custom attributes 
            }
        });
        console.log(user);
    } catch (error) {
        console.log('error signing up:', error);
    }
}

async function confirmSignUp(){
    try {
        await Auth.confirmSignUp("FreddyHaug", "714032")
        console.log(user);
    } catch (error) {
        console.log('error signing up:', error);
    } 
}

async function signIn() {
    try {
        username = document.getElementById("username-field2").value;
        password = document.getElementById("password-field2").value;

        const user = await Auth.signIn(username, password);
        // return Auth.userAttributes(user);
        const { accessToken: { jwtToken } } = await Auth.currentSession();
        const x = await Auth.currentSession();
        console.log(jwtToken);

        return user;
    } catch (error) {
        console.log('error signing in', error);
    }
}

async function signOut() {
    try {
        await Auth.signOut();
    } catch (error) {
        console.log('error signing out: ', error);
    }
}

async function forgotPassword() {
    try {
        await Auth.forgotPassword("haugf6");
    } catch (error) {
        console.log('error signing out: ', error);
    }
}

const MutationButton = document.getElementById("MutationEventButton");
const SignUpButton = document.getElementById("SignUpEventButton");
const ConfirmSignUpButton = document.getElementById("ConfirmSignUpEventButton");
const SignOutButton = document.getElementById("SignOutEventButton");
const ForgotPasswordButton = document.getElementById("ForgotPasswordEventButton");

MutationButton.addEventListener("click", (evt) => {
    signIn().then((evt) => {
        console.log(evt)
            // after sign in
            // Auth.currentAuthenticatedUser().then(user => console.log(user));
            // Auth.currentCredentials().then(creds => console.log(creds));

            // console.log(Auth.currentSession); v
            
    });
  });

SignUpButton.addEventListener("click", (evt) => {
    signUp().then((evt) => {
        console.log(evt);
        

    //   MutationResult.innerHTML += `<p>${evt}</p>`;
    });
  });

ConfirmSignUpButton.addEventListener("click", (evt) => {
    confirmSignUp().then((evt) => {
        console.log(evt);
        

    //   MutationResult.innerHTML += `<p>${evt}</p>`;
    });
  });

 SignOutButton.addEventListener("click", (evt) => {
    signOut().then((evt) => {
        console.log(evt);
        
    //   MutationResult.innerHTML += `<p>${evt}</p>`;
    });
  });

  ForgotPasswordButton.addEventListener("click", (evt) => {
    forgotPassword().then((evt) => {
        console.log(evt)

            
    });
  });

