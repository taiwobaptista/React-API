import React from 'react';
import Header from '../../components/header/header';
import "./confirmpayment.css"


function ConfirmPayment() {
    return (
        <div>
            <div class="main-body">
                <h1>Complete your Purchase</h1>
                <Header/>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm">
                            <div class="content">
                                <div class="heading">
                                    <p id="item">items Name</p>
                                    <p id="price"> <img src="images/Vector.png" alt="" /> Price</p>
                                </div>

                                <div class="text-part">
                                    <table class="table-one">
                                        <tr>
                                            <td>Data science and usability</td>
                                            <td >50,000.00</td>
                                        </tr>

                                        <tr class="tr-one">
                                            <td>Shipping</td>
                                            <td>0.00</td>
                                        </tr>

                                    </table>
                                    <hr/>

                                        <table class="table-two">
                                            <tr>
                                                <td>Total</td>
                                                <td class="td1">50,000.00  </td>
                                            </tr>
                                        </table>

                </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm">
                                <div class="button-region">
                                    <div class="button-area">
                                        <button type="submit" class="btn mybtn">Next</button>
                                        <div class="col-sm-5 cancel"><a href="">Cancel Payment</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
    )
}

export default ConfirmPayment;