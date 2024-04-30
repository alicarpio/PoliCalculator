import { defineStore } from 'pinia'
import axios from "axios"
import {ref} from "vue";
import { useToast } from 'primevue/usetoast';

export const useGradesStore = defineStore("grade", ()=>{
    const grade = {
        pass : false,
        grade : 0,
        missing: null,
    }

    const toast = useToast();

    /**
     * Obtiene el promedio final de un semestre.
     * @async
     * @param {object} data - Las notas del estudiante.
     */
    async function getGradeInfo(data){
        try{
            const result = await axios.post("",data)
            const gradeInfo = JSON.parse(result)

            grade.pass = gradeInfo.data.pass
            grade.grade = gradeInfo.data.grade
            grade.missing = gradeInfo.data.missing
        }catch(e){
            const showErrorToast = () => {
                toast.add({ severity: 'danger', summary: 'Error', detail: 'Se produjo un error' });
            };
            showErrorToast();
            console.log(e)
        }
    }
})