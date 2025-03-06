import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './styles.module.scss';

interface Testimonial {
    id: number;
    name: string;
    years: string;
    avatar: string;
    text: string;
    rating: number;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: 'Alexander R.',
        years: '01 Year With Us',
        avatar: 'https://randomuser.me/api/portraits/men/10.jpg',
        text: 'Online invoice payment helps companies save time, are faster and save maximum effort for the clients and save maximum effort.',
        rating: 5,
    },
    {
        id: 2,
        name: 'Emily J.',
        years: '02 Years With Us',
        avatar: 'https://randomuser.me/api/portraits/women/11.jpg',
        text: 'An amazing service that transformed the way we handle invoices. Super easy and efficient!',
        rating: 4,
    },
    {
        id: 3,
        name: 'Michael D.',
        years: '03 Years With Us',
        avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
        text: 'Great tool! It made our invoicing process seamless and saved us so much time.',
        rating: 5,
    },
];

export const Testimonials = () => {
    const [activeTestimonial, setActiveTestimonial] = useState<Testimonial>(
        testimonials[0]
    );

    return (
        <div className={styles.testimonials}>
            <h2 className={styles.title}>
                Customer <span>Say</span>
            </h2>

            <Swiper
                spaceBetween={30}
                slidesPerView={2}
                loop={true}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                modules={[Pagination, Autoplay]}
                onSlideChange={(swiper) =>
                    setActiveTestimonial(testimonials[swiper.realIndex])
                }
                className={styles.swiper}
            >
                {testimonials.map((testimonial) => (
                    <SwiperSlide key={testimonial.id} className={styles.slide}>
                        {activeTestimonial.id === testimonial.id && (
                            <div className={styles.activeAuthor}>
                                <img
                                    src={activeTestimonial.avatar}
                                    alt={activeTestimonial.name}
                                    className={styles.avatar}
                                />
                                <div>
                                    <h3 className={styles.author}>
                                        {activeTestimonial.name}
                                    </h3>
                                    <p className={styles.years}>
                                        {activeTestimonial.years}
                                    </p>
                                </div>
                            </div>
                        )}
                        <p className={styles.quote}>{testimonial.text}</p>
                        <div className={styles.rating}>
                            {'★'.repeat(testimonial.rating)}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Блок с автором активного отзыва */}
        </div>
    );
};
