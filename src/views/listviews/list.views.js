import React, { useEffect } from 'react';
import {  useDispatch, useSelector } from "react-redux";
import textAnalyticsRequest from '../../store/store.action';
import './list.css'

function ListInfo() {
    const sentiments = useSelector(state => state.sentiments);
    const dispatch = useDispatch();

    const fetchPostsByTerm = () => {
          textAnalyticsRequest('api').then((response)=>{
            console.log(">>>>>>sentimentsResult>>>>>",response)
            return {
              type: 'analyzed',
              sentiments:response.data.states
            };
        }).catch((err)=>{
            console.log(err)
        });
        
      };

      const useFetching = (someFetchActionCreator) => {
        const dispatch = useDispatch();
        useEffect(() => {
            dispatch(someFetchActionCreator());
        }, []);
    }
    useFetching(fetchPostsByTerm)

      
    
      
    
    return (
        <>
            <div>
                {/* hello {sentiments} */}
                {/* {sentiments && sentiments.states.map((item) => {
                    return (
                    <>
                      hello new 
                          
                      <span key={item._id}>{item}</span>
                    </>
                    );
                })} */}
            </div>
        </>
    )
}

export default ListInfo;