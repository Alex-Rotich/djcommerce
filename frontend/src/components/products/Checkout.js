import React from 'react'
import { CardElement,injectStripe,Elements,StripeProvider} from 'react-stripe-elements'
import { connect } from 'react-redux'
// import {connect } from 'react-redux'
import { getItems,addCart} from '../../actions/products'
import {cartSuccess,cartUpdate} from '../../actions/cart'
import {lipaMpesa} from '../../actions/lipa'
class Checkout extends React.Component{
    state = {
        phone_no:'',
        dest:''
    }
    onClick = () => {
        console.log("hello")
        this.props.lipaMpesa()
    }
    onChange = e => {
        this.setState({[e.target.name]:e.target.value})
    }
    onSubmit = e => {
        e.preventDefault()
        const { phone_no,dest }= this.state
        if(this.props.cart){
            // console.log(this.props.cart.total)
            this.props.lipaMpesa(phone_no,this.props.cart.total,dest)
            console.log(this.props.cart.total,dest)
        }
        
        console.log("hello")
    }

    render(){
        const { phone_no,dest }= this.state
        return(
            <section id="checks">
                <div className="container">
                    <form onSubmit={this.onSubmit}>
                        <label>Your Number</label>
                        <input type="text" placeholder="2547*****" required onChange={this.onChange} name="phone_no" className="form-control" value={phone_no} />
                        <label>Shipping address</label>
                        <input type="text" placeholder="eg 33,20200 , Kericho kenya" required onChange={this.onChange} name="dest" className="form-control" value={dest} />
                        <div className="summary-details">
                        <h1>Total:{this.props.cart.total}</h1>
                            <p>Kindly choose your payment option:</p>
                            {/* <button onClick={this.onClick}>Lipa na mpesa</button> */}
                            <button className="primary-btn">Submit</button>
                        </div>
                    </form>
                    
                </div>
            </section>
        )
    }
}
const mapStateToProps = state =>({
    // products :state.products.products
    cart:state.cart.cart
})
export default connect(mapStateToProps,{cartSuccess,cartUpdate,lipaMpesa})(Checkout)