import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper.min.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { Avatar } from "@mui/material";
import "swiper/css/free-mode";
import { Box, Card, CardContent } from "@material-ui/core";
import './Stories.css';

function Stories() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={false}
        loopFillGroupWithBlank={true}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
            <img width="100%" src="https://a.travel-assets.com/findyours-php/viewfinder/images/res40/482000/482003-Doha-And-Vicinity.jpg"></img>
            <div className="center">
            <Avatar className="center" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEXMzMz////JycnNzc3n5+f39/fy8vL8/Pzp6enU1NTs7Oz5+fnQ0NDZ2dnf39/09PTgONpwAAAE/ElEQVR4nO2cCZaDIBBEI64o6v1vOzoZJ+ISFZpQSeofII8KvQvcboQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEK2UQ9iL0UcpdJUt11WFyN11rU6TT9Hp1Kmq/oysSn7qjOfIFLd2qxJ9miy9vbeIpXO+l15d/pMv7FGXe1v32wjKx17oW4oXS19b4+yesN9VGl2Vt+vxix9N43dGfu0bLWLveRLmPqivpHaxF72eXTuIDBJ8neJOKq94oFzyvY9nDFz1DeSxV78GSoPgUlSxV7+IamfwEFiGlvCAb4C0XdR+fjgRAYcblQnIDBJOlyJrYjAJGljC9nDuObBJSVqdeNSqm1Tx5ayiUiUmYB0RX21m3hGg1iiytnoSBFbzhqpODoBF0+VW8O0T47miTK5fg5Yz59Kb+GwiVgluLQXjmB5YhFAIVQ41QEEJglQThQtZx4gtVHycWYkjy3rQRgjBYo1gYwUyUyPvqC50scWNpEGEpgkKEk/RLq/g+KI8jXpBEhtqmQ7wzk1SKgJUbLdQSncwuT7EZScLzVEXFPGlvZHMIFJElvaH1RIhVQYHyqkQnyFn5/xJT862aBUbR9feX9B9xRqEIVzCOzzpxjh0kVsYf98/DTxCybCoRwRxg1D5fwmtqwHX/B17eO/kH7BV26hg6U2YGfbApw2iS1pwcefGJJPGECp4o64J4J54YhscQpTks7QkuOaEioXTkgWNiitr00ql/YLlCMKC8TsFNNGb+PFQyGFuNcQhXoMpJ5ihcRgEfM6yYRAtEGNMhPeEiEFKj1flZ+hWiaK8gqBrsv5urzuyVp3ZHVTI6SN9tcsrfDXOd9WtzomM/acReR5m9JTvT1vBVwv5C+u4/95dB/xVRClZ2Fl/l8rp3hTWG6nHj9RxNJoO1xpm5P3yx/Wj8e5wt4uRjONZWPKXAs4lbH3aVEd5RHccV2gLdxItedNtVhWouu/58X9lNp+vWQxeTircaVvM6fmr/TG3aHM6o8+filq/UqUMjsDkReObvZbiNosV2G6qtlLHmVTdeuL6UsHf/IHhuJZXdZvVCGmzYr1qvMia7fu3T+rF17TdqgD59qa5CpldDfIvC++HMR1evPBvaNMWrzAUI9vi+4laKWOn4Y8LPjC3yzdiwJzysxtGVaNtEcf+EWJk+WYS4IeaoRT5WzYBvLIB2fruDhNUumTByQXPx3QFy+d78q7889aKnPlhb5wZ8GujtKaTJ8RqUxbXGu3Qg3jHMahZdHpp26jhmRZXf+6Gmig6vZ4SbmT2EdS3VW5S7cc5umT81FmvaC+7rQ26X9KvKVGt/8VgAMhoo33PHuoZOoq+6WqC99PxgFcMdR9bVfk7TTU+UNXpD8SBzkw44dwtyj2UJkcsk+eKf/nEOWpJDdR9BSCFJJfigPeN/BBsD5FyxQTYpsIuoWCmxju3QtfhJrhYEfx/ZGq3cK9KOCL0BnUcJd+/BH5YAMbZ0ZEYo0Jd4HSn0aidEM2UhEzhTZSGTNFNlKR4+CoFduEd+UG2PraeDfC4G4o4IgK2w0HR/RViFt1T/hW39jZcMQzI8IHGu9QA9w5TXh2UPCh1D+Yoo261/gOv9GThX/dhjgotfF9pSf2+k9AhVSIDxVSIT5USIX4UCEV4kOFVIgPFVIhPlRIhfhQIRXiQ4VUiA8VUiE+VEiF+FAhFeJDhVSIz9cr/AF79V2yoD2oxQAAAABJRU5ErkJggg==">
            </Avatar> 
            <div>
            Slide 1
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
          <img width="100%" src="https://a.travel-assets.com/findyours-php/viewfinder/images/res40/482000/482003-Doha-And-Vicinity.jpg"></img>
          <div className="center">
          <Avatar src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEXMzMz////JycnNzc3n5+f39/fy8vL8/Pzp6enU1NTs7Oz5+fnQ0NDZ2dnf39/09PTgONpwAAAE/ElEQVR4nO2cCZaDIBBEI64o6v1vOzoZJ+ISFZpQSeofII8KvQvcboQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEK2UQ9iL0UcpdJUt11WFyN11rU6TT9Hp1Kmq/oysSn7qjOfIFLd2qxJ9miy9vbeIpXO+l15d/pMv7FGXe1v32wjKx17oW4oXS19b4+yesN9VGl2Vt+vxix9N43dGfu0bLWLveRLmPqivpHaxF72eXTuIDBJ8neJOKq94oFzyvY9nDFz1DeSxV78GSoPgUlSxV7+IamfwEFiGlvCAb4C0XdR+fjgRAYcblQnIDBJOlyJrYjAJGljC9nDuObBJSVqdeNSqm1Tx5ayiUiUmYB0RX21m3hGg1iiytnoSBFbzhqpODoBF0+VW8O0T47miTK5fg5Yz59Kb+GwiVgluLQXjmB5YhFAIVQ41QEEJglQThQtZx4gtVHycWYkjy3rQRgjBYo1gYwUyUyPvqC50scWNpEGEpgkKEk/RLq/g+KI8jXpBEhtqmQ7wzk1SKgJUbLdQSncwuT7EZScLzVEXFPGlvZHMIFJElvaH1RIhVQYHyqkQnyFn5/xJT862aBUbR9feX9B9xRqEIVzCOzzpxjh0kVsYf98/DTxCybCoRwRxg1D5fwmtqwHX/B17eO/kH7BV26hg6U2YGfbApw2iS1pwcefGJJPGECp4o64J4J54YhscQpTks7QkuOaEioXTkgWNiitr00ql/YLlCMKC8TsFNNGb+PFQyGFuNcQhXoMpJ5ihcRgEfM6yYRAtEGNMhPeEiEFKj1flZ+hWiaK8gqBrsv5urzuyVp3ZHVTI6SN9tcsrfDXOd9WtzomM/acReR5m9JTvT1vBVwv5C+u4/95dB/xVRClZ2Fl/l8rp3hTWG6nHj9RxNJoO1xpm5P3yx/Wj8e5wt4uRjONZWPKXAs4lbH3aVEd5RHccV2gLdxItedNtVhWouu/58X9lNp+vWQxeTircaVvM6fmr/TG3aHM6o8+filq/UqUMjsDkReObvZbiNosV2G6qtlLHmVTdeuL6UsHf/IHhuJZXdZvVCGmzYr1qvMia7fu3T+rF17TdqgD59qa5CpldDfIvC++HMR1evPBvaNMWrzAUI9vi+4laKWOn4Y8LPjC3yzdiwJzysxtGVaNtEcf+EWJk+WYS4IeaoRT5WzYBvLIB2fruDhNUumTByQXPx3QFy+d78q7889aKnPlhb5wZ8GujtKaTJ8RqUxbXGu3Qg3jHMahZdHpp26jhmRZXf+6Gmig6vZ4SbmT2EdS3VW5S7cc5umT81FmvaC+7rQ26X9KvKVGt/8VgAMhoo33PHuoZOoq+6WqC99PxgFcMdR9bVfk7TTU+UNXpD8SBzkw44dwtyj2UJkcsk+eKf/nEOWpJDdR9BSCFJJfigPeN/BBsD5FyxQTYpsIuoWCmxju3QtfhJrhYEfx/ZGq3cK9KOCL0BnUcJd+/BH5YAMbZ0ZEYo0Jd4HSn0aidEM2UhEzhTZSGTNFNlKR4+CoFduEd+UG2PraeDfC4G4o4IgK2w0HR/RViFt1T/hW39jZcMQzI8IHGu9QA9w5TXh2UPCh1D+Yoo261/gOv9GThX/dhjgotfF9pSf2+k9AhVSIDxVSIT5USIX4UCEV4kOFVIgPFVIhPlRIhfhQIRXiQ4VUiA8VUiE+VEiF+FAhFeJDhVSIz9cr/AF79V2yoD2oxQAAAABJRU5ErkJggg==">
          </Avatar>
          <div> 
            Slide 2
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img width="100%" src="https://a.travel-assets.com/findyours-php/viewfinder/images/res40/482000/482003-Doha-And-Vicinity.jpg"></img>
          <div className="center">
          <Avatar src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEXMzMz////JycnNzc3n5+f39/fy8vL8/Pzp6enU1NTs7Oz5+fnQ0NDZ2dnf39/09PTgONpwAAAE/ElEQVR4nO2cCZaDIBBEI64o6v1vOzoZJ+ISFZpQSeofII8KvQvcboQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEK2UQ9iL0UcpdJUt11WFyN11rU6TT9Hp1Kmq/oysSn7qjOfIFLd2qxJ9miy9vbeIpXO+l15d/pMv7FGXe1v32wjKx17oW4oXS19b4+yesN9VGl2Vt+vxix9N43dGfu0bLWLveRLmPqivpHaxF72eXTuIDBJ8neJOKq94oFzyvY9nDFz1DeSxV78GSoPgUlSxV7+IamfwEFiGlvCAb4C0XdR+fjgRAYcblQnIDBJOlyJrYjAJGljC9nDuObBJSVqdeNSqm1Tx5ayiUiUmYB0RX21m3hGg1iiytnoSBFbzhqpODoBF0+VW8O0T47miTK5fg5Yz59Kb+GwiVgluLQXjmB5YhFAIVQ41QEEJglQThQtZx4gtVHycWYkjy3rQRgjBYo1gYwUyUyPvqC50scWNpEGEpgkKEk/RLq/g+KI8jXpBEhtqmQ7wzk1SKgJUbLdQSncwuT7EZScLzVEXFPGlvZHMIFJElvaH1RIhVQYHyqkQnyFn5/xJT862aBUbR9feX9B9xRqEIVzCOzzpxjh0kVsYf98/DTxCybCoRwRxg1D5fwmtqwHX/B17eO/kH7BV26hg6U2YGfbApw2iS1pwcefGJJPGECp4o64J4J54YhscQpTks7QkuOaEioXTkgWNiitr00ql/YLlCMKC8TsFNNGb+PFQyGFuNcQhXoMpJ5ihcRgEfM6yYRAtEGNMhPeEiEFKj1flZ+hWiaK8gqBrsv5urzuyVp3ZHVTI6SN9tcsrfDXOd9WtzomM/acReR5m9JTvT1vBVwv5C+u4/95dB/xVRClZ2Fl/l8rp3hTWG6nHj9RxNJoO1xpm5P3yx/Wj8e5wt4uRjONZWPKXAs4lbH3aVEd5RHccV2gLdxItedNtVhWouu/58X9lNp+vWQxeTircaVvM6fmr/TG3aHM6o8+filq/UqUMjsDkReObvZbiNosV2G6qtlLHmVTdeuL6UsHf/IHhuJZXdZvVCGmzYr1qvMia7fu3T+rF17TdqgD59qa5CpldDfIvC++HMR1evPBvaNMWrzAUI9vi+4laKWOn4Y8LPjC3yzdiwJzysxtGVaNtEcf+EWJk+WYS4IeaoRT5WzYBvLIB2fruDhNUumTByQXPx3QFy+d78q7889aKnPlhb5wZ8GujtKaTJ8RqUxbXGu3Qg3jHMahZdHpp26jhmRZXf+6Gmig6vZ4SbmT2EdS3VW5S7cc5umT81FmvaC+7rQ26X9KvKVGt/8VgAMhoo33PHuoZOoq+6WqC99PxgFcMdR9bVfk7TTU+UNXpD8SBzkw44dwtyj2UJkcsk+eKf/nEOWpJDdR9BSCFJJfigPeN/BBsD5FyxQTYpsIuoWCmxju3QtfhJrhYEfx/ZGq3cK9KOCL0BnUcJd+/BH5YAMbZ0ZEYo0Jd4HSn0aidEM2UhEzhTZSGTNFNlKR4+CoFduEd+UG2PraeDfC4G4o4IgK2w0HR/RViFt1T/hW39jZcMQzI8IHGu9QA9w5TXh2UPCh1D+Yoo261/gOv9GThX/dhjgotfF9pSf2+k9AhVSIDxVSIT5USIX4UCEV4kOFVIgPFVIhPlRIhfhQIRXiQ4VUiA8VUiE+VEiF+FAhFeJDhVSIz9cr/AF79V2yoD2oxQAAAABJRU5ErkJggg==">
          </Avatar>           
          <div> 
            Slide 3
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <img width="100%" src="https://a.travel-assets.com/findyours-php/viewfinder/images/res40/482000/482003-Doha-And-Vicinity.jpg"></img>
          <div className="center">
          <Avatar src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEXMzMz////JycnNzc3n5+f39/fy8vL8/Pzp6enU1NTs7Oz5+fnQ0NDZ2dnf39/09PTgONpwAAAE/ElEQVR4nO2cCZaDIBBEI64o6v1vOzoZJ+ISFZpQSeofII8KvQvcboQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEK2UQ9iL0UcpdJUt11WFyN11rU6TT9Hp1Kmq/oysSn7qjOfIFLd2qxJ9miy9vbeIpXO+l15d/pMv7FGXe1v32wjKx17oW4oXS19b4+yesN9VGl2Vt+vxix9N43dGfu0bLWLveRLmPqivpHaxF72eXTuIDBJ8neJOKq94oFzyvY9nDFz1DeSxV78GSoPgUlSxV7+IamfwEFiGlvCAb4C0XdR+fjgRAYcblQnIDBJOlyJrYjAJGljC9nDuObBJSVqdeNSqm1Tx5ayiUiUmYB0RX21m3hGg1iiytnoSBFbzhqpODoBF0+VW8O0T47miTK5fg5Yz59Kb+GwiVgluLQXjmB5YhFAIVQ41QEEJglQThQtZx4gtVHycWYkjy3rQRgjBYo1gYwUyUyPvqC50scWNpEGEpgkKEk/RLq/g+KI8jXpBEhtqmQ7wzk1SKgJUbLdQSncwuT7EZScLzVEXFPGlvZHMIFJElvaH1RIhVQYHyqkQnyFn5/xJT862aBUbR9feX9B9xRqEIVzCOzzpxjh0kVsYf98/DTxCybCoRwRxg1D5fwmtqwHX/B17eO/kH7BV26hg6U2YGfbApw2iS1pwcefGJJPGECp4o64J4J54YhscQpTks7QkuOaEioXTkgWNiitr00ql/YLlCMKC8TsFNNGb+PFQyGFuNcQhXoMpJ5ihcRgEfM6yYRAtEGNMhPeEiEFKj1flZ+hWiaK8gqBrsv5urzuyVp3ZHVTI6SN9tcsrfDXOd9WtzomM/acReR5m9JTvT1vBVwv5C+u4/95dB/xVRClZ2Fl/l8rp3hTWG6nHj9RxNJoO1xpm5P3yx/Wj8e5wt4uRjONZWPKXAs4lbH3aVEd5RHccV2gLdxItedNtVhWouu/58X9lNp+vWQxeTircaVvM6fmr/TG3aHM6o8+filq/UqUMjsDkReObvZbiNosV2G6qtlLHmVTdeuL6UsHf/IHhuJZXdZvVCGmzYr1qvMia7fu3T+rF17TdqgD59qa5CpldDfIvC++HMR1evPBvaNMWrzAUI9vi+4laKWOn4Y8LPjC3yzdiwJzysxtGVaNtEcf+EWJk+WYS4IeaoRT5WzYBvLIB2fruDhNUumTByQXPx3QFy+d78q7889aKnPlhb5wZ8GujtKaTJ8RqUxbXGu3Qg3jHMahZdHpp26jhmRZXf+6Gmig6vZ4SbmT2EdS3VW5S7cc5umT81FmvaC+7rQ26X9KvKVGt/8VgAMhoo33PHuoZOoq+6WqC99PxgFcMdR9bVfk7TTU+UNXpD8SBzkw44dwtyj2UJkcsk+eKf/nEOWpJDdR9BSCFJJfigPeN/BBsD5FyxQTYpsIuoWCmxju3QtfhJrhYEfx/ZGq3cK9KOCL0BnUcJd+/BH5YAMbZ0ZEYo0Jd4HSn0aidEM2UhEzhTZSGTNFNlKR4+CoFduEd+UG2PraeDfC4G4o4IgK2w0HR/RViFt1T/hW39jZcMQzI8IHGu9QA9w5TXh2UPCh1D+Yoo261/gOv9GThX/dhjgotfF9pSf2+k9AhVSIDxVSIT5USIX4UCEV4kOFVIgPFVIhPlRIhfhQIRXiQ4VUiA8VUiE+VEiF+FAhFeJDhVSIz9cr/AF79V2yoD2oxQAAAABJRU5ErkJggg==">
          </Avatar> 
          <div> 
            Slide 4
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="center">
          <Avatar src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEXMzMz////JycnNzc3n5+f39/fy8vL8/Pzp6enU1NTs7Oz5+fnQ0NDZ2dnf39/09PTgONpwAAAE/ElEQVR4nO2cCZaDIBBEI64o6v1vOzoZJ+ISFZpQSeofII8KvQvcboQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEK2UQ9iL0UcpdJUt11WFyN11rU6TT9Hp1Kmq/oysSn7qjOfIFLd2qxJ9miy9vbeIpXO+l15d/pMv7FGXe1v32wjKx17oW4oXS19b4+yesN9VGl2Vt+vxix9N43dGfu0bLWLveRLmPqivpHaxF72eXTuIDBJ8neJOKq94oFzyvY9nDFz1DeSxV78GSoPgUlSxV7+IamfwEFiGlvCAb4C0XdR+fjgRAYcblQnIDBJOlyJrYjAJGljC9nDuObBJSVqdeNSqm1Tx5ayiUiUmYB0RX21m3hGg1iiytnoSBFbzhqpODoBF0+VW8O0T47miTK5fg5Yz59Kb+GwiVgluLQXjmB5YhFAIVQ41QEEJglQThQtZx4gtVHycWYkjy3rQRgjBYo1gYwUyUyPvqC50scWNpEGEpgkKEk/RLq/g+KI8jXpBEhtqmQ7wzk1SKgJUbLdQSncwuT7EZScLzVEXFPGlvZHMIFJElvaH1RIhVQYHyqkQnyFn5/xJT862aBUbR9feX9B9xRqEIVzCOzzpxjh0kVsYf98/DTxCybCoRwRxg1D5fwmtqwHX/B17eO/kH7BV26hg6U2YGfbApw2iS1pwcefGJJPGECp4o64J4J54YhscQpTks7QkuOaEioXTkgWNiitr00ql/YLlCMKC8TsFNNGb+PFQyGFuNcQhXoMpJ5ihcRgEfM6yYRAtEGNMhPeEiEFKj1flZ+hWiaK8gqBrsv5urzuyVp3ZHVTI6SN9tcsrfDXOd9WtzomM/acReR5m9JTvT1vBVwv5C+u4/95dB/xVRClZ2Fl/l8rp3hTWG6nHj9RxNJoO1xpm5P3yx/Wj8e5wt4uRjONZWPKXAs4lbH3aVEd5RHccV2gLdxItedNtVhWouu/58X9lNp+vWQxeTircaVvM6fmr/TG3aHM6o8+filq/UqUMjsDkReObvZbiNosV2G6qtlLHmVTdeuL6UsHf/IHhuJZXdZvVCGmzYr1qvMia7fu3T+rF17TdqgD59qa5CpldDfIvC++HMR1evPBvaNMWrzAUI9vi+4laKWOn4Y8LPjC3yzdiwJzysxtGVaNtEcf+EWJk+WYS4IeaoRT5WzYBvLIB2fruDhNUumTByQXPx3QFy+d78q7889aKnPlhb5wZ8GujtKaTJ8RqUxbXGu3Qg3jHMahZdHpp26jhmRZXf+6Gmig6vZ4SbmT2EdS3VW5S7cc5umT81FmvaC+7rQ26X9KvKVGt/8VgAMhoo33PHuoZOoq+6WqC99PxgFcMdR9bVfk7TTU+UNXpD8SBzkw44dwtyj2UJkcsk+eKf/nEOWpJDdR9BSCFJJfigPeN/BBsD5FyxQTYpsIuoWCmxju3QtfhJrhYEfx/ZGq3cK9KOCL0BnUcJd+/BH5YAMbZ0ZEYo0Jd4HSn0aidEM2UhEzhTZSGTNFNlKR4+CoFduEd+UG2PraeDfC4G4o4IgK2w0HR/RViFt1T/hW39jZcMQzI8IHGu9QA9w5TXh2UPCh1D+Yoo261/gOv9GThX/dhjgotfF9pSf2+k9AhVSIDxVSIT5USIX4UCEV4kOFVIgPFVIhPlRIhfhQIRXiQ4VUiA8VUiE+VEiF+FAhFeJDhVSIz9cr/AF79V2yoD2oxQAAAABJRU5ErkJggg==">
          </Avatar> 
          <div> 
            Slide 5
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="center">
          <Avatar src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEXMzMz////JycnNzc3n5+f39/fy8vL8/Pzp6enU1NTs7Oz5+fnQ0NDZ2dnf39/09PTgONpwAAAE/ElEQVR4nO2cCZaDIBBEI64o6v1vOzoZJ+ISFZpQSeofII8KvQvcboQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEK2UQ9iL0UcpdJUt11WFyN11rU6TT9Hp1Kmq/oysSn7qjOfIFLd2qxJ9miy9vbeIpXO+l15d/pMv7FGXe1v32wjKx17oW4oXS19b4+yesN9VGl2Vt+vxix9N43dGfu0bLWLveRLmPqivpHaxF72eXTuIDBJ8neJOKq94oFzyvY9nDFz1DeSxV78GSoPgUlSxV7+IamfwEFiGlvCAb4C0XdR+fjgRAYcblQnIDBJOlyJrYjAJGljC9nDuObBJSVqdeNSqm1Tx5ayiUiUmYB0RX21m3hGg1iiytnoSBFbzhqpODoBF0+VW8O0T47miTK5fg5Yz59Kb+GwiVgluLQXjmB5YhFAIVQ41QEEJglQThQtZx4gtVHycWYkjy3rQRgjBYo1gYwUyUyPvqC50scWNpEGEpgkKEk/RLq/g+KI8jXpBEhtqmQ7wzk1SKgJUbLdQSncwuT7EZScLzVEXFPGlvZHMIFJElvaH1RIhVQYHyqkQnyFn5/xJT862aBUbR9feX9B9xRqEIVzCOzzpxjh0kVsYf98/DTxCybCoRwRxg1D5fwmtqwHX/B17eO/kH7BV26hg6U2YGfbApw2iS1pwcefGJJPGECp4o64J4J54YhscQpTks7QkuOaEioXTkgWNiitr00ql/YLlCMKC8TsFNNGb+PFQyGFuNcQhXoMpJ5ihcRgEfM6yYRAtEGNMhPeEiEFKj1flZ+hWiaK8gqBrsv5urzuyVp3ZHVTI6SN9tcsrfDXOd9WtzomM/acReR5m9JTvT1vBVwv5C+u4/95dB/xVRClZ2Fl/l8rp3hTWG6nHj9RxNJoO1xpm5P3yx/Wj8e5wt4uRjONZWPKXAs4lbH3aVEd5RHccV2gLdxItedNtVhWouu/58X9lNp+vWQxeTircaVvM6fmr/TG3aHM6o8+filq/UqUMjsDkReObvZbiNosV2G6qtlLHmVTdeuL6UsHf/IHhuJZXdZvVCGmzYr1qvMia7fu3T+rF17TdqgD59qa5CpldDfIvC++HMR1evPBvaNMWrzAUI9vi+4laKWOn4Y8LPjC3yzdiwJzysxtGVaNtEcf+EWJk+WYS4IeaoRT5WzYBvLIB2fruDhNUumTByQXPx3QFy+d78q7889aKnPlhb5wZ8GujtKaTJ8RqUxbXGu3Qg3jHMahZdHpp26jhmRZXf+6Gmig6vZ4SbmT2EdS3VW5S7cc5umT81FmvaC+7rQ26X9KvKVGt/8VgAMhoo33PHuoZOoq+6WqC99PxgFcMdR9bVfk7TTU+UNXpD8SBzkw44dwtyj2UJkcsk+eKf/nEOWpJDdR9BSCFJJfigPeN/BBsD5FyxQTYpsIuoWCmxju3QtfhJrhYEfx/ZGq3cK9KOCL0BnUcJd+/BH5YAMbZ0ZEYo0Jd4HSn0aidEM2UhEzhTZSGTNFNlKR4+CoFduEd+UG2PraeDfC4G4o4IgK2w0HR/RViFt1T/hW39jZcMQzI8IHGu9QA9w5TXh2UPCh1D+Yoo261/gOv9GThX/dhjgotfF9pSf2+k9AhVSIDxVSIT5USIX4UCEV4kOFVIgPFVIhPlRIhfhQIRXiQ4VUiA8VUiE+VEiF+FAhFeJDhVSIz9cr/AF79V2yoD2oxQAAAABJRU5ErkJggg==">
          </Avatar> 
          <div> 
            Slide 6
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="center">
          <Avatar src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEXMzMz////JycnNzc3n5+f39/fy8vL8/Pzp6enU1NTs7Oz5+fnQ0NDZ2dnf39/09PTgONpwAAAE/ElEQVR4nO2cCZaDIBBEI64o6v1vOzoZJ+ISFZpQSeofII8KvQvcboQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEK2UQ9iL0UcpdJUt11WFyN11rU6TT9Hp1Kmq/oysSn7qjOfIFLd2qxJ9miy9vbeIpXO+l15d/pMv7FGXe1v32wjKx17oW4oXS19b4+yesN9VGl2Vt+vxix9N43dGfu0bLWLveRLmPqivpHaxF72eXTuIDBJ8neJOKq94oFzyvY9nDFz1DeSxV78GSoPgUlSxV7+IamfwEFiGlvCAb4C0XdR+fjgRAYcblQnIDBJOlyJrYjAJGljC9nDuObBJSVqdeNSqm1Tx5ayiUiUmYB0RX21m3hGg1iiytnoSBFbzhqpODoBF0+VW8O0T47miTK5fg5Yz59Kb+GwiVgluLQXjmB5YhFAIVQ41QEEJglQThQtZx4gtVHycWYkjy3rQRgjBYo1gYwUyUyPvqC50scWNpEGEpgkKEk/RLq/g+KI8jXpBEhtqmQ7wzk1SKgJUbLdQSncwuT7EZScLzVEXFPGlvZHMIFJElvaH1RIhVQYHyqkQnyFn5/xJT862aBUbR9feX9B9xRqEIVzCOzzpxjh0kVsYf98/DTxCybCoRwRxg1D5fwmtqwHX/B17eO/kH7BV26hg6U2YGfbApw2iS1pwcefGJJPGECp4o64J4J54YhscQpTks7QkuOaEioXTkgWNiitr00ql/YLlCMKC8TsFNNGb+PFQyGFuNcQhXoMpJ5ihcRgEfM6yYRAtEGNMhPeEiEFKj1flZ+hWiaK8gqBrsv5urzuyVp3ZHVTI6SN9tcsrfDXOd9WtzomM/acReR5m9JTvT1vBVwv5C+u4/95dB/xVRClZ2Fl/l8rp3hTWG6nHj9RxNJoO1xpm5P3yx/Wj8e5wt4uRjONZWPKXAs4lbH3aVEd5RHccV2gLdxItedNtVhWouu/58X9lNp+vWQxeTircaVvM6fmr/TG3aHM6o8+filq/UqUMjsDkReObvZbiNosV2G6qtlLHmVTdeuL6UsHf/IHhuJZXdZvVCGmzYr1qvMia7fu3T+rF17TdqgD59qa5CpldDfIvC++HMR1evPBvaNMWrzAUI9vi+4laKWOn4Y8LPjC3yzdiwJzysxtGVaNtEcf+EWJk+WYS4IeaoRT5WzYBvLIB2fruDhNUumTByQXPx3QFy+d78q7889aKnPlhb5wZ8GujtKaTJ8RqUxbXGu3Qg3jHMahZdHpp26jhmRZXf+6Gmig6vZ4SbmT2EdS3VW5S7cc5umT81FmvaC+7rQ26X9KvKVGt/8VgAMhoo33PHuoZOoq+6WqC99PxgFcMdR9bVfk7TTU+UNXpD8SBzkw44dwtyj2UJkcsk+eKf/nEOWpJDdR9BSCFJJfigPeN/BBsD5FyxQTYpsIuoWCmxju3QtfhJrhYEfx/ZGq3cK9KOCL0BnUcJd+/BH5YAMbZ0ZEYo0Jd4HSn0aidEM2UhEzhTZSGTNFNlKR4+CoFduEd+UG2PraeDfC4G4o4IgK2w0HR/RViFt1T/hW39jZcMQzI8IHGu9QA9w5TXh2UPCh1D+Yoo261/gOv9GThX/dhjgotfF9pSf2+k9AhVSIDxVSIT5USIX4UCEV4kOFVIgPFVIhPlRIhfhQIRXiQ4VUiA8VUiE+VEiF+FAhFeJDhVSIz9cr/AF79V2yoD2oxQAAAABJRU5ErkJggg==">
          </Avatar> 
          <div> 
            Slide 7
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="center">
          <Avatar src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEXMzMz////JycnNzc3n5+f39/fy8vL8/Pzp6enU1NTs7Oz5+fnQ0NDZ2dnf39/09PTgONpwAAAE/ElEQVR4nO2cCZaDIBBEI64o6v1vOzoZJ+ISFZpQSeofII8KvQvcboQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEK2UQ9iL0UcpdJUt11WFyN11rU6TT9Hp1Kmq/oysSn7qjOfIFLd2qxJ9miy9vbeIpXO+l15d/pMv7FGXe1v32wjKx17oW4oXS19b4+yesN9VGl2Vt+vxix9N43dGfu0bLWLveRLmPqivpHaxF72eXTuIDBJ8neJOKq94oFzyvY9nDFz1DeSxV78GSoPgUlSxV7+IamfwEFiGlvCAb4C0XdR+fjgRAYcblQnIDBJOlyJrYjAJGljC9nDuObBJSVqdeNSqm1Tx5ayiUiUmYB0RX21m3hGg1iiytnoSBFbzhqpODoBF0+VW8O0T47miTK5fg5Yz59Kb+GwiVgluLQXjmB5YhFAIVQ41QEEJglQThQtZx4gtVHycWYkjy3rQRgjBYo1gYwUyUyPvqC50scWNpEGEpgkKEk/RLq/g+KI8jXpBEhtqmQ7wzk1SKgJUbLdQSncwuT7EZScLzVEXFPGlvZHMIFJElvaH1RIhVQYHyqkQnyFn5/xJT862aBUbR9feX9B9xRqEIVzCOzzpxjh0kVsYf98/DTxCybCoRwRxg1D5fwmtqwHX/B17eO/kH7BV26hg6U2YGfbApw2iS1pwcefGJJPGECp4o64J4J54YhscQpTks7QkuOaEioXTkgWNiitr00ql/YLlCMKC8TsFNNGb+PFQyGFuNcQhXoMpJ5ihcRgEfM6yYRAtEGNMhPeEiEFKj1flZ+hWiaK8gqBrsv5urzuyVp3ZHVTI6SN9tcsrfDXOd9WtzomM/acReR5m9JTvT1vBVwv5C+u4/95dB/xVRClZ2Fl/l8rp3hTWG6nHj9RxNJoO1xpm5P3yx/Wj8e5wt4uRjONZWPKXAs4lbH3aVEd5RHccV2gLdxItedNtVhWouu/58X9lNp+vWQxeTircaVvM6fmr/TG3aHM6o8+filq/UqUMjsDkReObvZbiNosV2G6qtlLHmVTdeuL6UsHf/IHhuJZXdZvVCGmzYr1qvMia7fu3T+rF17TdqgD59qa5CpldDfIvC++HMR1evPBvaNMWrzAUI9vi+4laKWOn4Y8LPjC3yzdiwJzysxtGVaNtEcf+EWJk+WYS4IeaoRT5WzYBvLIB2fruDhNUumTByQXPx3QFy+d78q7889aKnPlhb5wZ8GujtKaTJ8RqUxbXGu3Qg3jHMahZdHpp26jhmRZXf+6Gmig6vZ4SbmT2EdS3VW5S7cc5umT81FmvaC+7rQ26X9KvKVGt/8VgAMhoo33PHuoZOoq+6WqC99PxgFcMdR9bVfk7TTU+UNXpD8SBzkw44dwtyj2UJkcsk+eKf/nEOWpJDdR9BSCFJJfigPeN/BBsD5FyxQTYpsIuoWCmxju3QtfhJrhYEfx/ZGq3cK9KOCL0BnUcJd+/BH5YAMbZ0ZEYo0Jd4HSn0aidEM2UhEzhTZSGTNFNlKR4+CoFduEd+UG2PraeDfC4G4o4IgK2w0HR/RViFt1T/hW39jZcMQzI8IHGu9QA9w5TXh2UPCh1D+Yoo261/gOv9GThX/dhjgotfF9pSf2+k9AhVSIDxVSIT5USIX4UCEV4kOFVIgPFVIhPlRIhfhQIRXiQ4VUiA8VUiE+VEiF+FAhFeJDhVSIz9cr/AF79V2yoD2oxQAAAABJRU5ErkJggg==">
          </Avatar>         
          <div> 
            Slide 8
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="center">
          <Avatar src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEXMzMz////JycnNzc3n5+f39/fy8vL8/Pzp6enU1NTs7Oz5+fnQ0NDZ2dnf39/09PTgONpwAAAE/ElEQVR4nO2cCZaDIBBEI64o6v1vOzoZJ+ISFZpQSeofII8KvQvcboQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEK2UQ9iL0UcpdJUt11WFyN11rU6TT9Hp1Kmq/oysSn7qjOfIFLd2qxJ9miy9vbeIpXO+l15d/pMv7FGXe1v32wjKx17oW4oXS19b4+yesN9VGl2Vt+vxix9N43dGfu0bLWLveRLmPqivpHaxF72eXTuIDBJ8neJOKq94oFzyvY9nDFz1DeSxV78GSoPgUlSxV7+IamfwEFiGlvCAb4C0XdR+fjgRAYcblQnIDBJOlyJrYjAJGljC9nDuObBJSVqdeNSqm1Tx5ayiUiUmYB0RX21m3hGg1iiytnoSBFbzhqpODoBF0+VW8O0T47miTK5fg5Yz59Kb+GwiVgluLQXjmB5YhFAIVQ41QEEJglQThQtZx4gtVHycWYkjy3rQRgjBYo1gYwUyUyPvqC50scWNpEGEpgkKEk/RLq/g+KI8jXpBEhtqmQ7wzk1SKgJUbLdQSncwuT7EZScLzVEXFPGlvZHMIFJElvaH1RIhVQYHyqkQnyFn5/xJT862aBUbR9feX9B9xRqEIVzCOzzpxjh0kVsYf98/DTxCybCoRwRxg1D5fwmtqwHX/B17eO/kH7BV26hg6U2YGfbApw2iS1pwcefGJJPGECp4o64J4J54YhscQpTks7QkuOaEioXTkgWNiitr00ql/YLlCMKC8TsFNNGb+PFQyGFuNcQhXoMpJ5ihcRgEfM6yYRAtEGNMhPeEiEFKj1flZ+hWiaK8gqBrsv5urzuyVp3ZHVTI6SN9tcsrfDXOd9WtzomM/acReR5m9JTvT1vBVwv5C+u4/95dB/xVRClZ2Fl/l8rp3hTWG6nHj9RxNJoO1xpm5P3yx/Wj8e5wt4uRjONZWPKXAs4lbH3aVEd5RHccV2gLdxItedNtVhWouu/58X9lNp+vWQxeTircaVvM6fmr/TG3aHM6o8+filq/UqUMjsDkReObvZbiNosV2G6qtlLHmVTdeuL6UsHf/IHhuJZXdZvVCGmzYr1qvMia7fu3T+rF17TdqgD59qa5CpldDfIvC++HMR1evPBvaNMWrzAUI9vi+4laKWOn4Y8LPjC3yzdiwJzysxtGVaNtEcf+EWJk+WYS4IeaoRT5WzYBvLIB2fruDhNUumTByQXPx3QFy+d78q7889aKnPlhb5wZ8GujtKaTJ8RqUxbXGu3Qg3jHMahZdHpp26jhmRZXf+6Gmig6vZ4SbmT2EdS3VW5S7cc5umT81FmvaC+7rQ26X9KvKVGt/8VgAMhoo33PHuoZOoq+6WqC99PxgFcMdR9bVfk7TTU+UNXpD8SBzkw44dwtyj2UJkcsk+eKf/nEOWpJDdR9BSCFJJfigPeN/BBsD5FyxQTYpsIuoWCmxju3QtfhJrhYEfx/ZGq3cK9KOCL0BnUcJd+/BH5YAMbZ0ZEYo0Jd4HSn0aidEM2UhEzhTZSGTNFNlKR4+CoFduEd+UG2PraeDfC4G4o4IgK2w0HR/RViFt1T/hW39jZcMQzI8IHGu9QA9w5TXh2UPCh1D+Yoo261/gOv9GThX/dhjgotfF9pSf2+k9AhVSIDxVSIT5USIX4UCEV4kOFVIgPFVIhPlRIhfhQIRXiQ4VUiA8VUiE+VEiF+FAhFeJDhVSIz9cr/AF79V2yoD2oxQAAAABJRU5ErkJggg==">
          </Avatar> 
          <div> 
            Slide 9
          </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export { Stories }