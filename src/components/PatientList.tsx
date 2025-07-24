import { usePatientStore } from "../store"
import PatientsDetails from "./PatientsDetails";

export default function PatientList() {
  const patients = usePatientStore((state) => state.patients)
  console.log(patients);
  return (
    <div className="md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll">
      {
        patients.length ? (
          <>
            <h2 className="font-black text-3xl text-center">Listado de pacientes</h2>
            <p className="text-gray-600 text-center mt-5 m-10">Administra tus  {' '}
              <span className='text-indigo-600 font-semibold'>Pacientes y Citas</span>
            </p>
            {patients.map(patient => (
                <PatientsDetails 
                key={patient.id} 
                patient={patient}
                 />
            ))}
          </>
        ) : (
          <>
            <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
            <p className="text-gray-600 text-center mt-5 m-10">Comienza agregando pacientes  {' '}
              <span className='text-indigo-600 font-semibold'>y aparecerán aquí.</span>
            </p>
          </>
        )
      }
    </div>

  )

}
