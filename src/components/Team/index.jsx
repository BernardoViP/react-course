import "./styles.css"
import { Team } from "./src/pattern/composition"
import { Diablo, Benimaru, Geld, Veldora, Rigurd, Rimuru} from "./src/assets/images"

const TeamUsers = [
  {
    image: Diablo,
    name: "Diablo",
    role: "Demon Duke",
    description: "Primordial Demon Summoned by Rimuru",
    anime: "Sobre mim",
  },
  {
    image: Rimuru,
    name: "Rimuru",
    role: "Jura-Tempest Federation Chancellor",
    description: "King of Jura-Tempest Federation",
    anime: "Sobre mim",
  },
  {
    image: Veldora,
    name: "Veldora",
    role: "Storm Dragon",
    description: "The Youngest Brother of the Four Strongest Dragon-kin",
    anime: "Sobre mim",
  },
  {
    image: Benimaru,
    name: "Benimaru",
    role: "Oni King",
    description: "He is the commander of Rimuru's army",
    anime: "Sobre mim",
  },
  {
    image: Rigurd,
    name: "Rigurd",
    role: "Prime Minister of Tempest",
    description: "Being the Goblin King Strongest Goblin",
    anime: "Sobre mim",
  },
  {
    image: Geld,
    name: "Geld",
    role: "Orc King",
    description: "Former Chief Bodyguards of the Orc Lord",
    anime: "Sobre mim",
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
                anime={user.anime}
            />
            )
})}


      </div>
      <Team.Main />
    </div>
  );
}