import "./Banner.css";
import photo from "../../../assets/photo.jpg";

function Banner() {
  return (
    <section className="banner">
      <div className="banner-text">
        <ul>
  <li>عروض وخصومات لأننا هانوفر ثمن الإعلانات اللي بتضاف على سعر المنتج</li>
  <li>إشعارات مستمرة بأجدد المنتجات والخصومات</li>
  <li>سرعة طلب الأوردر والتأكيد عليه وبالتالي سرعة الشحن</li>
  <li>نظام النقاط اللي من خلاله تاخدي خصومات وهدايا</li>
  <li>نظام التحويلات اللي من خلاله تقدري تكسبي فلوس عند ترشيحنا لعميلة جديدة تسجل معنا</li>
  <li>سجلي دلوقتي علشان تكوني من الأوائل اللي هايخدو مكافآت</li>
</ul>

<a href="#contact" className="banner-btn">ابدئي الآن</a>
      </div>

      <div className="banner-img">
        <img
          src={photo}
          alt="Banner"
        />
      </div>
    </section>
  );
}

export default Banner;
