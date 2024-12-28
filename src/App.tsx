import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import MaxWidthWrapper from "./layouts/MaxWidthWrapper";

import Header from "./layouts/Header";
import { Toaster } from "./components/ui/toaster";

import Footer from "./layouts/Footer";
import { useAppDispatch } from "./hooks/useRedux";
import { checkAuth } from "./store/features/userSlice";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  return (
    <div className="bg-gray-100">
      <Header />
      <MaxWidthWrapper className="w-full min-h-screen">
        <Outlet />
      </MaxWidthWrapper>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
