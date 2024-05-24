import "./styles.css"
import { Team } from "./src/pattern/composition"
import { Diablo, Benimaru, Geld, Veldora, Rigurd, Rimuru} from "./src/assets/images"

const TeamUsers = [
  {
    image: Diablo,
    name: "Diablo",
    role: "Demon Duke",
    description: "Primordial Demon Summoned by Rimuru",
    socialMedia: {
      Linkedin: "",
      X: "",
      Dribble: ""
    }
  },
  {
    image: Rimuru,
    name: "Rimuru",
    role: "Jura-Tempest Federation Chancellor",
    description: "King of the monster nation known as the Jura-Tempest Federation",
    socialMedia: {
      Linkedin: "",
      X: "",
      Dribble: ""
    }
  },
  {
    image: Veldora,
    name: "Veldora",
    role: "Storm Dragon",
    description: "The Youngest Brother of the Four Strongest Dragon-kin",
    socialMedia: {
      Linkedin: "",
      X: "",
      Dribble: ""
    }
  },
  {
    image: Benimaru,
    name: "Benimaru",
    role: "Oni King",
    description: "He is the commander of Rimuru's army",
    socialMedia: {
      Linkedin: "",
      X: "",
      Dribble: ""
    }
  },
  {
    image: Rigurd,
    name: "Rigurd",
    role: "Prime Minister of Tempest",
    description: "Being the Goblin King, he is one of the strongest warriors among the goblins",
    socialMedia: {
      Linkedin: "",
      X: "",
      Dribble: ""
    }
  },
  {
    image: Geld,
    name: "Geld",
    role: "Orc King",
    description: "Former Chief Bodyguards of the Orc Lord",
    socialMedia: {
      Linkedin: "",
      X: "",
      Dribble: ""
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