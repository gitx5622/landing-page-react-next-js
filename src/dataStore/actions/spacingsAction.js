import axiosConfig from '../../config/axios';
import {GET_SPACING, SPACING_ERROR, SPACING_SUCCESS} from "../dispatchTypes";


export const getSpacing = (dispatch) => {
    dispatch({
        type: GET_SPACING,
    });

    axiosConfig
        .get(`/spacings`)
        .then(response => {
            dispatch({
                type: SPACING_SUCCESS,
                spacings: response.data,
            });
            console.log(response.data);
        })
        .catch(error => {
            dispatch({
                type: SPACING_ERROR,
                errorMessage: error.response.data.error_message,
            });
        })
        .catch(() => {
            dispatch({
                type: SPACING_ERROR,
                errorMessage:
                    'Lost connetion to the server. Kindly check your internet connection',
            });
        });
};
