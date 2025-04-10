"use client"
import React, { FC, useEffect, useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { gsap } from "gsap";

interface FAQHomepageProps {}

const FAQHomepage: FC<FAQHomepageProps> = ({}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, xPercent: -100 },
        { opacity: 1, xPercent: 0, delay: 5, duration: 1 }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  return (
    <section ref={sectionRef} className="-mt-40 md:mt-auto lg:py-20 px-4 md:px-12 overflow-hidden">
      <p className="text-primary text-2xl lg:text-3xl 2xl:text-3xl text-center">
        Ask us anything
      </p>
      <h3 className="hidden md:block font-medium text-3xl 2xl:text-4xl text-white leading-tight mt-5 text-center">
        Frequently Asked Questions
      </h3>
      <div className="mt-10 lg:px-40 2xl:px-96">
        <Accordion className="w-full" type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Apakah course nya bisa dipelajari pemula?
            </AccordionTrigger>
            <AccordionContent>
              Di Orimi kami menyediakan course yang dibuat oleh professional
              developer yang telah terjun di dunia karir dan paham apa yang
              diperlukan agar pemula dapat memahami course dengan cepat dan
              mudah dipahami. Orimi juga menyediakan roadmap serta course basic
              yang dapat diikuti untuk memahami terlebih dahulu materi sebelum
              terjun ke course yang tingkatannya lebih kompleks.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Bagaimana cara mengikuti course di Orimi?
            </AccordionTrigger>
            <AccordionContent>
              Untuk mengikuti course di Orimi, Anda hanya perlu mendaftar akun
              terlebih dahulu, kemudian memilih course yang Anda minati. Setelah
              itu, Anda dapat mengikuti course tersebut secara online di
              platform kami. Setiap course juga dilengkapi dengan video, teks,
              dan quiz untuk memastikan Anda memahami materinya.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>
              Apakah Orimi menyediakan sertifikat setelah menyelesaikan course?
            </AccordionTrigger>
            <AccordionContent>
              Ya, setelah Anda menyelesaikan sebuah course dan lulus dalam
              penilaian akhir, Anda akan mendapatkan sertifikat yang dapat
              diunduh dan digunakan sebagai bukti keahlian baru yang telah Anda
              peroleh. Sertifikat ini bisa menjadi nilai tambah dalam CV Anda.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>
              Apakah ada dukungan untuk peserta course yang mengalami kesulitan?
            </AccordionTrigger>
            <AccordionContent>
              Tentu saja! Kami menyediakan forum diskusi dan sesi tanya jawab di
              setiap course dengan sistem group discord untuk membantu peserta
              yang mengalami kesulitan.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>
              Berapa lama akses ke course yang sudah dibeli?
            </AccordionTrigger>
            <AccordionContent>
              Anda akan memiliki akses seumur hidup ke setiap course yang sudah
              Anda beli. Ini berarti Anda dapat kembali mempelajari materi kapan
              saja dan di mana saja, tanpa batas waktu.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger>
              Apakah Orimi menyediakan kursus untuk tingkat lanjut?
            </AccordionTrigger>
            <AccordionContent>
              Ya, kami menyediakan course untuk semua tingkat keahlian, mulai
              dari pemula hingga tingkat lanjut. Anda dapat memilih course yang
              sesuai dengan tingkat keahlian Anda dan terus mengembangkan
              kemampuan Anda melalui roadmap yang telah kami sediakan.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQHomepage;
