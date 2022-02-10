import React, { Component } from 'react';
import { DataContext} from '../Context/Context';
import { Link } from 'react-router-dom';
import './Cart.css';

class Cart extends Component {
    static contextType = DataContext;

    componentDidMount(){
        this.context.getTotal();
    }

    render() {
        const { cart, reduction, aumentar, removeTeam, total } = this.context;
        if(cart.length === 0){
            return <h2 style={{textAlign:'center'}}>No tickets to purchase</h2>
        } else {
            return (
                <>
                    {
                        cart.map(item =>(
                            <section>
                                <div className="details" key={item.teamID}>
                                <img src={item.logo} alt={item.teamName} />
                                <div className="box">
                                    <div className="row">
                                        <h2>{item.teamName}</h2>
                                    </div>
                                    <p>{item.city}</p>
                                    <span>{item.price * item.count}</span>
                                    
                                </div>
                            </div>
                            <div className='cantidad'>
                                <button className='count' onClick={()=> aumentar(item.teamID)}>+</button>
                                <span>{item.count}</span>
                                <button className='count' onClick={()=> reduction(item.teamID)}>-</button>
                            </div>
                            <div className='eliminar' onClick={()=>removeTeam(item.teamID) }>X</div>
    
    
                            </section>
                            
                        ))
                    }
                    <div className='total'>
                        <Link to="/payment">Payment</Link>
                        <h3>Total: ${total} </h3>
                    </div>
                </>
            );

        }
        
    }
}

export default Cart;