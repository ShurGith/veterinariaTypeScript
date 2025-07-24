import {type Patient } from "../types"
import PatientDetailItem from "./PatientDetailItem";

type PatientDatailsProps = {
    patient: Patient;
}
export default function PatientsDetails({ patient }: PatientDatailsProps) {
    return (
        <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
            <PatientDetailItem label='ID' data={patient.id} />
            <PatientDetailItem label='Fecha Alta' data={patient.date.toString()} />
            <PatientDetailItem label='Nombre' data={patient.name} />
            <PatientDetailItem label='Propietrio' data={patient.caretaker} />
            <PatientDetailItem label='Email' data={patient.email} />
            <PatientDetailItem label='Síntomas' data={patient.symptoms} />
            <div className="flex justify-between gap-3 mt-10">
                <button type="button" className="bg-indigo-600 text-white p-2 rounded-lg cursor-pointer">
                    Editar
                </button>
                <button type="button" className="bg-red-600 text-white p-2 rounded-lg cursor-pointer">
                    Eliminar
                </button>
            </div>
        </div>
    )
}
