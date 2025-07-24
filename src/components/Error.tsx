
export default function Error({ children }: { children: React.ReactNode}) {
  return (
    <p className="text-center bg-red-500 text-white/80 font-bold p-2 rounded-lg">{children}</p>
  )
}
