import { AppContextInterface } from "../../Context/types"; 
import { Footer } from "./Footer/Footer";
import { Router } from "./Router/Router"; 
import { Toasts } from "./Toasts/Toasts";
import './Layout.scss';
import { Header } from "../Header/Header";
import { Link } from "react-router-dom";
import { PopUp } from "./PopUp/PopUp";

export const Layout: React.FC<{ context: AppContextInterface }> = ({ context }) => {
    const { dialog } = context;
    
    return (
    <main className="App">
        {/* <Header className="App__header" /> */}
        <Header
            title={"Quizzy"} 
            type="app"
            className="App__header"
            navLinks={[
                {
                    title: 'Start',
                    to: '/',
                },
                {
                    title: 'Propozycje',
                    to: 'pending',
                }
                ,
                {
                    title: 'Konto',
                    to: 'account',
                }

            ]} 
            
        >
            {(link: {
                title: string;
                to: string;
            }) => (
                <Link 
                    className="App__header-link"
                    key={link.title}
                    to={link.to} 
                >
                    {link.title}
                </Link>
            )}
        </Header>
        <Router 
            context={context}
        />
        <Toasts
            className="App__toasts"
            items={dialog.toast.list}
        />
        <Toasts
            className="App__toasts"
            items={dialog.toast.list}
        />
        <PopUp className={"App__popup"} content={dialog.popup.content} />
        <Footer className="App__footer" /> 
    </main>
);}