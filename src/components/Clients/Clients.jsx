import CLIENT_1 from "../../assets/img/c1.jpg"
import CLIENT_2 from "../../assets/img/c2.jpg"
import CLIENT_3 from "../../assets/img/c3.jpg"
import CLIENT_4 from "../../assets/img/c4.jpg"
import CLIENT_5 from "../../assets/img/c5.jpg"

export default function Clients() {
  return (
    <section className="d-flex flex-wrap align-items-center justify-content-around py-4">
        <div className="client-box">
            <img src={CLIENT_1} alt="" className="w-100" />
        </div>
        <div className="client-box">
            <img src={CLIENT_2} alt="" className="w-100" />
        </div>
        <div className="client-box">
            <img src={CLIENT_3} alt="" className="w-100" />
        </div>
        <div className="client-box">
            <img src={CLIENT_4} alt="" className="w-100" />
        </div>
        <div className="client-box">
            <img src={CLIENT_5} alt="" className="w-100" />
        </div>
    </section>
  )
}