"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import styles from "./annonce.module.css";
import Container from "../Container.tsx";
import Image from "next/image";
import Button from "../button/Button.tsx";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import Link from "next/link";

const Annonce = () => {
  const [lastSlide, setLastSlide] = useState(false);
  const [firstSlid, setFirstSlide] = useState(false);

  return (
    <Swiper
      onReachEnd={() => setLastSlide(true)}
      onReachBeginning={() => setFirstSlide(true)}
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      parallax={true}
      navigation={{
        nextEl: ".right",
        prevEl: ".left",
      }}
      autoplay={true}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      /*       pagination={{ clickable: true }} */
      loop={true}
    >
      <SwiperSlide data-swiper-autoplay="4000">
        <div className={styles.annonce}>
          <Container>
            <div className={styles.container}>
              <div className={styles.imgContainer}>
                <Image
                  className={styles.img}
                  src="/img/annonce_1.avif"
                  alt="photo d'une montre mazerati"
                  fill={true}
                  quality={100}
                />
              </div>
              <div className={`${styles.arrow} ${styles.right} right`}>
                Suivant{" "}
                <span className={styles.arrowContainer}>
                  <AiOutlineRight />
                </span>
              </div>
              {firstSlid ? (
                ""
              ) : (
                <div className={`${styles.arrow} ${styles.left} left`}>
                  <span className={styles.arrowContainer}>
                    <AiOutlineLeft />
                  </span>
                  Précedent{" "}
                </div>
              )}

              <div className={styles.floatItem}>
                <Image
                  src="/img/float_img.png"
                  className={styles.imgFloat}
                  alt="photo d'une montre mazerati"
                  width={300}
                  height={450}
                />
              </div>
              <div className={styles.welcomText}>
                <h1>Lorem, ipsum dolor.</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
                  odit corrupti facere quisquam. Porro, obcaecati.
                </p>
                <Button url="/produits" name="Découvrir" />
              </div>
            </div>
          </Container>
        </div>
      </SwiperSlide>
      <SwiperSlide data-swiper-autoplay="4000">
        <div className={styles.annonce}>
          <Container>
            <div className={styles.slideContainer}>
              <div></div>
              <div className={`${styles.arrow} ${styles.right} right`}>
                Suivant{" "}
                <span className={styles.arrowContainer}>
                  <AiOutlineRight />
                </span>
              </div>
              <div className={`${styles.arrow} ${styles.left} left`}>
                <span className={styles.arrowContainer}>
                  <AiOutlineLeft />
                </span>
                Précedent{" "}
              </div>
              <div className={styles.banniereContainer}>
                <Image
                  className={styles.img2}
                  src="/img/banniere_slide_2.png"
                  alt="bannierre marque ice watch"
                  fill={true}
                  quality={100}
                />
              </div>
              <div className={styles.btnContainer}>
                <Link href="/montres-connecté-ice-watch" className={styles.btn}>
                  découvrir
                </Link>
              </div>
            </div>
          </Container>
        </div>
      </SwiperSlide>
      <SwiperSlide data-swiper-autoplay="4000">
        <div className={styles.annonce}>
          <Container>
            <div className={styles.container}>
              <div className={styles.imgContainer}>
                <Image
                  className={`${styles.img} ${styles.imgReparation}`}
                  src="/img/reparation.jpeg"
                  alt="mécanisme d'une montre"
                  fill={true}
                  quality={100}
                />
              </div>
              {lastSlide ? (
                ""
              ) : (
                <div className={`${styles.arrow} ${styles.right} right`}>
                  Suivant{" "}
                  <span className={styles.arrowContainer}>
                    <AiOutlineRight />
                  </span>
                </div>
              )}

              <div className={`${styles.arrow} ${styles.left} left`}>
                <span className={styles.arrowContainer}>
                  <AiOutlineLeft />
                </span>
                Précedent{" "}
              </div>
              <div className={styles.floatItem}>
                <Image
                  src="/img/float_img.png"
                  className={styles.imgFloat}
                  alt="photo d'une montre mazerati"
                  width={300}
                  height={450}
                />
              </div>
              <div className={styles.welcomText}>
                <h2>Reparation.</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
                  odit corrupti facere quisquam. Porro, obcaecati.
                </p>
                <Button
                  url="/atelier-réparation-montres-lemans"
                  name="Découvrir"
                />
              </div>
            </div>
          </Container>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Annonce;
