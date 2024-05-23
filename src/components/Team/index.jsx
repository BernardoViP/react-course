import "./styles.css"
import { Team } from "./src/pattern/composition"

const mock = [
    1, 2, 3, 4, 5, 6
]
export default function TeamComposition() {
    return (
        <div className="team-container">
            <Team.Section />

        {mock.map((element) =>{

            return <Team.Content key={element}/>
        })}
        
            <Team.Content />
            <Team.Main />
        </div>
    )
}