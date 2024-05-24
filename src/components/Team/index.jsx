import "./styles.css"
import { Team } from "./src/pattern/composition"

const TeamUsers = [
    {
        image:"https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/114.png",
        name:"Bernardo Vieira",
        role:"Estudante",
        description:"Aprendiz do trigrinho",
            socialMedia:{
                Linkedin:"https://br.linkedin.com/",
                X:"https://x.com/?lang=pt-br",
                Dribble:"https://dribbble.com/"  
            }
    },
]

export default function TeamComposition() {
  return (
    <div className="team-container">
      <Team.Section />
      <div className="team-content-wrapper">
        
        {
            TeamUsers.map((user, key) => {
            return(
                <Team.Content
                key= {key}
                image={user.image}
                name={user.name}
                role={user.role}
                description={user.description}
                Linkedin={user.socialMedia.Linkedin}
                X={user.socialMedia.X}
                Dribble={user.socialMedia.Dribble}
            />
            )
})}


      </div>
      <Team.Main />
    </div>
  );
}