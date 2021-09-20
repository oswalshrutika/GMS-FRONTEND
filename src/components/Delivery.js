// import qrcode from '../images/qrcode.jpeg'
import Navbar from './NavBar';

const Delivery = () => {
    const date = new Date(); 
    console.log("🚀 ~ file: Delivery.js ~ line 6 ~ Delivery ~ date", date)
    const today = new Date(date);
const tomorrow = new Date(today);
//  const date = moment()
// .utcOffset('+05:30')
// .format('YYYY-MM-DD hh:mm:ss a');

    return (
        <div>
            <Navbar></Navbar>
            <h2>Order received on : 
            {new Date().toLocaleString() + ''} <br/>
            </h2>
            <h2>Order deliverd on : 
           {
            tomorrow.setDate(date)}
            {
               
              new Date.today().addDays(1).toString("dd-mm-yyyy")


                
            }
         
            </h2>

        </div>
    )
}

export default Delivery