import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { FormProvider, useForm } from "react-hook-form";
import theme from './style/theme';
import GlobalStyle from "./style/GlobalStyle";
import Home from "./pages/Home";
import Finance from "./pages/Finance";
import NoMatch from "./pages/NoMatch";
import Benefits from "./pages/Benefits";
import Support from "./pages/Support";
import Company from "./pages/Company";
import User from "./pages/User";
import FooterInfo from "./pages/FooterInfo";


function App() {
  const methods = useForm({
    mode: 'onBlur',
    defaultValues: {
      userGender: "1"
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <FormProvider {...methods}>
        <GlobalStyle />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="finance" element={<Finance />}>
              <Route path="smallbizLoan" element={<Finance />} />
              <Route path="smallbizCard" element={<Finance />} />
              <Route path="stealthBankbook" element={<Finance />} />
            </Route>
            <Route path="benefits" element={<Benefits />}>
              <Route path="smallbizSupportList" element={<Benefits />} />
              <Route path="smallbizSupportDetail" element={<Benefits />} />
              <Route path="smallbizTaxRebate" element={<Benefits />} />
              <Route path="civilSafety" element={<Benefits />} />
              <Route path="eventList" element={<Benefits />} />
              <Route path="eventDetail" element={<Benefits />} />
            </Route>
            <Route path="support" element={<Support />}>
              <Route path="noticeList" element={<Support />} />
              <Route path="noticeDetail" element={<Support />} />
              <Route path="faqList" element={<Support />} />
              <Route path="counselingRequestForm" element={<Support />} />
              <Route path="mobileGuide" element={<Support />} />
            </Route>
            <Route path="company" element={<Company />}>
              <Route path="introduction" element={<Company />} />
              <Route path="rightPeople" element={<Company />} />
              <Route path="recruitSystem" element={<Company />} />
              <Route path="recruitList" element={<Company />} />
              <Route path="recruitDetail" element={<Company />} />
            </Route>
            <Route path="user" element={<User />}>
              <Route path="login" element={<User />} />
              <Route path="userJoin" element={<User />} />
            </Route>
            <Route path="layout" element={<FooterInfo />}>
              <Route path="termsOfUse" element={<FooterInfo />} />
              <Route path="privacyPolicy" element={<FooterInfo />} />
            </Route>
            
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </Router>
      </FormProvider>
    </ThemeProvider>
  );
}

export default App;
