import React, { createContext, useState } from 'react'
import { Navbar } from './components'
import { About, Footer, Header, Projects, Skills } from './containers';



const AppContext = createContext(null);
export const useData = () => {
  const context = React.useContext(AppContext);

  if (!context) {
    throw new Error("useData must be used within a <Parent />");
  }

  return context;
};

const App = () => {
  const [toggleTheme, setToggleTheme] = useState<boolean>(false);
  return (
    <AppContext.Provider value={{ themeToggle: [toggleTheme, setToggleTheme] }}>
      <div className={toggleTheme ? "dark" : ""}>
        <div className={` dark:bg-lightprimary  bg-portprimary dark:text-portprimary text-white min-h-screen px-10 md:px-20 lg:px-40 opacity-100  `}  >
          <Navbar />
          {/* <About /> */}
          <Header />
          {/* <Skills /> */}
          <Projects />
          <Footer />
        </div>
      </div>
    </AppContext.Provider>
  )
}

export default App