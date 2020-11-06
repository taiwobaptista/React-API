import React from 'react';
import { useSelector } from "react-redux";
import Header from '../../components/header/header';
import './billingInfo.css'

function BillingInfo() {
    const sentiments = useSelector(state => state.sentiments);
    return (
        <>
            <div>
                <div className="main-body">
                
                    <div className="content">
                        <h1>Complete your purchase</h1>
                        <Header/>
                        <div className="container-fluid cont-area">
                            <div className="row billing">
                                <div className="col-sm">
                                    <form>
                                        <div className="form-group form-part">
                                            <label htmlFor="exampleFormControlInput1">Name on Card</label>
                                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Opara Linus Ahmed" />
                                        </div>


                                        <div className="form-group form-part">
                                            <label htmlFor="exampleFormControlSelect1">Card Type</label>
                                            <select className="form-control" id="exampleFormControlSelect1">
                                                <option>Visa</option>
                                                <option>Mastercard</option>
                                                <option>Verve</option>
                                            </select>
                                        </div>


                                        <div className="form-group form-partt">
                                            <div className="row">
                                                <div className="col-sm-4">
                                                    <label htmlFor="exampleFormControlInput1">Card details</label>
                                                    <input type="number" className="form-control  numb" id="exampleFormControlInput1" placeholder="44960 44960 44960 44960" required />
                                                </div>

                                                <div className="col-sm-4">
                                                    <label htmlFor="exampleFormControlInput1" className="numb22">Expiry date</label>
                                                    <input type="text" className="form-control numb2" id="exampleFormControlInput1" placeholder=" 04/12" required />
                                                </div>

                                                <div className="col-sm-3">
                                                    <label htmlFor="exampleFormControlInput1 " className="numb3">CVV</label>
                                                    <input type="number" className="form-control numb3" id="exampleFormControlInput1" placeholder=" 923" required />
                                                </div>
                                            </div>
                                        </div>


                                        <div className="row">
                                            <div className="col-sm">
                                                <div className="button-region">
                                                    <div className="button-area">
                                                        <button type="submit" className="btn mybtn">Next</button>
                                                        <div className="col-sm-5 cancel"><a href="">Cancel Payment</a></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BillingInfo;