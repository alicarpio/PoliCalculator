import {defineStore} from 'pinia'
import axios from "axios"

export const useGradesStore = defineStore("grade", () => {


    /**
     * @typedef {Object} PromedioInfo
     * @property {boolean} pass
     * @property {number} grade
     * @property {number|null} missing
     */

    /**
     * @typedef {Object} NotasFinales
     * @property {number} primer_parcial
     * @property {number} segundo_parcial
     * @property {number} mejoramiento
     * @property {number} practico
     * @property {number} porcentaje_practico
     */

    /**
     * Obtiene el promedio final de un semestre.
     * @async
     * @param {NotasFinales } data - Las notas del estudiante.
     * @returns {Promise<PromedioInfo|null>} - Información del promedio final del semestre.
     */
    async function getGradeInfo(data) {
        try {
            const gradeInfo = await axios.post("http://localhost:3000/promedios", data)
            return gradeInfo.data
        } catch (e) {
            console.log(e)
            return null
        }
    }

    return {
        getGradeInfo
    }
})