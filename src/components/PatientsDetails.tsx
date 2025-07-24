import {type Patient } from "../types"
import PatientDetailItem from "./PatientDetailItem";
import { usePatientStore } from "../store";

type PatientDatailsProps = {
    patient: Patient;
}
export default function PatientsDetails({ patient }: PatientDatailsProps) {
    const deletePatient = usePatientStore((state)=> state.deletePatient);
    return (
        <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
            <PatientDetailItem label='ID' data={patient.id} />
            <PatientDetailItem label='Fecha Alta' data={patient.date.toString()} />
            <PatientDetailItem label='Nombre' data={patient.name} />
            <PatientDetailItem label='Propietrio' data={patient.caretaker} />
            <PatientDetailItem label='Email' data={patient.email} />
            <PatientDetailItem label='Síntomas' data={patient.symptoms} />
            <div className="flex justify-between mt-10">
                <button type="button" className="bg-indigo-600 text-white p-2 rounded-lg cursor-pointer">
                    Editar
                </button>
                <button type="button" 
                onClick={()=>deletePatient(patient.id)} 
                className="bg-red-600 text-white p-2 rounded-lg cursor-pointer">
                    Eliminar
                </button>
            </div>
        </div>
    )
}
