export default async function PegawaiPage() {
  
    let response = await fetch("http://localhost:8001/v1/users")
    let pegawai = await response.json
    
    return (
      <h1></h1>
    )
  
}