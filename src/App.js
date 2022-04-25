import { ChatEngine } from 'react-chat-engine';
import  ChatFeed  from './components/ChatFeed' 
import LoginForm from './components/LoginForm';
import './App.css';
const projectID="e722d15c-1c99-4a6b-bcb9-e6f82aec7863"
const App=()=>{
    if(!localStorage.getItem('username')) return <LoginForm/>
    return(
        <ChatEngine
            height="100vh"
            projectID= {projectID}
            // userName={"Nidhi"}
            // userSecret={"09092000"}
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed { ...chatAppProps}/> }
            onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        />
    )
}
export default App;