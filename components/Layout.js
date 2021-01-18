import Head from 'next/head'
import Header from './Header'
import Navbar from './Navbar'

const Layout = (props) => (
    <div className="layout">
        <Head>
           <title>Harry Potter</title>
           <link rel="stylesheet" href="https://bootswatch.com/4/united/bootstrap.min.css" />
        </Head>
        <Navbar fetchS={props.fStudents} fetchSt={props.fStaff} fetchAllC={props.fAll} />
        <Header />
        <div className="container-fluid text-center">
        {props.children}
        </div>

        <style jsx>{`
                .layout{
                    height:100%;
                    width:100%;
                    background: wheat;
                }
           `}</style>

    </div>
)


export default Layout