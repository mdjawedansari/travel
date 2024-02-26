import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/signup.jpg";
import Footer from "../components/Footer";
import SignupForm from "../components/SignupForm";
function Signup () {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Signup"
        btnClass="hide"
      />
      <SignupForm />
      <Footer />
    </>
  )
}

export default Signup;