const LOCAL_ENDPOINT = 'http://localhost:8000/';

export const REQUEST_PAIRING = 'REQUEST_PAIRING';
export const RECEIVE_PAIRING = 'RECEIVE_PAIRING';
export const FAILED_RECEIVE_PAIRING = 'FAILED_RECEIVE_PAIRING';

export const requestPairing = () => ({
    type : REQUEST_PAIRING
});

export const receivePairing = (json) => ({
    type: RECEIVE_PAIRING,
    data: json,
});

export const failedReceivePairing = () => ({
    type: FAILED_RECEIVE_PAIRING,
});

export const fetchPairing = () => {
    return (dispatch) => {
        dispatch(requestPairing());

        fetch(LOCAL_ENDPOINT + 'api/randpairing/', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:3000/',
                'Access-Control-Request-Method': 'GET',
                'Access-Control-Request-Headers': 'Accept',
            },
        })
            .then(response => response.json())
            .then(json => dispatch(receivePairing(json)),
                () => dispatch(failedReceivePairing()))
            .catch(function (error) {
                console.error(error);
            });
    }
};
