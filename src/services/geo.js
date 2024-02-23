import axios from 'axios';                  // import axios for getting data from API

const IP = 'https://lb-servicios.apross.gov.ar/api/v1';     // IP Backend

/*=========================================*
 *=============== PROVINCIAS ===============*
 *=========================================*/

export const getProvincias = (data) => { // data values : sort, search, _selectedCategory
    return {
        type: 'GET_PROVINCIAS',
        payload: axios.get('${IP}/geo/provincias')
    }
}