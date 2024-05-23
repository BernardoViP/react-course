import '../../../styles.css'
import { Check } from '../../assets/images';

const benefits = [
  1 ,2 ,3 ,4 ,5
]

function PriceBenefits(){
  return (
    <div className="price-benefits">
      <img src={Check} alt="Check" />
      <p>Feature text goes here</p>
    </div> 
  );
}

export default function PriceContent() {
  return (
      <div className="box-container">
        <div className="price-content">
        <h1>Basic plan</h1>
        <h2>$19/mo</h2>
        <p>or $199 yearly</p>
        {benefits.map((benef) =>{

        return <PriceBenefits key={benef}/>
        })}
          <div className="button-start">
              <p>Get started</p>
        </div>
      </div>
    </div>
  );
}
