import Container from "./Container";
import style from "../styles/MyWorks.module.css";
import Modal from "./Modal";
import WorkDetail from "./WorkDetail";
import { useState } from "react";
import { getWorks } from "../constants/myWorks";

import Card from "./Card";
import Pagenation from "./Pagenation";

export default function Works() {
  const [showDetail, setShowDetail] = useState(false);
  const [id, setId] = useState("");
  const [works, setWorks] = useState([]);

  function handleImageClick(e) {
    setShowDetail(!showDetail);
    setId(e.target.id);
  }

  return (
    <section className={style.box} id="works">
      <Modal showDetail={showDetail}>
        <WorkDetail handleImageClick={handleImageClick} id={id} />
      </Modal>
      <h2>My Works</h2>
      <div className={style.fasd}>
        <div className={style.showcase}>
          {getWorks().map((w, index) => {
            return (
              <Card key={index} handleImageClick={handleImageClick} work={w} />
            );
          })}
        </div>
      </div>
    </section>
    // <>
    //   <Modal showDetail={showDetail}>
    //     <WorkDetail handleImageClick={handleImageClick} id={id} />
    //   </Modal>
    //   <Container id="works">
    //     <h1>My Works</h1>
    //     <div className={style.window}>
    //       <div id="showcase" className={style.showCase}>
    //         {works.map((w, index) => {
    //           return (
    //             <Card
    //               key={index}
    //               handleImageClick={handleImageClick}
    //               work={w}
    //             />
    //           );
    //         })}
    //       </div>
    //     </div>
    //     <Pagenation setWorks={setWorks} />
    //   </Container>
    // </>
  );
}
