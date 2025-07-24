type PatientDetailItemProps = { 
label: string;
data: string
}

export default function PatientDetailItem({label, data}:PatientDetailItemProps) {
  return (
                <p className="text-sm font-bold mb-3 text-gray-700 uppercase">{label}: { '  '}
                <span className="font-normal text-gray-500 normal-case">
                    {data}
                </span>
            </p>

  )
}
