import '../../../styles.css'
import { Check } from '../../assets/images';

const benefits = [
  1 ,2 ,3 ,4 ,5
]

function PriceBenefits(props){
  return (
    <div className="price-benefits">
      <img src={props.image ?  props.image : Check} alt="Check" />
      <p>{props.text}</p>
    </div> 
  );
}

export default function PriceContent(props) {
  return (
      <div className="box-container">
        <div className="price-content">
        <h1>{props.basic}</h1>
        <h2>{props.month}</h2>
        <p>{props.yearly}</p>
        {benefits.map((benef) =>{

        return <PriceBenefits key={benef}/>
        })}
          <div className="button-start">
              <p>{props.button}</p>
        </div>
      </div>
    </div>
  );
}
