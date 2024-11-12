import { Route, Routes } from "react-router-dom";
import Header from "./features/ui/Header";
import Footer from "./features/ui/Footer";
import Home from "./pages/Home";
import Compoments from "./pages/Copoments";
import SideBar from "@features/ui/SideBar";
import { FlexContainer, RootContainer } from "@features/ui/Container";
import Input from "./pages/form/Input";
import Btn from "./pages/form/Btn";
import Tab from "./pages/form/Tab";
import Faq from "./pages/ui/Faq";
import SignIn from "./pages/ui/SignIn";
import SignUp from "./pages/ui/SignUp";
import Pay from "./pages/ui/Pay";
import List from "./pages/list/List";

function App() {
  return (
    <>
      <Header />
      <RootContainer>
        <SideBar />
        <FlexContainer>
          <Routes>
            <Route path="/input" element={<Input />} />
            <Route path="/tab" element={<Tab />} />
            <Route path="/btn" element={<Btn />} />

            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/list" element={<List />} />
            <Route path="/pay" element={<Pay />} />
            <Route path="/" element={<Home />} />
            {/* <Route path="/" element={<SignIn />} />
            <Route path="/id-find" element={<IdFind />} />
            <Route path="/pw-find" element={<PwFind />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/*" element={<NotFound />} /> */}
          </Routes>
        </FlexContainer>
      </RootContainer>
      <Footer />
    </>
  );
}

export default App;
