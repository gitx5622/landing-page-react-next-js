import axiosConfig from '../../config/axios';
import {GET_SUBJECT_ERROR, GET_SUBJECT_SUCCESS, GET_SUBJECTS} from "../dispatchTypes";


export const getSubjects = (dispatch) => {
    dispatch({
        type: GET_SUBJECTS,
    });

    axiosConfig
        .get(`/subjects`)
        .then(response => {
            dispatch({
                type: GET_SUBJECT_SUCCESS,
                subjects: response.data,
            });
            console.log(response.data);
        })
        .catch(error => {
            dispatch({
                type: GET_SUBJECT_ERROR,
                errorMessage: error.response.data.error_message,
            });
        })
        .catch(() => {
            dispatch({
                type: GET_SUBJECT_ERROR,
                errorMessage:
                    'Lost connetion to the server. Kindly check your internet connection',
            });
        });
};
