"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function TwoColumnsGallery() {
    useEffect(() => {
        // Load MixItUp only on the client
        import("mixitup").then((mixitupLib) => {
            const mixitup = mixitupLib.default;
            const container = document.querySelector("#portfolio");

            // Prevent multiple initializations
            if (container && !container.classList.contains("mixitup-bound")) {
                mixitup(container, {
                    selectors: { target: ".mix" },
                    animation: { duration: 300 },
                });

                container.classList.add("mixitup-bound");
            }
        });
    }, []);

    return (
        <>
            {/* Page Banner */}
            <div id="page-banner-area" className="page-banner">
                <div className="page-banner-title">
                    <div className="text-center">
                        <h2>Gallery</h2>
                        <Link href="/">
                            <i className="lni-home"></i> Home
                        </Link>
                        <span className="crumbs-spacer">
                            <i className="lni-chevron-right"></i>
                        </span>
                        <span className="current">Gallery</span>
                    </div>
                </div>
            </div>

            {/* Portfolio Section */}
            <section id="portfolio-section" className="section-padding">
                <div className="container">

                    {/* Filter Buttons */}
                    <div className="row">
                        <div className="col-12">
                            <div className="controls text-center">
                                <button className="filter active btn btn-common" data-filter="all">
                                    All
                                </button>
                                <button className="filter btn btn-common" data-filter=".design">
                                    Living Room
                                </button>
                                <button className="filter btn btn-common" data-filter=".development">
                                    Bedroom
                                </button>
                                <button className="filter btn btn-common" data-filter=".print">
                                    Kitchen
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Portfolio Items */}
                    <div id="portfolio" className="row wow fadeInDown">

                        {/* Item 1 */}
                        <div className="col-md-6 col-sm-6 col-lg-6 mix development print">
                            <div className="portfolio-box">
                                <div className="img-thumb">
                                    <Image src="/assets/img/gallery/img-1.jpg" alt="Gallery" width={800} height={500} className="img-fluid" />
                                </div>
                                <div className="overlay-box text-center">
                                    <Link href="/assets/img/gallery/img-1.jpg" className="lightbox">
                                        <i className="lni-zoom-in"></i>
                                    </Link>
                                    <h3>Project Title</h3>
                                </div>
                            </div>
                        </div>

                        {/* Item 2 */}
                        <div className="col-md-6 col-sm-6 col-lg-6 mix design print">
                            <div className="portfolio-box">
                                <div className="img-thumb">
                                    <Image src="/assets/img/gallery/img-2.jpg" alt="Gallery" width={800} height={500} className="img-fluid" />
                                </div>
                                <div className="overlay-box text-center">
                                    <Link href="/assets/img/gallery/img-2.jpg" className="lightbox">
                                        <i className="lni-zoom-in"></i>
                                    </Link>
                                    <h3>Project Title</h3>
                                </div>
                            </div>
                        </div>

                        {/* Item 3 */}
                        <div className="col-md-6 col-sm-6 col-lg-6 mix development">
                            <div className="portfolio-box">
                                <div className="img-thumb">
                                    <Image src="/assets/img/gallery/img-3.jpg" alt="Gallery" width={800} height={500} className="img-fluid" />
                                </div>
                                <div className="overlay-box text-center">
                                    <Link href="/assets/img/gallery/img-3.jpg" className="lightbox">
                                        <i className="lni-zoom-in"></i>
                                    </Link>
                                    <h3>Project Title</h3>
                                </div>
                            </div>
                        </div>

                        {/* Item 4 */}
                        <div className="col-md-6 col-sm-6 col-lg-6 mix development design">
                            <div className="portfolio-box">
                                <div className="img-thumb">
                                    <Image src="/assets/img/gallery/img-4.jpg" alt="Gallery" width={800} height={500} className="img-fluid" />
                                </div>
                                <div className="overlay-box text-center">
                                    <Link href="/assets/img/gallery/img-4.jpg" className="lightbox">
                                        <i className="lni-zoom-in"></i>
                                    </Link>
                                    <h3>Project Title</h3>
                                </div>
                            </div>
                        </div>

                        {/* Item 5 */}
                        <div className="col-md-6 col-sm-6 col-lg-6 mix development">
                            <div className="portfolio-box">
                                <div className="img-thumb">
                                    <Image src="/assets/img/gallery/img-5.jpg" alt="Gallery" width={800} height={500} className="img-fluid" />
                                </div>
                                <div className="overlay-box text-center">
                                    <Link href="/assets/img/gallery/img-5.jpg" className="lightbox">
                                        <i className="lni-zoom-in"></i>
                                    </Link>
                                    <h3>Project Title</h3>
                                </div>
                            </div>
                        </div>

                        {/* Item 6 */}
                        <div className="col-md-6 col-sm-6 col-lg-6 mix print design">
                            <div className="portfolio-box">
                                <div className="img-thumb">
                                    <Image src="/assets/img/gallery/img-6.jpg" alt="Gallery" width={800} height={500} className="img-fluid" />
                                </div>
                                <div className="overlay-box text-center">
                                    <Link href="/assets/img/gallery/img-6.jpg" className="lightbox">
                                        <i className="lni-zoom-in"></i>
                                    </Link>
                                    <h3>Project Title</h3>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Fix for MixItUp Layout */}
            <style jsx>{`
                #portfolio .mix {
                    display: inline-block !important;
                    vertical-align: top;
                }
            `}</style>
        </>
    );
}
