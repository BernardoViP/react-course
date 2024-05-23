import '../../../styles.css'
import { Check } from '../../assets/images';

export default function PriceContent() {
  return (
    <div>
      <div className="box-border">
      <div className="price-content">
        <h1>Basic plan</h1>
        <h2>$19/mo</h2>
        <p>or $199 yearly</p>
        <div className="price-feature">
          <p>Feature text goes here</p>
          <img src={Check} alt="Check" />
          <div>
      <div className="button-start">
              <p>Get started</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}