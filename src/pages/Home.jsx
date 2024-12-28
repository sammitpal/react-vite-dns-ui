import DnsCard from "../components/DnsCard"
import Header from "../components/Header"
import './Home.css'
function Home() {
  return (
    <div className="home">
      <Header/>
      <div className="home_body">
      <DnsCard dnsName="My DNS Server" IpAddress="192.168.0.2" port="53" status="UP" key="h1"/>
      </div>
    </div>
  )
}

export default Home