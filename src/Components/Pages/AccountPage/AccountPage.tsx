import { Input } from "../../Input/Input";
import { Layout } from "../../Layout/Layout" 

export const AccountPage: React.FC = () => {
    return (<Layout
        tagName="main" 
        theme="page"
        className="accountPage"
    >
        <h2> Hello </h2>
        <Layout>
            <Input title="NAzwa użytkownika" type="text" value="ero!"/>
            <Input title="Hasło" type="password" value="ero666" />
            <Input title="Adres email" type="email" value="patryk@op.pl" />
            <Input title="Poziom" type="radio" options={['Łatwy', 'Średni', 'Trudny']} value="2" />
            <Input title="Opis" type="textarea" value="testujemy!"/>
        </Layout>

    </Layout>);
}