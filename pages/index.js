import Layout from '../components/Layout'
import Character from '../components/Character'
import useSWR from 'swr'
import { useState } from 'react'

const Index = (props) => {

    const [characters, setCharacters] = useState(props.data)

    const fetchStudents = async () => {
        const res = await fetch('http://hp-api.herokuapp.com/api/characters/students')
        const data = await res.json()
        setCharacters(data)
    }

    const fetchStaff = async () => {
        const res = await fetch('http://hp-api.herokuapp.com/api/characters/staff')
        const data = await res.json()
        setCharacters(data)
    }

    const fetchAll = async () => {
        const res = await fetch('http://hp-api.herokuapp.com/api/characters')
        const data = await res.json()
        setCharacters(data)
    }

    return (
        <Layout fStudents={fetchStudents} fStaff={fetchStaff} fAll={fetchAll}>
            <div className="row text-center mx-auto">
                {
                    characters.map(elem => (
                        <div className="col-sm-12 col-md-4 col-lg-2" key={elem.name}>
                            <Character character={elem} />
                        </div>
                    ))
                }
            </div>
        </Layout>
    );
}

export async function getStaticProps(context) {

    const res = await fetch('http://hp-api.herokuapp.com/api/characters')
    const data = await res.json()

    return {
        props: {data}
    }
}

export default Index