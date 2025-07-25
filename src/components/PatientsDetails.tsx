import { toast} from "react-toastify";
import {type Patient } from "../types"
import PatientDetailItem from "./PatientDetailItem";
import { usePatientStore } from "../store";

type PatientDatailsProps = {
    patient: Patient;
}
export default function PatientsDetails({ patient }: PatientDatailsProps) {
    const deletePatient = usePatientStore((state)=> state.deletePatient);
    const getPatientById = usePatientStore((state)=> state.getPatientById);

    const handleDelete=()=>{
        if(window.confirm('¿Estás seguro de eliminar este paciente?')){
            deletePatient(patient.id);
            toast.error("Paciente eliminado correctamente");
        }
    }
    return (
        <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
            <PatientDetailItem label='ID' data={patient.id} />
            <PatientDetailItem label='Fecha Alta' data={patient.date.toString()} />
            <PatientDetailItem label='Nombre' data={patient.name} />
            <PatientDetailItem label='Propietrio' data={patient.caretaker} />
            <PatientDetailItem label='Email' data={patient.email} />
            <PatientDetailItem label='Síntomas' data={patient.symptoms} />
            <div className="flex flex-col md:flex-row justify-between mt-10">
                <button type="button" 
                    className="bg-indigo-600 text-white p-2 rounded-lg cursor-pointer"
                    onClick={()=> getPatientById(patient.id)}
                    >
                    Editar
                </button>
                <button type="button" 
                onClick={handleDelete} 
                className="bg-red-600 text-white p-2 rounded-lg cursor-pointer">
                    Eliminar
                </button>
            </div>
        </div>
    )
}
