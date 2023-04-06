import React, { useRef, useState } from "react";
import { Link, Routes, Route } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

function Section2(props) {
  let testdata = props.data;
  // console.log("상품리스트", testdata);
  return (
    <>
      <section className="sec2 mw">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {testdata.map((a, i) => {
            return (
              <>
                <SwiperSlide className="list" key={i}>
                  <Card item={a} />
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
      </section>
    </>
  );
}
function Card(props) {
  let dataList = props.item;
  return (
    <>
      <div className="productCon">
        <img src={`/img/${dataList.img}`} alt={dataList.title}></img>
      </div>
      <div class="dec">
        <p>{dataList.id + 1}</p>
        <p>{dataList.title}</p>
        <Link to={`/detail/${dataList.id}`}>자세히보기</Link>
      </div>
    </>
  );
}

export default Section2;
