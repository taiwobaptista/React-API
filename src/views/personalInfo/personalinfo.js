import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Playlist from '../../components/card/card';
import Header from '../../components/header/header';
import textAnalyticsRequest from '../../store/store.action';
import './personalinfo.css'

function PersonalInfo() {
        return (
        <>
            <div>
                <div class="main-body">
                    <div class="content">
                        <div class="main-container-block">
                            <h2>Complete Your Purchase</h2>
                            <Header/>
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-sm">
                                        <form>
                                            <div class="form-group form-part">
                                                <label for="exampleFormControlInput1">Name</label>
                                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Opara Linus Ahmed" />
                                            </div>


                                            <div class="form-group form-part">
                                                <label for="exampleFormControlInput1">Email address</label>
                                                <p class="mini-text">The purchase reciept would be sent to this address</p>
                                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="OparaLinusAhmed@devmail.com" />
                                            </div>

                                            <div class="form-group form-part">
                                                <label for="exampleFormControlInput1">Address1</label>
                                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="The address of the user goes here" />
                                            </div>

                                            <div class="form-group form-part">
                                                <label for="exampleFormControlInput1">Address2</label>
                                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="and here" />
                                            </div>


                                            <div class="form-row form-part">
                                                <div class="form-group col-md-8">
                                                    <label for="inputEmail4">Local Government</label>
                                                    <input type="email" class="form-control" id="inputEmail4" placeholder="Surulere" />
                                                </div>
                                                <div class="form-group col-md-4 form-part" >
                                                    <label for="inputState">State</label>
                                                    <select id="inputState" class="form-control">
                                                        <option>Lagos</option>
                                                        <option>Oyo</option>
                                                    </select>
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

                                        </form>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>





                </div>
            </div>
        </>
    )
}

export default PersonalInfo;