import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Playlist from '../../components/card/card';
import textAnalyticsRequest from '../../store/store.action';
import './list.css'

function ListInfo() {
    const sentiments = useSelector(state => state.sentiments);
    const dispatch = useDispatch();

    const fetchPostsByTerm = () => {
        textAnalyticsRequest('api').then((response) => {
            dispatch({
                type: 'analyzed',
                sentiments: response.data.states
            });
        }).catch((err) => {
            console.log(err)
        });

    };

    const useFetching = async (someFetchActionCreator) => {
        useEffect(() => {
            someFetchActionCreator();
        }, []);
    }

    useFetching(fetchPostsByTerm)
    return (
        <>
            <div>
                {sentiments && sentiments.map((item) => {
                    return (
                        <>
                            <Playlist countries={item}/>
                        </>
                    );
                })}
            </div>
        </>
    )
}

export default ListInfo;