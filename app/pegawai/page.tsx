export default async function PegawaiPage() {  
    const response = await fetch("http://localhost:8001/v1/cuti")
    let pegawai = await response.json
    
    return (
      <h1>{}</h1>
    )
  
}