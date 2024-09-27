import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Index from './pages';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./assets/scss/style.scss"
import "./assets/css/materialdesignicons.min.css"

import IndexBusiness from './pages/index-business';
import IndexSaas from './pages/index-saas';
import IndexGym from './pages/index-gym';
import IndexPersonal from './pages/index-personal';
import IndexStudio from './pages/index-studio';
import IndexDigitalAgency from './pages/index-digital-agency';
import IndexMarketing from './pages/index-marketing';
import IndexRestaurant from './pages/index-restaurant';
import IndexPortfolio from './pages/index-portfolio';
import IndexMultiBusiness from './pages/index-multi-business';
import IndexStartup from './pages/index-startup';
import IndexCryptoCurrency from './pages/index-cryptocurrency';
import IndexJob from './pages/index-job';
import Job from './pages/jobs';
import JobDetails from './pages/job-detail';
import JobApply from './pages/job-apply';
import IndexPortfolioAgency from './pages/index-portfolio-agency';
import ClassicTwo from './pages/classic-two';
import ClassicThree from './pages/classic-three';
import ClassicFour from './pages/classic-four';
import ClassicFive from './pages/classic-five';
import ClassicSix from './pages/classic-six';
import ModernTwo from './pages/modern-two';
import ModernThree from './pages/portfolio-modern-three';
import ModernFour from './pages/modern-four';
import ModernFive from './pages/modern-five';
import ModernSix from './pages/modern-six';
import GridTwo from './pages/grid-two';
import GridThree from './pages/grid-three';
import Gridfour from './pages/grid-four';
import Gridfive from './pages/grid-five';
import GridSix from './pages/grid-six';
import PortfolioDetailTwo from './pages/portfolio-detail-two';
import PortfolioDetailThree from './pages/portfolio-detail-three';
import PortfolioDetailOne from './pages/portfolio-detail-one';
import ClassicMasonry from './pages/classic-masonry';
import ModernMasonry from './pages/modern-masonry';
import GridMasonry from './pages/grid-masonry';
import ProjectMasonry from './pages/portfolio-project-masonry';
import IndexPhotography from './pages/index-photography';
import PhotographyAbout from './pages/photography-about';
import PhotographyPortfolio from './pages/photography-portfolio';
import PhotographyContact from './pages/photography-contact';
import IndexCoWorking from './pages/index-co-working';
import IndexBlog from './pages/index-blog';
import BlogStandardPost from './pages/blog-standard-post';
import BlogSliderPost from './pages/blog-slider-post';
import BlogGalleryPost from './pages/blog-gallery-post';
import BlogYoutubePost from './pages/blog-youtube-post';
import BlogVimeoPost from './pages/blog-vimeo-post';
import BlogHtmlVideoPost from './pages/blog-html-video-post';
import BlogAudioPost from './pages/blog-audio-post';
import BlogHtmlAudioPost from './pages/blog-html-audio-post';
import BlogBlockquotePost from './pages/blog-blockquote-post';
import BlogLeftStandardPost from './pages/blog-left-sidebar-post';
import BlogGrid from './pages/challenges_list';
import BlogGridSidebar from './pages/blog-grid-sidebar';
import AboutUs from './pages/page-aboutus';
import PageServices from './pages/page-services';
import ServicesDetails from './pages/page-service-detail';
import PageTeam from './pages/page-team';
import TeamDetail from './pages/page-team-detail';
import Pricing from "./pages/page-pricing"
import Faqs from './pages/page-faqs';
import Login from './pages/auth-login';
import Signup from './pages/auth-signup';
import ResetPassword from './pages/auth-reset-password';
import Comingsoon from './pages/page-comingsoon';
import Maintenance from './pages/page-maintenance'; 
import Error from './pages/page-error';
import CreateChallenge from './pages/create-challenge';
import ContactTwo from './pages/page-contact-two';
import VerifEmail from './pages/verif-email';
import ChallengeEdit from './pages/challenge_edit';
import ChallengeDetails from './pages/challenge_details';
import ChallengesList from './pages/challenges_list';
import CreateTeam from './pages/create_team';
import JoinTeam from './pages/joinTeam';
import AddSolution from './pages/addSolution';
import Solutions from './pages/solutions';
import AddSoloSolution from './pages/addSoloSolution';
import Teams from './pages/teams';
import Users from './pages/users';
import AddWinner from './pages/addWinner';
import Payment from './componants/Stripe/Payment';
import Success from './componants/Stripe/Success';

function App() {
  // useEffect(() => {
  //   document.getElementById('theme-opt').href = './css/style.scss'
  // }, [])
  return (
    <>
    <Routes>
    <Route path='/' element={<Login/>}/>

      {/* <Route path='/' element={<Index/>}/> */}
      <Route path='/index-business' element={<IndexBusiness/>}/>
      <Route path='/index-saas' element={<IndexSaas/>}/>
      <Route path='/index-gym' element={<IndexGym/>}/>
      <Route path='/index-personal' element={<IndexPersonal/>}/>
      <Route path='/index-studio' element={<IndexStudio/>}/>
      <Route path='/index-digital-agency' element={<IndexDigitalAgency/>}/>
      <Route path='/index-marketing' element={<IndexMarketing/>}/>
      <Route path='/index-restaurant' element={<IndexRestaurant/>}/>
      <Route path='/index-portfolio' element={<IndexPortfolio/>}/>
      <Route path='/index-multi-business' element={<IndexMultiBusiness/>}/>
      <Route path='/index-startup' element={<IndexStartup/>}/>
      <Route path='/index-cryptocurrency' element={<IndexCryptoCurrency/>}/>
      <Route path='/index-job' element={<IndexJob/>}/>
      <Route path='/jobs' element={<Job/>}/>
      <Route path='/job-detail' element={<JobDetails/>}/>
      <Route path='/job-detail/:id' element={<JobDetails/>}/>
      <Route path='/job-apply' element={<JobApply/>}/>
      <Route path='/index-portfolio-agency' element={<IndexPortfolioAgency/>}/>
      <Route path='/portfolio-classic-two' element={<ClassicTwo/>}/>
      <Route path='/portfolio-classic-three' element={<ClassicThree/>}/>
      <Route path='/portfolio-classic-four' element={<ClassicFour/>}/>
      <Route path='/portfolio-classic-five' element={<ClassicFive/>}/>
      <Route path='/portfolio-classic-six' element={<ClassicSix/>}/>
      <Route path='/portfolio-modern-two' element={<ModernTwo/>}/>
      <Route path='/portfolio-modern-three' element={<ModernThree/>}/>
      <Route path='/portfolio-modern-four' element={ <ModernFour/>}/>
      <Route path='/portfolio-modern-five' element={ <ModernFive/>}/>
      <Route path='/portfolio-modern-six' element={ <ModernSix/>}/>
      <Route path='/portfolio-grid-two' element={ <GridTwo/>}/>
      <Route path='/portfolio-grid-three' element={ <GridThree/>}/>
      <Route path='/portfolio-grid-four' element={ <Gridfour/>}/>
      <Route path='/portfolio-grid-five' element={ <Gridfive/>}/>
      <Route path='/portfolio-grid-six' element={ <GridSix/>}/>
      <Route path='/portfolio-detail-one' element={<PortfolioDetailOne/>}/>
      <Route path='/portfolio-detail-two' element={ <PortfolioDetailTwo/>}/>
      <Route path='/portfolio-detail-three' element={ <PortfolioDetailThree/>}/>
      <Route path='/portfolio-classic-masonry' element={<ClassicMasonry/>}/>
      <Route path='/portfolio-modern-masonry' element={<ModernMasonry/>}/>
      <Route path='/portfolio-grid-masonry' element={<GridMasonry/>}/>
      <Route path='/portfolio-project-masonry' element={<ProjectMasonry/>}/>
      <Route path='/index-photography' element={<IndexPhotography/>}/>
      <Route path='/photography-about' element={<PhotographyAbout/>}/>
      <Route path='/photography-portfolio' element={<PhotographyPortfolio/>}/>
      <Route path='/photography-contact' element={<PhotographyContact/>}/>
      <Route path='/index-co-working' element={<IndexCoWorking/>}/>
      <Route path='/index-blog' element={<IndexBlog/>}/>
      <Route path='/blog-standard-post' element={<BlogStandardPost/>}/>
      <Route path='/blog-standard-post/:id' element={<BlogStandardPost/>}/>
      <Route path='/blog-slider-post' element={<BlogSliderPost/>}/>
      <Route path='/blog-gallery-post' element={<BlogGalleryPost/>}/>
      <Route path='/blog-youtube-post' element={<BlogYoutubePost/>}/>
      <Route path='/blog-vimeo-post' element={<BlogVimeoPost/>}/>
      <Route path='/blog-html-video-post' element={<BlogHtmlVideoPost/>}/>
      <Route path='/blog-audio-post' element={<BlogAudioPost/>}/>
      <Route path='/blog-html-audio-post' element={<BlogHtmlAudioPost/>}/>
      <Route path='/blog-blockquote-post' element={<BlogBlockquotePost/>}/>
      <Route path='/blog-left-sidebar-post' element={<BlogLeftStandardPost/>}/>
      <Route path='/blog-grid-sidebar' element={<BlogGridSidebar/>}/>
      <Route path='/page-aboutus' element={<AboutUs/>}/>
      <Route path='/page-services' element={<PageServices/>}/>
      <Route path='/page-service-detail' element={<ServicesDetails/>}/>
      <Route path='/page-service-detail/:id' element={<ServicesDetails/>}/>
      <Route path='/page-team' element={<PageTeam/>}/>
      <Route path='/page-team-detail' element={<TeamDetail/>}/>
      <Route path='/page-team-detail/:id' element={<TeamDetail/>}/>
      <Route path='/page-pricing' element={<Pricing/>}/>
      <Route path='/page-faqs' element={<Faqs/>}/>
      <Route path='/auth-login' element={<Login/>}/>
      <Route path='/auth-signup' element={<Signup/>}/>
      <Route path='/auth-reset-password' element={<ResetPassword/>}/>
      <Route path='/verif-email' element={<VerifEmail/>}/>
      <Route path='/page-comingsoon' element={<Comingsoon/>}/>
      <Route path='/page-maintenance' element={<Maintenance/>}/>
      <Route path='/page-error' element={<Error/>}/>
      <Route path='*' element={<Error/>}/>
      <Route path='/page-contact-two' element={<ContactTwo/>}/>
      <Route path='/edit-challenge/:id' element={<ChallengeEdit/>}/>
      <Route path='/challenge-details/:id' element={<ChallengeDetails/>}/>
      <Route path='/challenges-list' element={<ChallengesList/>}/>
      <Route path='/create-challenge' element={<CreateChallenge/>}/>
      <Route path='/createTeam' element={<CreateTeam/>}/>
      <Route path='/joinTeam' element={<JoinTeam/>}/>
      <Route path='/add-solution/:challengeId' element={<AddSolution />} />
      <Route path='/addSolution/:challengeId' element={<AddSoloSolution />} />
      <Route path='/solutions/:id' element={<Solutions />} />
      <Route path='/teams' element={<Teams />} />
      <Route path='/users' element={<Users />} />
      <Route path='/winners' element={<AddWinner />} />
      <Route path="/fund" element={<Payment />} />
      <Route path="/success" element={<Success/>} />


      
    </Routes>
    </>
  );
}

export default App;
