import './DnsCard.css'
// eslint-disable-next-line react/prop-types
function DnsCard({dnsName, IpAddress, port, status}) {
  return (
    <div className='dnsCard'>
      <p>DNS Server: {dnsName}</p>
      <p>IP Address: {IpAddress}</p>
      <p>PORT: {port}</p>
      <p>Status: {status}</p>
    </div>
  )
}

export default DnsCard