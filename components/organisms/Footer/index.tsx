import Image from "next/image";
import Footer1 from "../../molecules/FooterItem/footer1";
import Footer2 from "../../molecules/FooterItem/footer2";
import Footer3 from "../../molecules/FooterItem/footer3";

export default function Footer() {
  return (
    <section className="footer pt-50">
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 text-lg-start text-center">
              <a href="" className="mb-30">
                <Image
                  src="/icon/logoicon.svg"
                  width={60}
                  height={60}
                  alt="logo icon"
                />
              </a>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                StoreGG membantu gamers
                <br /> untuk menjadi pemenang sejati
              </p>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                Copyright 2021. All Rights Reserved.
              </p>
            </div>
            <div className="col-lg-8 mt-lg-0 mt-20">
              <div className="row gap-sm-0">
                <Footer1 title="Company" />
                <Footer2 />
                <Footer3 />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
